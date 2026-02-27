import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-feature-list',
	standalone: true,
	imports: [NgFor, TranslatePipe],
	templateUrl: './feature-list.html',
	styleUrl: './feature-list.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureList {
	@Input() items: string[] = [];
}
