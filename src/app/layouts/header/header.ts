import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService, ThemeName } from '../../services/theme.service';

@Component({
	selector: 'app-header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './header.html',
	styleUrl: './header.css',
})
export class Header {
	protected readonly theme = inject(ThemeService);
	private readonly router = inject(Router);
	private readonly platformId = inject(PLATFORM_ID);
	protected isMenuOpen = false;
	protected isThemeMenuOpen = false;
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

	protected toggleThemeMenu(): void {
		this.isThemeMenuOpen = !this.isThemeMenuOpen;
	}

	protected closeThemeMenu(): void {
		this.isThemeMenuOpen = false;
	}

	protected setTheme(theme: ThemeName): void {
		this.theme.setTheme(theme);
		this.closeThemeMenu();
	}
}
