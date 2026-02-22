import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
	selector: 'app-section',
	standalone: true,
	imports: [NgIf, NgClass],
	templateUrl: './section.html',
	styleUrl: './section.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section {
	@Input() kicker?: string;
	@Input() title?: string;
	@Input() subtitle?: string;
	@Input() centered = false;
}
