import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface orderState {
	userId: string | null;
	products: Array<{
		productId: string;
		quantity: number;
		price: number;
	}> | null;
	deliveryAddress: {
		building: string;
		street: string;
		city: string;
		mobile: number;
		pin: number;
		addressLine: string;
		country: string;
	} | null;
	status: 'Pending' | 'Confirmed' | 'Delivered' | 'Cancled' | null;
	payment: {
		mode: 'cod' | 'card';
		paid: boolean;
	} | null;
}

const initialState: orderState = { deliveryAddress: null, products: null, userId: null, status: null, payment: null };

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setUserId: (state, action: PayloadAction<NonNullable<orderState['userId']>>) => {
			state.userId = action.payload;
		},
		setProducts: (state, action: PayloadAction<NonNullable<orderState['products']>>) => {
			state.products = action.payload;
		},
		saveAddress: (state, action: PayloadAction<NonNullable<orderState['deliveryAddress']>>) => {
			state.deliveryAddress = action.payload;
		},
		setPayment: (state, action: PayloadAction<NonNullable<orderState['payment']>>) => {
			state.payment = action.payload;
		},
		setStatus: (state, action: PayloadAction<NonNullable<orderState['status']>>) => {
			state.status = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { saveAddress, setUserId, setProducts, setPayment, setStatus } = orderSlice.actions;

export default orderSlice.reducer;
