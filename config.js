// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Drifter',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://gmail.com/',
		},
		{
			id: '3',
			name: 'Based Cooking',
			icon: 'chef-hat',
			link: 'https://based.cooking',
		},
		{
			id: '4',
			name: 'Monkeytype',
			icon: 'keyboard',
			link: 'https://monkeytype.com',
		},
		{
			id: '5',
			name: 'OMV',
			icon: 'server',
			link: 'http://intel.local/#/login',
		},
		{
			id: '6',
			name: 'Proxmox',
			icon: 'monitor-dot',
			link: 'http://192.168.11.48:8006/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'Based Cooking',
			icon: 'chef-hat',
			link: 'https://based.cooking',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.ca/',
		},
		{
			id: '5',
			name: 'Memory-Express',
			icon: 'pen-tool',
			link: 'www.memoryexpress.com',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [

		{
			icon: 'coffee',
			id: '1',
			links: [
				{
					name: 'Music Playlist',
					link: 'https://www.youtube.com/playlist?list=PLdcgBq2eMCShra99iGMUaeIZgReRQUsLu',
				},
				{
					name: 'Hollow Knight',
					link: 'https://www.youtube.com/watch?v=KmVAlebjtmg',
				},
				{
					name: 'UpBeat Jazz',
					link: 'https://www.youtube.com/watch?v=cZGK-dfSTE4',
				},
				{
					name: 'Tokyo Jazz',
					link: 'https://www.youtube.com/watch?v=yTpQPs2GUVA',
				},
			],
		},
	],
	{
			icon: 'shopping-bag',
			id: '2',
			links: [
				{
					name: 'Amazon',
					link: 'https://amazon.ca',
				},
				{
					name: 'Memory Express',
					link: 'https://www.memoryexpress.com',
				},
				{
					name: 'Ebay',
					link: 'https://ebay.ca',
				},
				{
					name: 'Steam',
					link: 'https://store.steampowered.com/',
				},
			],
		],
	},
	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Unixporn',
					link: 'https://www.reddit.com/r/unixporn/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/drifter70',
				},
			],
		},
	],
};
