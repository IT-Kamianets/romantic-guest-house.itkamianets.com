import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSheetService } from '../../services/contact-sheet.service';
import { CONTACT_PLATFORMS } from '../../data/contact-platforms';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-contact-sheet',
	imports: [CommonModule, TranslatePipe],
	templateUrl: './contact-sheet.html',
	styleUrl: './contact-sheet.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSheet {
	protected readonly platforms = CONTACT_PLATFORMS;

	constructor(protected readonly contactSheet: ContactSheetService) {}

	close(): void {
		this.contactSheet.close();
	}
}
