import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-hero',
	imports: [RouterLink],
	templateUrl: './hero.html',
	styleUrl: './hero.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
	heroImage = 'assets/img/romantic-guest-house/hero/hero-01.jpg';
	private fallbackImage = 'assets/img/romantic-guest-house/exterior/exterior-01.jpg';

	setHeroFallback(): void {
		if (this.heroImage !== this.fallbackImage) {
			this.heroImage = this.fallbackImage;
		}
	}
}
