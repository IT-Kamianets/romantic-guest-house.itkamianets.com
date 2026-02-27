export type ContactPlatform = {
	label: string;
	url: string;
	icon: string;
};

export const CONTACT_PLATFORMS: ContactPlatform[] = [
	{
		label: 'Instagram',
		url: 'https://www.instagram.com/romanticguesthouse/',
		icon: 'bi-instagram',
	},
	{
		label: 'Booking.com',
		url: 'https://www.booking.com/hotel/ua/oriental-rooms-with-balcony.html',
		icon: 'bi-bookmark-star',
	},
	{
		label: 'Hotels24',
		url: 'https://hotels24.ua/en/Kamianets-Podilskyi/Hotel-Romantic-Guest-House-16179.html',
		icon: 'bi-building',
	},
	{
		label: 'Planet of Hotels',
		url: 'https://uk.planetofhotels.com/ukrayina/kamyanec-podilskiy/romantic-guest-house',
		icon: 'bi-globe',
	},
	{
		label: 'Pokupon',
		url: 'https://pokupon.ua/uk/places/item/68484-romantic-guest-house-kamenets-podolsky/deals',
		icon: 'bi-ticket-perforated',
	},
	{
		label: 'TripAdvisor',
		url: 'https://www.tripadvisor.com/Hotel_Review-g659293-d12722638-Reviews-Romantic_Guest_House-Kamianets_Podilskyi_Khmelnytskyi_Oblast.html',
		icon: 'bi-chat-square-quote',
	},
	{
		label: 'Google Maps',
		url: 'https://www.google.com/maps?q=Rus%27ka%20Street%203%2C%20Kamianets-Podilskyi%2C%20Ukraine',
		icon: 'bi-geo-alt',
	},
];
