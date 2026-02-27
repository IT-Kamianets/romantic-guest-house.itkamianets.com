import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AMENITY_GROUPS, POPULAR_AMENITIES, AmenityGroup } from '../../data/amenities.data';
import { PillGrid } from '../../components/pill-grid/pill-grid';
import { Section } from '../../components/section/section';
import { CtaBanner } from '../../components/cta-banner/cta-banner';
import { ContactSheetService } from '../../services/contact-sheet.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [CommonModule, PillGrid, Section, CtaBanner, TranslatePipe],
	templateUrl: './table.html',
	styleUrls: ['./table.css'],
})
export class TablePage {
	private readonly contactSheet = inject(ContactSheetService);
	popularAmenities = POPULAR_AMENITIES;
	amenityGroups = AMENITY_GROUPS;

	isSplitList(group: AmenityGroup): boolean {
		return group.items.length > 10;
	}

	openContact(): void {
		this.contactSheet.open();
	}
}
