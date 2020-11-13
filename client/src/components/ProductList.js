import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
//REUSING COMPONENTS practicing:
import DeleteButton from './DeleteButton';

export default props => {
        
    const[product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/new')
            .then(response => {
                setProduct(response.data); 
            })
    }, []);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }

    return(
        <div>
            {props.product.map((product, index) => {
                return <p key={index}>
                    <Link  to ={"/product/" + product._id}>{product.title}, {product.price}</Link>
                    <br/>
                    <Link to={"/" + product._id + "/edit"}>Edit</Link>
                    <br/>
                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)}/>
                    
                    </p>
            })}
        </div>
    )
}


//Assignment Product Manager 1,2,3,
// export default props => {
//     const {removeFromDom} = props;
//     const deleteProduct = (productId) => {
//         axios.delete('http://localhost:8000/api/product/' + productId)
//             .then(res => {
//                 removeFromDom(productId)
//             })
//     }
//     return(
//         <div>
//             {props.product.map((product, index) => {
//                 return <p key={index}>
//                     <Link  to ={"/product/" + product._id}>{product.title}, {product.price}</Link>
//                     <br/>
//                     <button onClick={(e) => (deleteProduct(product._id))}>
//                         Delete
//                     </button>
                    
//                     </p>
//             })}
//         </div>
//     )
// }