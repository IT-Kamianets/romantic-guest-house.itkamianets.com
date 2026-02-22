import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Section } from '../section/section';
import { Split } from '../split/split';
import { MediaCard } from '../media-card/media-card';
import { FeatureList } from '../feature-list/feature-list';

@Component({
	selector: 'app-wellness-spotlight',
	standalone: true,
	imports: [Section, Split, MediaCard, FeatureList],
	templateUrl: './wellness-spotlight.html',
	styleUrl: './wellness-spotlight.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WellnessSpotlight {
	features = [
		'Hot vat (chan) available by request',
		'Courtyard relaxation area',
		'Massage options (paid separately)',
		'Sauna and open-air bath (on request)',
	];
}
