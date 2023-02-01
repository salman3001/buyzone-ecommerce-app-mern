import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface cartState {
	items: Array<{
		productId: string;
		quantity: number;
		price: number;
	}>;
}

const cart = localStorage.getItem('cart');
const initialState: cartState = cart !== null ? (JSON.parse(cart) as cartState) : { items: [] };

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<{ id: string; inStock: number; price: number }>) => {
			if (state.items.length > 0) {
				if (state.items.filter((product) => product.productId === action.payload.id).length > 0) {
					state.items = state.items.map((product) => {
						if (product.productId === action.payload.id) {
							if (product.quantity < action.payload.inStock) {
								product.quantity++;
								return product;
							} else {
								return product;
							}
						} else {
							return product;
						}
					});
				} else {
					state.items.push({
						productId: action.payload.id,
						quantity: 1,
						price: action.payload.price,
					});
				}
			} else {
				state.items.push({
					productId: action.payload.id,
					quantity: 1,
					price: action.payload.price,
				});
			}

			localStorage.setItem('cart', JSON.stringify(state));
		},
		reduceCartItem: (state, action: PayloadAction<{ id: string }>) => {
			state.items = state.items.map((product) => {
				if (state.items.length > 0) {
					if (product.productId === action.payload.id) {
						if (product.quantity > 1) {
							product.quantity--;
							return product;
						} else {
							return product;
						}
					} else {
						return product;
					}
				} else {
					return [];
				}
			});
			localStorage.setItem('cart', JSON.stringify(state));
		},
		removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
			state.items = state.items.filter((product) => product.productId !== action.payload.id);
			localStorage.setItem('cart', JSON.stringify(action.payload));
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, reduceCartItem } = cartSlice.actions;

export default cartSlice.reducer;
