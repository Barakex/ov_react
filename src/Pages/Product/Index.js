import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Header, Segment, Grid } from 'semantic-ui-react';
import ProductList from './Components/ProductList';
import Loading from "../../Components/Loading";
import API_BASE_URL from '../../Config'


function Products(props) {
    // const [ShoppingCartItems, setCart] = useState(null)
    // const [open] = useState(false)
    const [loading, setLoading] = useState(true)
    const [Products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/products/`)
            .then(result => {
                setProducts(result.data.data);
                setLoading(false);
                // setCart(JSON.parse(localStorage.getItem('shopping-cart') || '[]'));
            })
    }, [])

    if (loading === false) {
        return (
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Header as='h3' style={{ fontSize: '2em' }}>Products</Header>
                            <ProductList products={Products} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    } else {
        return (
            <Loading />
        );
    }
}

export default Products;
