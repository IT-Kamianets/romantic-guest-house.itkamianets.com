import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactSheetService } from '../../services/contact-sheet.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-hero',
	imports: [RouterLink, TranslatePipe],
	templateUrl: './hero.html',
	styleUrl: './hero.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
	private readonly contactSheet = inject(ContactSheetService);
	heroImage = 'assets/img/romantic-guest-house/hero/hero-01.jpg';
	private fallbackImage = 'assets/img/romantic-guest-house/exterior/exterior-01.jpg';

	setHeroFallback(): void {
		if (this.heroImage !== this.fallbackImage) {
			this.heroImage = this.fallbackImage;
		}
	}

	openContact(): void {
		this.contactSheet.open();
	}
}
