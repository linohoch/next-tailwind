import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: productState = {
    productList: [],
    page: 1,
}
const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers:{
        setList:(state,action:PayloadAction<product[]>)=>{
            state.productList = action.payload
        },
    }
})
export const productActions = {...productSlice.actions}
export default productSlice.reducer

interface productState {
    productList: product[],
    page: number
}
export type product = {
    no: number,
    // id: string,
    thumbnail: string,
    title: string,
    // author: string,
    // publisher: string,
    // text: string,
    stock: number,
    // status: string,
    // category: string,
    // priority: int,
    // date: DateTime,
    price: number,
    photo: string[],
    // discount: int,
    // sales: int,
    // admin: int,
}