import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-how-it-works',
	imports: [TranslatePipe],
	templateUrl: './how-it-works.html',
	styleUrl: './how-it-works.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorks {}
