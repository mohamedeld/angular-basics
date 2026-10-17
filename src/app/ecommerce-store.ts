import { signalStore, withState } from '@ngrx/signals';
import { Product } from './modes/product';

export type EcommerceState = {
  products: Product[];
  category: string;
  isLoading: boolean;
  error: string | null;
};

const initialState = {
  products: [],
  category: 'all',
  isLoading: false,
  error: null,
};

export const EcommerceStore = signalStore(withState(initialState));
