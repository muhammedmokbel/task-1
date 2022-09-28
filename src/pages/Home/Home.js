import React from 'react';
import { Container } from 'reactstrap';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const Home = () => {
    return (
        <>
            
            <ProductForm />
            <Container>
                <ProductTable />
            </Container>
        
        </>
    );
};

export default Home;
