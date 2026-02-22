import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

export interface PillItem {
	label: string;
	icon?: string;
	paid?: boolean;
}

@Component({
	selector: 'app-pill-grid',
	standalone: true,
	imports: [NgFor, NgIf, NgClass],
	templateUrl: './pill-grid.html',
	styleUrl: './pill-grid.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillGrid {
	@Input() items: PillItem[] = [];
}
