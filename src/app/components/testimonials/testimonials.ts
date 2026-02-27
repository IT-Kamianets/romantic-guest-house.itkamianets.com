import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-testimonials',
	imports: [TranslatePipe],
	templateUrl: './testimonials.html',
	styleUrl: './testimonials.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {}
