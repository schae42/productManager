import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
//REUSING COMPONENTS practicing part 2:
import { navigate } from '@reach/router'
import DeleteButton from '../components/DeleteButton';


export default props => {
    // const {removeFromDom} = props;
    // const deleteProduct = (productId) => {
    //     axios.delete('http://localhost:8000/api/product/' + productId)
    //         .then(res => {
    //             removeFromDom(productId) //ERROR: Unhandled Rejection (TypeError): removeFromDom is not a function
    //         })
    // };

    
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [props.id]);

    return (
        <div>
            <p>Product Title: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
            <Link to={"/" + product._id + "/edit"}>Edit</Link>
            <br/>

            <br/>
            <DeleteButton productId={product._id} successCallback={() => navigate("/product")}/>
            
        </div>
    )
}