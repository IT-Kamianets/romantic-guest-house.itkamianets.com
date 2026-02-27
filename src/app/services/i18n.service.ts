import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EN } from '../i18n/en';
import { UA } from '../i18n/ua';

export type Lang = 'en' | 'ua';

type DictValue = string | { [key: string]: DictValue };
type Dictionary = Record<string, DictValue>;

const DICTIONARIES: Record<Lang, Dictionary> = {
	en: EN,
	ua: UA,
};

@Injectable({
	providedIn: 'root',
})
export class I18nService {
	private readonly storageKey = 'lang';
	private readonly platformId = inject(PLATFORM_ID);
	private readonly langSignal = signal<Lang>('en');
	readonly lang$ = computed(() => this.langSignal());

	constructor() {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		const stored = localStorage.getItem(this.storageKey) as Lang | null;
		if (stored === 'en' || stored === 'ua') {
			this.langSignal.set(stored);
		}
	}

	setLang(lang: Lang): void {
		this.langSignal.set(lang);
		if (isPlatformBrowser(this.platformId)) {
			localStorage.setItem(this.storageKey, lang);
		}
	}

	currentLang(): Lang {
		return this.langSignal();
	}

	t(key: string, params?: Record<string, string | number>): string {
		const dict = DICTIONARIES[this.langSignal()];
		const direct = dict[key];
		if (typeof direct === 'string') {
			return this.interpolate(direct, params);
		}

		const value = key.split('.').reduce<DictValue | undefined>((acc, part) => {
			if (!acc || typeof acc !== 'object') {
				return undefined;
			}
			return (acc as Record<string, DictValue>)[part];
		}, dict);

		if (typeof value === 'string') {
			return this.interpolate(value, params);
		}

		return this.interpolate(key, params);
	}

	private interpolate(text: string, params?: Record<string, string | number>): string {
		if (!params) {
			return text;
		}

		return Object.entries(params).reduce((acc, [token, value]) => {
			return acc.replace(new RegExp(`\\{${token}\\}`, 'g'), String(value));
		}, text);
	}
}
