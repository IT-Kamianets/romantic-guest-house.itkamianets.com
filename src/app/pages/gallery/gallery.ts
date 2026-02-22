import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CtaBanner } from '../../components/cta-banner/cta-banner';
import { RouterLink } from '@angular/router';

type GalleryItem = {
	id: number;
	title: string;
	subtitle: string;
	tags: string[];
	imageUrl: string;
};

@Component({
	selector: 'app-gallery',
	imports: [NgFor, NgIf, FormsModule, CtaBanner, RouterLink],
	templateUrl: './gallery.html',
	styleUrl: './gallery.css',
})
export class Gallery {
	searchTerm = '';
	selectedCategory = 'All';
	pageSize = 12;
	currentPage = 1;
	activeItem: GalleryItem | null = null;

	categories = [
		'All',
		'Rooms',
		'Apartment',
		'Courtyard & Vat',
		'Terrace & Views',
		'Details',
	];

	items: GalleryItem[] = [
		{
			id: 1,
			title: 'Courtyard entrance',
			subtitle: 'Warm welcome with canyon calm',
			tags: ['Courtyard & Vat'],
			imageUrl: 'assets/img/romantic-guest-house/hero/hero-01.jpg',
		},
		{
			id: 2,
			title: 'Garden path',
			subtitle: 'Soft light in the courtyard',
			tags: ['Courtyard & Vat'],
			imageUrl: 'assets/img/romantic-guest-house/hero/hero-02.jpg',
		},
		{
			id: 3,
			title: 'Courtyard vat (chan)',
			subtitle: 'Warm soak by request',
			tags: ['Courtyard & Vat'],
			imageUrl: 'assets/img/romantic-guest-house/courtyard-chan/chan-01.jpg',
		},
		{
			id: 4,
			title: 'Evening chan',
			subtitle: 'Private courtyard ritual',
			tags: ['Courtyard & Vat'],
			imageUrl: 'assets/img/romantic-guest-house/courtyard-chan/chan-02.jpg',
		},
		{
			id: 5,
			title: 'Courtyard seating',
			subtitle: 'Quiet moments outside',
			tags: ['Courtyard & Vat'],
			imageUrl: 'assets/img/romantic-guest-house/courtyard-chan/chan-03.jpg',
		},
		{
			id: 6,
			title: 'Warm courtyard glow',
			subtitle: 'Relax under soft lights',
			tags: ['Courtyard & Vat'],
			imageUrl: 'assets/img/romantic-guest-house/courtyard-chan/chan-04.jpg',
		},
		{
			id: 7,
			title: 'Courtyard corner',
			subtitle: 'Outdoor calm by the vat',
			tags: ['Courtyard & Vat'],
			imageUrl: 'assets/img/romantic-guest-house/courtyard-chan/chan-05.jpg',
		},
		{
			id: 8,
			title: 'Exterior view',
			subtitle: 'Quiet canyon-side setting',
			tags: ['Courtyard & Vat', 'Terrace & Views'],
			imageUrl: 'assets/img/romantic-guest-house/exterior/exterior-01.jpg',
		},
		{
			id: 9,
			title: 'Exterior terrace',
			subtitle: 'Fresh air and calm views',
			tags: ['Courtyard & Vat', 'Terrace & Views'],
			imageUrl: 'assets/img/romantic-guest-house/exterior/exterior-02.jpg',
		},
		{
			id: 10,
			title: 'Exterior details',
			subtitle: 'Stone and wood textures',
			tags: ['Courtyard & Vat'],
			imageUrl: 'assets/img/romantic-guest-house/exterior/exterior-03.jpg',
		},
		{
			id: 11,
			title: 'Garden seating',
			subtitle: 'Green yard atmosphere',
			tags: ['Courtyard & Vat'],
			imageUrl: 'assets/img/romantic-guest-house/exterior/garden-01.jpg',
		},
		{
			id: 12,
			title: 'Garden view',
			subtitle: 'Courtyard calm in the morning',
			tags: ['Courtyard & Vat'],
			imageUrl: 'assets/img/romantic-guest-house/exterior/garden-02.jpg',
		},
		{
			id: 13,
			title: 'Deluxe king',
			subtitle: 'Oriental accents, attic calm',
			tags: ['Rooms'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-01.jpg',
		},
		{
			id: 14,
			title: 'Deluxe king corner',
			subtitle: 'Warm lighting and textiles',
			tags: ['Rooms'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-02.jpg',
		},
		{
			id: 15,
			title: 'Deluxe king details',
			subtitle: 'Soft textures and calm',
			tags: ['Rooms', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-03.jpg',
		},
		{
			id: 16,
			title: 'Deluxe king lighting',
			subtitle: 'Evening glow indoors',
			tags: ['Rooms', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-04.jpg',
		},
		{
			id: 17,
			title: 'King bed comfort',
			subtitle: 'Relaxed boutique setup',
			tags: ['Rooms'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-05.jpg',
		},
		{
			id: 18,
			title: 'Attic-style room',
			subtitle: 'Romantic, cozy layout',
			tags: ['Rooms'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-06.jpg',
		},
		{
			id: 19,
			title: 'Warm textiles',
			subtitle: 'Romantic touches',
			tags: ['Rooms', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-07.jpg',
		},
		{
			id: 20,
			title: 'King suite angle',
			subtitle: 'Soft light and comfort',
			tags: ['Rooms'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-08.jpg',
		},
		{
			id: 21,
			title: 'Boutique finish',
			subtitle: 'Quiet room atmosphere',
			tags: ['Rooms', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-09.jpg',
		},
		{
			id: 22,
			title: 'Deluxe king view',
			subtitle: 'Relaxed boutique setting',
			tags: ['Rooms'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-10.jpg',
		},
		{
			id: 23,
			title: 'King bathroom',
			subtitle: 'Clean, modern finish',
			tags: ['Rooms', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-bath-01.jpg',
		},
		{
			id: 24,
			title: 'Bathroom details',
			subtitle: 'Simple, fresh design',
			tags: ['Rooms', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-bath-02.jpg',
		},
		{
			id: 25,
			title: 'Deluxe double',
			subtitle: 'Boutique double comfort',
			tags: ['Rooms'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-01.jpg',
		},
		{
			id: 26,
			title: 'Double room lighting',
			subtitle: 'Calm evening glow',
			tags: ['Rooms', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-02.jpg',
		},
		{
			id: 27,
			title: 'Double room corner',
			subtitle: 'Cozy boutique layout',
			tags: ['Rooms'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-03.jpg',
		},
		{
			id: 28,
			title: 'Double bed details',
			subtitle: 'Warm textiles and light',
			tags: ['Rooms', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-04.jpg',
		},
		{
			id: 29,
			title: 'Double bathroom',
			subtitle: 'Clean and comfortable',
			tags: ['Rooms', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-bath-01.jpg',
		},
		{
			id: 30,
			title: 'Bathroom detail',
			subtitle: 'Fresh interior finish',
			tags: ['Rooms', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-bath-02.jpg',
		},
		{
			id: 31,
			title: 'Balcony view',
			subtitle: 'Quiet canyon atmosphere',
			tags: ['Rooms', 'Terrace & Views'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-balcony-01.jpg',
		},
		{
			id: 32,
			title: 'Apartment living',
			subtitle: 'Extra space for families',
			tags: ['Apartment'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-01.jpg',
		},
		{
			id: 33,
			title: 'Apartment lounge',
			subtitle: 'Comfortable seating area',
			tags: ['Apartment'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-02.jpg',
		},
		{
			id: 34,
			title: 'Apartment bedroom',
			subtitle: 'Warm, calm setup',
			tags: ['Apartment'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-03.jpg',
		},
		{
			id: 35,
			title: 'Apartment details',
			subtitle: 'Practical comfort',
			tags: ['Apartment', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-04.jpg',
		},
		{
			id: 36,
			title: 'Apartment corner',
			subtitle: 'Soft light and space',
			tags: ['Apartment'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-05.jpg',
		},
		{
			id: 37,
			title: 'Apartment layout',
			subtitle: 'Room for friends and family',
			tags: ['Apartment'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-06.jpg',
		},
		{
			id: 38,
			title: 'Work corner',
			subtitle: 'Comfortable desk setup',
			tags: ['Apartment', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-work-01.jpg',
		},
		{
			id: 39,
			title: 'Balcony outlook',
			subtitle: 'Fresh air and light',
			tags: ['Apartment', 'Terrace & Views'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-view-01.jpg',
		},
		{
			id: 40,
			title: 'Apartment extra',
			subtitle: 'Additional seating area',
			tags: ['Apartment'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-01.jpg',
		},
		{
			id: 41,
			title: 'Apartment extra room',
			subtitle: 'Comfortable layout',
			tags: ['Apartment'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-02.jpg',
		},
		{
			id: 42,
			title: 'Apartment light',
			subtitle: 'Relaxed interior',
			tags: ['Apartment'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-03.jpg',
		},
		{
			id: 43,
			title: 'Apartment corner view',
			subtitle: 'Calm, airy space',
			tags: ['Apartment'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-04.jpg',
		},
		{
			id: 44,
			title: 'Apartment textures',
			subtitle: 'Warm finishes',
			tags: ['Apartment', 'Details'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-05.jpg',
		},
		{
			id: 45,
			title: 'Apartment interior',
			subtitle: 'Comfortable and spacious',
			tags: ['Apartment'],
			imageUrl: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-06.jpg',
		},
		{
			id: 46,
			title: 'Wood terrace',
			subtitle: 'Outdoor dining corner',
			tags: ['Details', 'Terrace & Views'],
			imageUrl: 'assets/img/romantic-guest-house/details/wood-01.jpg',
		},
		{
			id: 47,
			title: 'Wooden seating',
			subtitle: 'Relaxed outdoor vibe',
			tags: ['Details', 'Terrace & Views'],
			imageUrl: 'assets/img/romantic-guest-house/details/wood-02.jpg',
		},
		{
			id: 48,
			title: 'Terrace corner',
			subtitle: 'Warm wood textures',
			tags: ['Details', 'Terrace & Views'],
			imageUrl: 'assets/img/romantic-guest-house/details/wood-03.jpg',
		},
		{
			id: 49,
			title: 'Outdoor table',
			subtitle: 'Simple dining setup',
			tags: ['Details', 'Terrace & Views'],
			imageUrl: 'assets/img/romantic-guest-house/details/wood-04.jpg',
		},
		{
			id: 50,
			title: 'Wood detail',
			subtitle: 'Natural textures',
			tags: ['Details'],
			imageUrl: 'assets/img/romantic-guest-house/details/wood-05.jpg',
		},
		{
			id: 51,
			title: 'Romantic detail',
			subtitle: 'Soft light and accents',
			tags: ['Details'],
			imageUrl: 'assets/img/romantic-guest-house/details/detail-01.jpg',
		},
		{
			id: 52,
			title: 'Room accents',
			subtitle: 'Quiet boutique touch',
			tags: ['Details'],
			imageUrl: 'assets/img/romantic-guest-house/details/detail-02.jpg',
		},
		{
			id: 53,
			title: 'Textile detail',
			subtitle: 'Warm textures',
			tags: ['Details'],
			imageUrl: 'assets/img/romantic-guest-house/details/detail-03.jpg',
		},
		{
			id: 54,
			title: 'Romantic atmosphere',
			subtitle: 'Soft lighting',
			tags: ['Details'],
			imageUrl: 'assets/img/romantic-guest-house/details/detail-04.jpg',
		},
		{
			id: 55,
			title: 'Interior detail',
			subtitle: 'Quiet, warm mood',
			tags: ['Details'],
			imageUrl: 'assets/img/romantic-guest-house/details/detail-05.jpg',
		},
	];

	get filteredItems(): GalleryItem[] {
		const search = this.searchTerm.trim().toLowerCase();
		const category = this.selectedCategory;

		return this.items.filter((item) => {
			const matchesCategory = category === 'All' || item.tags.includes(category);

			if (!matchesCategory) {
				return false;
			}

			if (!search) {
				return true;
			}

			const haystack = `${item.title} ${item.subtitle} ${item.tags.join(' ')}`.toLowerCase();
			return haystack.includes(search);
		});
	}

	get totalPages(): number {
		return Math.max(1, Math.ceil(this.filteredItems.length / this.pageSize));
	}

	get pageNumbers(): number[] {
		return Array.from({ length: this.totalPages }, (_, index) => index + 1);
	}

	get pagedItems(): GalleryItem[] {
		const start = (this.currentPage - 1) * this.pageSize;
		return this.filteredItems.slice(start, start + this.pageSize);
	}

	get hasResults(): boolean {
		return this.filteredItems.length > 0;
	}

	onFiltersChanged(): void {
		this.currentPage = 1;
	}

	goToPage(page: number): void {
		if (page < 1 || page > this.totalPages) {
			return;
		}
		this.currentPage = page;
	}

	nextPage(): void {
		this.goToPage(this.currentPage + 1);
	}

	prevPage(): void {
		this.goToPage(this.currentPage - 1);
	}

	openModal(item: GalleryItem): void {
		this.activeItem = item;
	}

	closeModal(): void {
		this.activeItem = null;
	}
}
