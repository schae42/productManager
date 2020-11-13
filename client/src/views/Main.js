import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

//REUSING COMPONENTS practicing:

export default() => {
    
    const[product, setProduct] = useState([]);
    const[loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/new')
            .then(response => {
                setProduct(response.data); 
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    }, []);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }
    const createProduct = e => {
        axios.post('http://localhost:8000/api/new', e )
            .then(res => {setProduct([...product, res.data]) //NO MORE ERROR: Unhandled Rejection (TypeError): product is not iterable (anonymous function)
        })
    }

    return (
        <div>
            <ProductForm onSubmitProp = {createProduct} initialTitle = "" initialPrice = "" initialDescription = ""/>
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}





//ASSIGNMENT PRODUCT MANAGER 1,2,3:
// export default() => {
    
//     const[product, setProduct] = useState([]);
//     const[loaded, setLoaded] = useState(false);

//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/new')
//             .then(response => {
//                 setProduct(response.data); 
//                 setLoaded(true);
//             })
//             .catch(err=>console.log("Error: ", err))
//     }, []);
//     const removeFromDom = productId => {
//         setProduct(product.filter(product => product._id !== productId));
//     }

//     return (
//         <div>
            
//             <ProductForm/>
//             <hr/>
//             {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
            
//             {/* <p>Message from BACK END : {message}</p> */}
//         </div>
//     )
// }