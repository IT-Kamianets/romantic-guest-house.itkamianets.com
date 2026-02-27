import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

export interface PillItem {
	label: string;
	icon?: string;
	paid?: boolean;
}

@Component({
	selector: 'app-pill-grid',
	standalone: true,
	imports: [NgFor, NgIf, NgClass, TranslatePipe],
	templateUrl: './pill-grid.html',
	styleUrl: './pill-grid.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillGrid {
	@Input() items: PillItem[] = [];
}
