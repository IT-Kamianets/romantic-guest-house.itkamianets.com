import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Section } from '../section/section';
import { Split } from '../split/split';
import { FeatureList } from '../feature-list/feature-list';

@Component({
	selector: 'app-showcase',
	imports: [RouterLink, Section, Split, FeatureList],
	templateUrl: './showcase.html',
	styleUrl: './showcase.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Showcase {}
