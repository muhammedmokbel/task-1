import React , {useEffect} from 'react';
import { connect} from 'react-redux'; 

import { Container, FormGroup, Input, Label, Button , FormFeedback } from 'reactstrap';
import { withFormik } from 'formik';
import Schema from '../../validationSchemas/ProductFormSchema'; 
import { addProduct, updateProduct } from '../../redux/product/slice';
import { closeModal } from '../../redux/modals/slice';
import ButtonSpinner from '../../components/Spinners/ButtonSpinner';

const ProductForm = (props) => {
    const {
        //formik 
        values, 
        touched, 
        errors , 
        handleChange, 
        handleSubmit, 

        // redux props
        isloading, 
      

        //update props 
        selectedProduct, 
        isUpdate 
    } = props; 


    return (
        <>
            <Container>
                <form onSubmit={handleSubmit} className={isUpdate ? 'my-4' : 'my-4 formStyle'} >
                    {isUpdate ? null : 
                     <div className='title text-center'>
                        <h1 className='text-primary'> Product Form </h1>
                        <p className='text-muted'> Please fill all information below  </p>
                    </div>}
                   
                       <FormGroup floating >
                        <Input
                            id="productName"
                            name="productName"
                            placeholder="productName"
                            type='text'
                            onChange={handleChange}
                            invalid={errors.productName && touched.productName? true : false}
                            value={values.productName}
                        />
                        <FormFeedback >
                            {errors.productName}
                        </FormFeedback>
                        <Label for="productName">
                            Product Name 
                        </Label>
                    </FormGroup>
                         <FormGroup floating>
                        <Input
                            id="productDesc"
                            name="productDesc"
                            placeholder="productDesc"
                            type='text'
                            onChange={handleChange}
                            invalid={errors.productDesc && touched.productDesc? true : false}
                            value={values.productDesc}
                        />
                         <FormFeedback >
                            {errors.productDesc}
                        </FormFeedback>
                        <Label for="productDesc">
                            Product Description 
                        </Label>
                    </FormGroup>
                    
                       <FormGroup floating>
                        <Input
                            id="productCategory"
                            name="productCategory"
                            placeholder="productCategory"
                            type='text'
                            onChange={handleChange}
                            invalid={errors.productCategory && touched.productCategory ? true : false }
                            value={values.productCategory}
                        />
                           <FormFeedback >
                            {errors.productCategory}
                        </FormFeedback>
                        <Label for="productCategory">
                            Product category 
                        </Label>
                    </FormGroup>
                          <FormGroup floating>
                        <Input
                            id="productPrice"
                            name="productPrice"
                            placeholder="productPrice"
                            type='number'
                            onChange={handleChange}
                            invalid={errors.productPrice && touched.productPrice? true : false }
                            value={values.productPrice}
                        />
                         <FormFeedback >
                            {errors.productPrice}
                        </FormFeedback>
                        <Label for="productPrice">
                            Product Price 
                        </Label>
                    </FormGroup>
                    
                    <div className='text-center'>
                      <Button
                        color="primary"
                        className='w-25'
                            type='submit'
                            disabled={isloading}
                    >
                            { isloading ? <ButtonSpinner />  : 'Submit'}
                        </Button>
                        </div>
                    
                </form>
            </Container>
        </>
    );
};
const EnhancedComponent = withFormik({
    mapPropsToValues: (props) => {

        return ({
            productName: props?.selectedProduct?.productName || '',
            productDesc: props?.selectedProduct?.productDesc || '',
            productCategory: props?.selectedProduct?.productCategory || '',
            productPrice: props?.selectedProduct?.productPrice || ''
        }); 
    }, 
    enableReinitialize : true , 
    validationSchema : Schema, 
    handleSubmit: (vals, { props, resetForm }) => {
        if (props.isUpdate)
        {
            const newVals = {
                ...vals,
                id: props.selectedProduct.id
            }; 
            props.updateProduct(newVals); 
            props.closeModal(); 
            }
           
        else 
        props?.addProduct(vals ); 
        resetForm(); 
    
        
    }
})(ProductForm);

const mapStateToProps = state => {

    return {
        isloading: state.product.isloading
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
        addProduct: data => dispatch(addProduct(data)), 
        updateProduct: (data) => dispatch(updateProduct(data)) ,
        closeModal: () => dispatch(closeModal()) 
    };
};
 

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedComponent) ; 
