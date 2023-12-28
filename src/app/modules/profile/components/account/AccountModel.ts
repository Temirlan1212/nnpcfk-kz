export interface IAccount {
	firstName: string
	lastName: string
	school: string
	phone: string
	cities: string
	language: string
	staj: string
	level: string
	class: string
	category: string
}

export const defaultAccount: IAccount = {
	firstName: 'Батырхан',
	lastName: 'Омирбеков',
	cities: '',
	phone: '+7 777 777 7777',
	school: 'ТОО “Спортивные дети”',
	language: 'en',

	staj: '1',
	level: 'pedagog',
	class: '5',
	category: 'Футбол',
}

export const optionsCategory = [
	{ value: 'football', label: 'Футбол' },
	{ value: 'basketball', label: 'Баскетбол' },
	{ value: 'golf', label: 'Гольф' },
]
export const optionsLanguages = [
	{ value: 'en', label: 'English' },
	{ value: 'ru', label: 'Русский' },
	{ value: 'kz', label: 'Казак' },
]
export const optionsClass = [
	{ value: '1', label: '1 класс' },
	{ value: '2', label: '2 класс' },
	{ value: '3', label: '3 класс' },
]
