import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import {slice} from './state/goods'

import { iGoods } from '../components/good-list/types';

//export * from './slices/goods'

export const store = configureStore({
    reducer: {
        goods: slice.goods as any
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch