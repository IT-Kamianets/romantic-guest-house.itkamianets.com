import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-cta-banner',
	standalone: true,
	imports: [NgIf],
	templateUrl: './cta-banner.html',
	styleUrl: './cta-banner.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaBanner {
	@Input() kicker?: string;
	@Input() title?: string;
	@Input() body?: string;
}
