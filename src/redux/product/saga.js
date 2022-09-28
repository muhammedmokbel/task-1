import { call, put, takeEvery } from "redux-saga/effects";
import { openAlert } from '../alerts/slice';
import firebase from '../../lib/Firebase'; 
import { addProductSuccess, deleteProductSuccess, productSlice, retrieveProducts, retrieveProductsSuccess, updateProductSuccess } from "./slice";
import { v4 } from 'uuid'; 
import { SUCCESS_MESSAGES } from "../../constants/SuccessMessages";



// worker
function* addProductSaga({ payload }) {
    try {

        const res = yield call( firebase.writeData,payload, `/products/${v4()}` ); 
       
        if (res.status)
        {
           yield put(addProductSuccess()); 
           
          yield put(openAlert(
               {
                type: 'success',
                message: SUCCESS_MESSAGES.addProductSuccess,
                duration : 2500
            }
          )); 
           yield put(retrieveProducts());
            
        }
          
    
  } catch (error) {
    console.log(error); 
  }
}

function* retrieveProductsSaga({ payload }) {
    try {

      const products = yield call(firebase.readData, '/products');
      const productsList = Object.keys(products).map(productId => {
        return {
          id: productId,
          ...products[productId]
        };
      }); 
      yield put(retrieveProductsSuccess(productsList));
    
  } catch (error) {
    console.log(error); 
  }
}

function* deleteProductSaga({ payload }) {
    try {

       const res = yield call( firebase.deleteData,null, `/products/${payload}` ); 
      if (res.status)
      {
        yield put(openAlert(
               {
                type: 'success',
                message: SUCCESS_MESSAGES.deleteProductSuccess,
                duration : 2500
            }
        ));
        yield put(deleteProductSuccess()); 
        yield put(retrieveProducts());
            
        }
  } catch (error) {
    console.log(error); 
  }
}

function* updateProductSaga({ payload }) {
  try {
      
    const newProduct = {
      productName: payload.productName,
      productDesc: payload.productDesc,
      productCategory: payload.productCategory,
      productPrice: payload.productPrice,
    }; 

        const res = yield call( firebase.writeData,newProduct, `/products/${payload.id}` ); 
       
        if (res.status)
        {
        
           yield put(updateProductSuccess()); 
           
          yield put(openAlert(
               {
                type: 'success',
                message: SUCCESS_MESSAGES.updateProductSuccess,
                duration : 2500
            }
          )); 
          yield put(retrieveProducts());
            
        }
          
  } catch (error) {
    console.log(error); 
  }
}




// watcher
export default function* productSagaWatcher() {
  yield takeEvery(productSlice.actions.addProduct.type, addProductSaga);
  yield takeEvery(productSlice.actions.retrieveProducts.type, retrieveProductsSaga);
  yield takeEvery(productSlice.actions.deleteProduct.type, deleteProductSaga);
yield takeEvery(productSlice.actions.updateProduct.type, updateProductSaga);
}
