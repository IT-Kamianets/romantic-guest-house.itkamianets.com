import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { ContactSheet } from '../../components/contact-sheet/contact-sheet';
import { MobileNav } from '../mobile-nav/mobile-nav';

@Component({
	selector: 'app-public',
	imports: [RouterOutlet, Header, Footer, ContactSheet, MobileNav],
	templateUrl: './public.html',
	styleUrl: './public.css',
})
export class Public {}
