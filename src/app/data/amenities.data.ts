export interface AmenityItem {
	label: string;
	paid?: boolean;
	note?: string;
}

export interface AmenityGroup {
	title: string;
	icon: string;
	items: AmenityItem[];
}

export interface PopularAmenity extends AmenityItem {
	icon: string;
}

export const POPULAR_AMENITIES: PopularAmenity[] = [
	{ label: 'Free parking', icon: 'bi-car-front' },
	{ label: 'Free Wi-Fi', icon: 'bi-wifi' },
	{ label: 'Family rooms', icon: 'bi-people' },
	{ label: 'Non-smoking rooms', icon: 'bi-slash-circle' },
	{ label: '24-hour front desk', icon: 'bi-person-badge' },
	{ label: 'Airport shuttle', icon: 'bi-truck', paid: true },
	{ label: 'Room service', icon: 'bi-bell' },
	{ label: 'Tea/coffee maker in all rooms', icon: 'bi-cup-hot' },
	{ label: 'Private beach area', icon: 'bi-water' },
	{ label: 'BBQ area', icon: 'bi-fire' },
];

export const AMENITY_GROUPS: AmenityGroup[] = [
	{
		title: 'Great for your stay',
		icon: 'bi-stars',
		items: [
			{ label: 'Private bathroom' },
			{ label: 'Free parking' },
			{ label: 'Free Wi-Fi' },
			{ label: 'Parking on site' },
			{ label: 'Pets allowed' },
			{ label: 'Family rooms' },
		],
	},
	{
		title: 'Bathroom',
		icon: 'bi-droplet',
		items: [
			{ label: 'Toilet paper' },
			{ label: 'Towels' },
			{ label: 'Towels/bed linen', paid: true },
			{ label: 'Bath or shower' },
			{ label: 'Slippers' },
			{ label: 'Toilet' },
			{ label: 'Free toiletries' },
			{ label: 'Hairdryer' },
			{ label: 'Shower' },
		],
	},
	{
		title: 'Bedroom',
		icon: 'bi-moon-stars',
		items: [
			{ label: 'Linen' },
			{ label: 'Wardrobe or closet' },
			{ label: 'Alarm clock' },
		],
	},
	{
		title: 'View',
		icon: 'bi-binoculars',
		items: [
			{ label: 'Inner courtyard view' },
			{ label: 'River view' },
			{ label: 'City view' },
			{ label: 'Landmark view' },
			{ label: 'Garden view' },
			{ label: 'Lake view' },
		],
	},
	{
		title: 'Outdoors',
		icon: 'bi-tree',
		items: [
			{ label: 'Outdoor fireplace' },
			{ label: 'Picnic area' },
			{ label: 'Outdoor furniture' },
			{ label: 'Outdoor dining area' },
			{ label: 'Sun terrace' },
			{ label: 'Private beach area' },
			{ label: 'Patio' },
			{ label: 'Terrace' },
			{ label: 'BBQ area' },
		],
	},
	{
		title: 'Kitchen',
		icon: 'bi-cup-hot',
		items: [
			{ label: 'Dining table' },
			{ label: 'Electric kettle' },
			{ label: 'Washing machine' },
			{ label: 'Refrigerator' },
			{ label: 'Kitchenette' },
		],
	},
	{
		title: 'Room amenities',
		icon: 'bi-house-heart',
		items: [
			{ label: 'Socket near the bed' },
			{ label: 'Clothes rack' },
		],
	},
	{
		title: 'Pets',
		icon: 'bi-paw',
		items: [{ label: 'Pets are allowed on request. No extra charges.' }],
	},
	{
		title: 'Activities',
		icon: 'bi-person-walking',
		items: [
			{ label: 'Beach' },
			{ label: 'Hiking (Off-site)' },
		],
	},
	{
		title: 'Living area',
		icon: 'bi-sofa',
		items: [
			{ label: 'Dining area' },
			{ label: 'Sitting area' },
		],
	},
	{
		title: 'Food & Drink',
		icon: 'bi-cup-straw',
		items: [
			{ label: "Kids' meals" },
			{ label: 'Special diet menus (on request)' },
			{ label: 'Breakfast in the room' },
			{ label: 'Tea/Coffee maker' },
		],
	},
	{
		title: 'Internet',
		icon: 'bi-wifi',
		items: [{ label: 'WiFi is available in all areas and is free of charge.' }],
	},
	{
		title: 'Parking',
		icon: 'bi-car-front',
		items: [
			{ label: 'Free parking on site' },
			{ label: 'Free private parking is possible on site (reservation is not needed)' },
			{ label: 'Valet parking' },
			{ label: 'Street parking' },
		],
	},
	{
		title: 'Front desk',
		icon: 'bi-person-badge',
		items: [
			{ label: 'Invoice provided' },
			{ label: 'Private check-in/check-out' },
			{ label: 'Baggage storage' },
			{ label: 'Tour desk' },
			{ label: 'Express check-in/check-out' },
			{ label: '24-hour front desk' },
		],
	},
	{
		title: 'Family services',
		icon: 'bi-joystick',
		items: [
			{ label: 'Outdoor play equipment for kids' },
			{ label: 'Board games/puzzles' },
			{ label: 'Babysitting/child services', paid: true },
		],
	},
	{
		title: 'Cleaning services',
		icon: 'bi-bucket',
		items: [
			{ label: 'Daily housekeeping' },
			{ label: 'Laundry', paid: true },
		],
	},
	{
		title: 'Safety & security',
		icon: 'bi-shield-lock',
		items: [{ label: 'CCTV outside property' }],
	},
	{
		title: 'General',
		icon: 'bi-info-circle',
		items: [
			{ label: 'Shuttle service', paid: true },
			{ label: 'Grocery deliveries', paid: true },
			{ label: 'Hypoallergenic' },
			{ label: 'Designated smoking area' },
			{ label: 'Non-smoking throughout' },
			{ label: 'Allergy-free room' },
			{ label: 'Mosquito net' },
			{ label: 'Wake-up service' },
			{ label: 'Hardwood or parquet floors' },
			{ label: 'Heating' },
			{ label: 'Private entrance' },
			{ label: 'Packed lunches' },
			{ label: 'Ironing service' },
			{ label: 'Airport shuttle', paid: true },
			{ label: 'Non-smoking rooms' },
			{ label: 'Iron' },
			{ label: 'Room service' },
		],
	},
	{
		title: 'Wellness',
		icon: 'bi-heart-pulse',
		items: [
			{ label: 'Full body massage', paid: true },
			{ label: 'Hand massage', paid: true },
			{ label: 'Head massage', paid: true },
			{ label: 'Couples massage', paid: true },
			{ label: 'Neck massage', paid: true },
			{ label: 'Back massage', paid: true },
			{ label: 'Spa/wellness packages' },
			{ label: 'Foot bath' },
			{ label: 'Spa lounge/relaxation area' },
			{ label: 'Spa amenities' },
			{ label: 'Beach chairs/loungers' },
			{ label: 'Open-air bath', paid: true },
			{ label: 'Hot spring bath' },
			{ label: 'Massage', paid: true },
			{ label: 'Sauna' },
		],
	},
	{
		title: 'Languages spoken',
		icon: 'bi-translate',
		items: [
			{ label: 'Ukrainian' },
			{ label: 'Russian' },
		],
	},
];
