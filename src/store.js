import {configureStore} from '@reduxjs/toolkit'
import waterReducer from './features/water/waterSlicer'

export const store =  configureStore({
	reducer: {
		water: waterReducer,
	},
})
