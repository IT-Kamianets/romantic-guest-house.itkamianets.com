import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-media-card',
	standalone: true,
	imports: [NgIf],
	templateUrl: './media-card.html',
	styleUrl: './media-card.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaCard {
	@Input() src = '';
	@Input() alt = '';
	@Input() badge?: string;
	@Input() captionTitle?: string;
	@Input() captionText?: string;
}
