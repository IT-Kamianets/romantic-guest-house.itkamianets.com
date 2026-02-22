import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Product, RoomSpecifications } from '../../../models/Product.model';

@Component({
	selector: 'app-list-item',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './list-item.html',
	styleUrls: ['./list-item.css'],
})
export class ListItem {
	@Input() product!: Product;
	@Input() variant: 'card' | 'horizontal' = 'card';
	@Input() showDetails = true;

	constructor(private router: Router) {}

	get highlights(): string[] {
		if (this.product?.highlights?.length) {
			return this.product.highlights.slice(0, 3);
		}

		const specs: RoomSpecifications = this.product?.specifications ?? {};
		const items: string[] = [];

		if (specs.Sleeps) {
			items.push(`Sleeps ${specs.Sleeps}`);
		}
		if (specs.Bed) {
			items.push(`${specs.Bed}`);
		}
		if (specs.View) {
			items.push(`${specs.View}`);
		}
		if (specs.Breakfast) {
			items.push(`${specs.Breakfast}`);
		}

		return items.slice(0, 4);
	}

	bookNow(event: Event): void {
		event.stopPropagation();
		this.router.navigate(['/booking'], { queryParams: { id: this.product.id } });
	}
}
