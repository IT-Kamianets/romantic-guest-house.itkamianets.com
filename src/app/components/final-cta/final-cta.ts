import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaBanner } from '../cta-banner/cta-banner';

@Component({
	selector: 'app-final-cta',
	imports: [RouterLink, CtaBanner],
	templateUrl: './final-cta.html',
	styleUrl: './final-cta.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalCta {}
