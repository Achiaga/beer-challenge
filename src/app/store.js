import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import beerSlice from '../features/beerSlice';

const middleware = [...getDefaultMiddleware()];
if (process.env.NODE_ENV !== 'production') middleware.push(logger);

export default configureStore({
	reducer: {
		beer: beerSlice,
	},
	devTools: process.env.NODE_ENV !== 'production',
	middleware,
});
