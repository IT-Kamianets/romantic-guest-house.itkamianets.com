import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { filter } from 'rxjs/operators';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ContactSheetService } from '../../services/contact-sheet.service';
import { I18nService, Lang } from '../../services/i18n.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe],
	templateUrl: './header.html',
	styleUrl: './header.css',
})
export class Header {
	protected readonly i18n = inject(I18nService);
	protected readonly contactSheet = inject(ContactSheetService);
	private readonly router = inject(Router);
	private readonly platformId = inject(PLATFORM_ID);
	protected isMenuOpen = false;
	protected isScrolled = false;
	protected isHome = false;

	constructor() {
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(() => this.updateHomeState());
		this.updateHomeState();
	}

	private updateHomeState(): void {
		this.isHome = this.router.url === '/' || this.router.url.startsWith('/home');
	}

	@HostListener('window:scroll')
	onScroll(): void {
		if (!isPlatformBrowser(this.platformId)) return;
		this.isScrolled = window.scrollY > 24;
	}

	protected toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}

	protected closeMenu() {
		this.isMenuOpen = false;
	}

	protected setLang(lang: Lang): void {
		this.i18n.setLang(lang);
	}

	protected openLinks(): void {
		this.contactSheet.open();
		this.closeMenu();
	}
}
