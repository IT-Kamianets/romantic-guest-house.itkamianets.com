import { Component, inject } from '@angular/core';
import { Section } from '../../components/section/section';
import { Split } from '../../components/split/split';
import { FeatureList } from '../../components/feature-list/feature-list';
import { CtaBanner } from '../../components/cta-banner/cta-banner';
import { ContactSheetService } from '../../services/contact-sheet.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-content',
	imports: [Section, Split, FeatureList, CtaBanner, TranslatePipe],
	templateUrl: './content.html',
	styleUrl: './content.css',
})
export class Content {
	private readonly contactSheet = inject(ContactSheetService);

	openContact(): void {
		this.contactSheet.open();
	}
}
