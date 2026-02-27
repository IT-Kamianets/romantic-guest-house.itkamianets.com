import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeName, ThemeService } from '../../services/theme.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-footer',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, TranslatePipe],
	templateUrl: './footer.html',
	styleUrl: './footer.css',
})
export class Footer {
	protected readonly year = new Date().getFullYear();
	protected readonly theme = inject(ThemeService);
	protected isThemeMenuOpen = false;

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
