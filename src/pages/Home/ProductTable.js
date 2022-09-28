import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { deleteProduct, retrieveProducts } from '../../redux/product/slice';

import { Button, Table } from 'reactstrap';
import {useModal} from '../../hooks/useModal';
import ProductForm from './ProductForm';
import PageSpinner from '../../components/Spinners/PageSpinner';

const ProductTable = (props) => {

     const {
        retrieveProducts, 
        productsList, 
         deleteProduct, 
        isloading
    } = props; 


    const [isOpen, setIsOpen] = useModal('CONFIRM_MODAL', {
        title: 'Delete Product', 
        contant: 'Are you want to delete this Product?', 
    });
    const [isOpenForm, setIsOpenForm] = useModal('FORM_MODAL', {
        title: 'Update Product', 
        component : ProductForm
    });
   
        useEffect(() => {
        retrieveProducts();
    }, []); 

    return (
        
        !isloading ? 
            <>
                
        <Table striped className='text-center'>
            <thead>
                <tr>
                    <th>
                        Product Name
                    </th>
                    <th>
                        Product Description
                    </th>
                    <th>
                        Product category
                    </th>
                    <th>
                        Product price 
                    </th>
                    <th colSpan={2} className='text-center'>
                        Actions 
                    </th>
                </tr>
            </thead>
            <tbody>
                {productsList.map(product => (
                          <tr key={product.id}>
                    <td>
                        {product.productName}
                    </td>
                    <td>
                        {product.productDesc}
                    </td>
                    <td>
                         {product.productCategory}
                    </td>
                    <td>
                           {product.productPrice}
                    </td>
                    <td >
                            <Button color='warning' onClick={() => setIsOpenForm(true, {
                                selectedProduct: {
                                    id: product.id, 
                                    productName: product.productName, 
                                    productDesc: product.productDesc, 
                                    productCategory: product.productCategory, 
                                    productPrice : product.productPrice
                                }, 
                                isUpdate: true, 
                                
                          })}> Update </Button>
                    </td>
                    <td>
                            <Button color='danger' onClick={() => setIsOpen(true, { action :  () => deleteProduct(product.id)})}> Delete </Button>
                    </td>
                </tr>

                ))}
            </tbody>
                </Table>
        </>        : <PageSpinner />
    );
}; 
const mapStateToProps = state => {

    return {
        isloading: state.product.isloading, 
        productsList : state.product.productList
    };
}; 

const mapDispatchToProps = dispatch => {
    return { 
        retrieveProducts: () => dispatch(retrieveProducts()), 
        deleteProduct : (productId) => dispatch(deleteProduct(productId)) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable) ; ;
