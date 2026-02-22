import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-split',
	standalone: true,
	imports: [NgClass],
	templateUrl: './split.html',
	styleUrl: './split.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Split {
	@Input() reverse = false;
}
