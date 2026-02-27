import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContactSheetService } from '../../services/contact-sheet.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-pricing',
	imports: [TranslatePipe],
	templateUrl: './pricing.html',
	styleUrl: './pricing.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pricing {
	private readonly contactSheet = inject(ContactSheetService);

	openContact(): void {
		this.contactSheet.open();
	}
}
