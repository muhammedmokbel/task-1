import { createSlice } from '@reduxjs/toolkit'; 

export const productSlice = createSlice({
    name: 'product',
    initialState: {
      
        isloading : false , 
        productList: [],
        productData: null,
        deletedproductId: null
    },
    reducers: {
        addProduct: (state, action) => {
            state.isloading = true; 
            state.productData = action.payload; 
        }, 
        addProductSuccess: (state, action) => {
            state.isloading =  false; 
        }, 
        retrieveProducts: (state, action) => {
            state.isloading = true; 
        }, 
        retrieveProductsSuccess: (state, action) => {
            state.isloading = false; 
            state.productList = action.payload; 
        }, 
        deleteProduct: (state, action) => {
            state.isloading = true; 
            state.deletedproductId = action.payload; 
        }, 
         deleteProductSuccess: (state, action) => {
            state.isloading = false; 
            state.deletedproductId = action.payload; 
        }, 
        updateProduct: (state, action) => {
            state.isloading = true; 
            state.productData = action.payload; 
        },
        updateProductSuccess: (state, action) => {
        state.isloading = false; 
        
        }
    }
}); 

export const { deleteProduct, deleteProductSuccess, retrieveProducts, retrieveProductsSuccess, addProduct, addProductSuccess, updateProduct, updateProductSuccess } = productSlice.actions; 

export default productSlice.reducer;