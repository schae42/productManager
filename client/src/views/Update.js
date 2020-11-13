import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';
//REUSING COMPONENTS practicing:
import { navigate } from '@reach/router'
import DeleteButton from '../components/DeleteButton';

export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/' + id + '/edit')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id])

    const updateProduct = product => {
        axios.put('http://localhost:8000/' + id + '/edit', product)
            .then(res => console.log(res));
    }


    return(
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                    <ProductForm 
                        onSubmitProp = {updateProduct} 
                        initialTitle = {product.title}
                        initialPrice = {product.price}
                        initialDescription = {product.description}
                        />
                    <br/>
                    <DeleteButton productId={product._id} successCallback={() => navigate("/product")}/>
                </>
                
            )}

            
        </div>
    )
}

//ASSIGNMENT PRODUCT MANAGER 1,2,3:
// export default props => {
//     const { id } = props;
//     const [title, setTitle] = useState();
//     const [price, setPrice] = useState();
//     const [description, setDescription] = useState();

//     useEffect(() => {
//         axios.get('http://localhost:8000/' + id + '/edit')
//             .then(res => {
//                 setTitle(res.data.title);
//                 setPrice(res.data.price);
//                 setDescription(res.data.description)
//             })
//     }, [id])

//     const updateProduct = e => {
//         e.preventDefault();
//         axios.put('http://localhost:8000/' + id + '/edit', {
//             title,
//             price,
//             description
//         })
//             .then(res => console.log(res));
//     }


//     return(
//         <div>
//             <h5>See result:</h5>
//             <p>Product Title: {title}</p>
//             <p>Product Price: {price}</p>
//             <p>Product Description: {description}</p>

//             <h1>Update a Product</h1>

//             <form onSubmit={updateProduct}>
//                 <p>
//                     <label>Title:</label><br/>
//                     <input type="text"
//                     name="title"
//                     value={title}
//                     onChange={(e) => {setTitle(e.target.value)}}/>
//                 </p>
//                 <p>
//                     <label>Price:</label>
//                     <input type="number"
//                     name="price"
//                     value={price}
//                     onChange={(e) => {setPrice(e.target.value)}}/>
//                 </p>

//                 <p>
//                     <label>Description:</label>
//                     <input type="text"
//                     name="description"
//                     value={description}
//                     onChange={(e) => {setDescription(e.target.value)}}/>
//                 </p>
//                 <input type="submit"/>

//             </form>
//         </div>
//     )
// }