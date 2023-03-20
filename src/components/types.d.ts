interface Iproduct {
	_id: string;
	name: string;
	price: number;
	category: string;
	inStock: number;
	description: string;
	images: string[];
	totalReviews?: number;
	totalStars?: number;
}

interface IUser {
	id: string;
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

interface IOrder {
	_id?: string;
	userId: string;
	products: Array<{
		id: string;
		quantity: number;
		price: number;
	}>;
	deliveryAddress: {
		building: string;
		street: string;
		city: string;
		mobile: number;
		pin: number;
		addressLine?: string;
		country: 'UAE' | 'USA';
	};
	status: 'Delivered' | 'Pending' | 'Confirmed' | 'Canceled';
	payment: {
		mode: 'cod' | 'card';
		paid: boolean;
	};
	createdAt?: Date;
}

interface IReview {
	productId: string;
	userId: string;
	userName: string;
	totalStars: number;
	reviewMessage: string;
}
