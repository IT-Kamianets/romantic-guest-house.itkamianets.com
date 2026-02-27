import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from '../../models/Product.model';
import { ListItem } from './list-item/list-item';
import { PRODUCTS } from '../../data/products';
import { I18nService } from '../../services/i18n.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface RoomFilters {
	category: string;
	searchQuery: string;
	sortBy: 'price-asc' | 'price-desc' | 'name';
}

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [CommonModule, FormsModule, ListItem, TranslatePipe],
	templateUrl: './list.html',
	styleUrls: ['./list.css'],
})
export class List implements OnInit {
	private readonly i18n = inject(I18nService);
	products: Product[] = PRODUCTS;
	filteredProducts: Product[] = [];

	categories = [
		{ id: 'rooms.categoryAll', labelKey: 'rooms.categoryAll' },
		{ id: 'rooms.categoryDeluxe', labelKey: 'rooms.categoryDeluxe' },
		{ id: 'rooms.categoryApartment', labelKey: 'rooms.categoryApartment' },
	];
	filtersOpen = false;

	filters: RoomFilters = {
		category: 'rooms.categoryAll',
		searchQuery: '',
		sortBy: 'price-asc',
	};

	ngOnInit(): void {
		this.applyFilters();
	}

	applyFilters(): void {
		let result = [...this.products];

		if (this.filters.category !== 'rooms.categoryAll') {
			result = result.filter((room) => room.category === this.filters.category);
		}

		if (this.filters.searchQuery) {
			const query = this.filters.searchQuery.toLowerCase();
			result = result.filter((room) =>
				this.i18n.t(room.title).toLowerCase().includes(query) ||
				this.i18n.t(room.description).toLowerCase().includes(query)
			);
		}

		result = this.sortRooms(result);
		this.filteredProducts = result;
	}

	sortRooms(rooms: Product[]): Product[] {
		switch (this.filters.sortBy) {
			case 'price-desc':
				return rooms.sort((a, b) => b.price - a.price);
			case 'name':
				return rooms.sort((a, b) => this.i18n.t(a.title).localeCompare(this.i18n.t(b.title)));
			case 'price-asc':
			default:
				return rooms.sort((a, b) => a.price - b.price);
		}
	}

	toggleFilters(): void {
		this.filtersOpen = !this.filtersOpen;
	}
}
