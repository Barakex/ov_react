import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react'
import ProductItem from './ProductItem';


export default function ProductList(props) {
    return (
        <Grid columns={4}>
            {
                props.products.map((p) =>
                    <Grid.Column key={p._id}>
                        <ProductItem product={p} />
                    </Grid.Column>
                )
            }
        </Grid>
    );
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
}
