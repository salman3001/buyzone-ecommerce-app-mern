interface Iproduct {
	_id: string;
	name: string;
	price: number;
	category: string;
	inStock: number;
	description: string;
	images: string[];
}

interface IUser {
	_id: string;
	name: string;
	isAdmin: boolean;
	email: string;
}

interface IProductQueryString {
	category: string;
	search: string;
	priceStart: string;
	inStock: string;
	pageLimit: string;
	pageSkip: string;
	sortPrice: string;
	sortDate: string;
}
