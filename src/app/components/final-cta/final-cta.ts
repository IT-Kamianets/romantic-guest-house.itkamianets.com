import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CtaBanner } from '../cta-banner/cta-banner';
import { ContactSheetService } from '../../services/contact-sheet.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-final-cta',
	imports: [CtaBanner, TranslatePipe],
	templateUrl: './final-cta.html',
	styleUrl: './final-cta.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalCta {
	private readonly contactSheet = inject(ContactSheetService);

	openContact(): void {
		this.contactSheet.open();
	}
}
