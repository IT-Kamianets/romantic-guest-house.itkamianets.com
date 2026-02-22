import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Section } from '../../components/section/section';
import { Split } from '../../components/split/split';
import { FeatureList } from '../../components/feature-list/feature-list';
import { CtaBanner } from '../../components/cta-banner/cta-banner';

@Component({
	selector: 'app-content',
	imports: [RouterLink, Section, Split, FeatureList, CtaBanner],
	templateUrl: './content.html',
	styleUrl: './content.css',
})
export class Content {}
