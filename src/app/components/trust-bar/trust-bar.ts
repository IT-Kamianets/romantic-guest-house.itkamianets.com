import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-trust-bar',
	imports: [TranslatePipe],
	templateUrl: './trust-bar.html',
	styleUrl: './trust-bar.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrustBar {}
