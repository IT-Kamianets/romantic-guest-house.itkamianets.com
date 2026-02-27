import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ContactSheetService {
	private readonly isOpenState = signal(false);
	private readonly contextLabelState = signal<string | null>(null);

	open(contextLabel?: string | null): void {
		this.contextLabelState.set(contextLabel ?? null);
		this.isOpenState.set(true);
	}

	close(): void {
		this.isOpenState.set(false);
		this.contextLabelState.set(null);
	}

	isOpen(): boolean {
		return this.isOpenState();
	}

	contextLabel(): string | null {
		return this.contextLabelState();
	}
}
