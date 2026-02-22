import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Section } from '../section/section';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-gallery-strip',
	standalone: true,
	imports: [Section, RouterLink],
	templateUrl: './gallery-strip.html',
	styleUrl: './gallery-strip.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryStrip {
	images = [
		{
			src: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-01.jpg',
			alt: 'Deluxe king room',
		},
		{
			src: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-01.jpg',
			alt: 'Deluxe double room',
		},
		{
			src: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-01.jpg',
			alt: 'Apartment with balcony',
		},
		{
			src: 'assets/img/romantic-guest-house/courtyard-chan/chan-01.jpg',
			alt: 'Courtyard vat (chan)',
		},
		{
			src: 'assets/img/romantic-guest-house/details/wood-01.jpg',
			alt: 'Wood terrace',
		},
		{
			src: 'assets/img/romantic-guest-house/details/detail-01.jpg',
			alt: 'Romantic details',
		},
		{
			src: 'assets/img/romantic-guest-house/exterior/exterior-01.jpg',
			alt: 'Exterior view',
		},
		{
			src: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-view-01.jpg',
			alt: 'Balcony view',
		},
	];
}
