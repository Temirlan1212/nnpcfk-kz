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
