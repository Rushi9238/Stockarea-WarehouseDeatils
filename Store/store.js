import {configureStore} from '@reduxjs/toolkit'
import dataSlice from './dataSlice'

export const wearhouseStore=configureStore({
reducer:{
    dataSlice,
}
})