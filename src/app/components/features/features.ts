import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PillGrid } from '../pill-grid/pill-grid';
import { Section } from '../section/section';
import { POPULAR_AMENITIES } from '../../data/amenities.data';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-features',
	imports: [RouterLink, PillGrid, Section, TranslatePipe],
	templateUrl: './features.html',
	styleUrl: './features.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Features {
	items = POPULAR_AMENITIES;
}
