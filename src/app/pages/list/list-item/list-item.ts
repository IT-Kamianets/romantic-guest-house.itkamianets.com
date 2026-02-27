import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product, RoomSpecifications } from '../../../models/Product.model';
import { ContactSheetService } from '../../../services/contact-sheet.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
	selector: 'app-list-item',
	standalone: true,
	imports: [CommonModule, RouterLink, TranslatePipe],
	templateUrl: './list-item.html',
	styleUrls: ['./list-item.css'],
})
export class ListItem {
	@Input() product!: Product;
	@Input() variant: 'card' | 'horizontal' = 'card';
	@Input() showDetails = true;

	constructor(private contactSheet: ContactSheetService) {}

	get highlights(): string[] {
		if (this.product?.highlights?.length) {
			return this.product.highlights.slice(0, 3);
		}
		return [];
	}

	openContact(event: Event): void {
		event.stopPropagation();
		this.contactSheet.open(this.product?.title ?? null);
	}
}
