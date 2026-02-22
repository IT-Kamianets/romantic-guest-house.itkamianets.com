import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AMENITY_GROUPS, POPULAR_AMENITIES, AmenityGroup } from '../../data/amenities.data';
import { PillGrid } from '../../components/pill-grid/pill-grid';
import { Section } from '../../components/section/section';
import { CtaBanner } from '../../components/cta-banner/cta-banner';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [CommonModule, RouterLink, PillGrid, Section, CtaBanner],
	templateUrl: './table.html',
	styleUrls: ['./table.css'],
})
export class TablePage {
	popularAmenities = POPULAR_AMENITIES;
	amenityGroups = AMENITY_GROUPS;

	isSplitList(group: AmenityGroup): boolean {
		return group.items.length > 10;
	}
}
