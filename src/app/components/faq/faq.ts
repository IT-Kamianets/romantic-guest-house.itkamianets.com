import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-faq',
	imports: [TranslatePipe],
	templateUrl: './faq.html',
	styleUrl: './faq.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Faq {}
