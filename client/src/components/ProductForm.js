import React, { useState } from 'react';
import axios from 'axios';
//REUSING COMPONENTS practicing:
export default props => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);


    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});

    }

    return(
        <form onSubmit = {onSubmitHandler}>
            <p>
                <label>Title:</label>
                <input type = "text" 
                name = "title"
                value = {title}
                onChange={e=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price($):</label>
                <input type = "number" 
                name = "price"
                value = {price}
                onChange={e=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description:</label>
                <input type = "text"
                name = "description"
                value = {description}
                onChange={e=>setDescription(e.target.value)}/>
            </p>

            <input type="submit"/>
        </form>
    )
}


//ASSIGNMENT PRODUCT MANAGER 1,2,3:

// export default props => {
//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState("");
//     const [description, setDescription] = useState("");


//     const onSubmitHandler = e =>{
//         e.preventDefault();
//         axios.post('http://localhost:8000/api/new',{
//             title,
//             price,
//             description
//         })
//             .then(res=>console.log("Response", res))
//             .catch(err=>console.log("Error: ", err))

//     }

//     return(
//         <form onSubmit = {onSubmitHandler}>
//             <p>
//                 <label>Title:</label>
//                 <input type = "text" onChange={e=>setTitle(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Price($):</label>
//                 <input type = "number" onChange={e=>setPrice(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Description:</label>
//                 <input type = "text" onChange={e=>setDescription(e.target.value)}/>
//             </p>

//             <input type="submit"/>
//         </form>
//     )
// }