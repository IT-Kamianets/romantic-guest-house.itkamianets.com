import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Section } from '../section/section';
import { Split } from '../split/split';
import { MediaCard } from '../media-card/media-card';
import { FeatureList } from '../feature-list/feature-list';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-wellness-spotlight',
	standalone: true,
	imports: [Section, Split, MediaCard, FeatureList, TranslatePipe],
	templateUrl: './wellness-spotlight.html',
	styleUrl: './wellness-spotlight.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WellnessSpotlight {
	features = [
		'wellness.feature1',
		'wellness.feature2',
		'wellness.feature3',
		'wellness.feature4',
	];
}
