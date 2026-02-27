import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactSheetService } from '../../services/contact-sheet.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-mobile-nav',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe],
	templateUrl: './mobile-nav.html',
	styleUrl: './mobile-nav.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNav {
	private readonly contactSheet = inject(ContactSheetService);

	openLinks(): void {
		this.contactSheet.open();
	}
}
