import React, { useState } from 'react';
import './Employee.css';
import dataSet from './data';
import Details from '../PersonalDetails/Details';
import Cart from '../Cart/Cart';

const Employee = () => {

    
     const [users, setUsers] = useState(dataSet);

     const [cart, setCart]=useState([]);

     const handleAddProduct= (user) =>{
         const newCart = [...cart,user];
         setCart(newCart);
     }
    
   
    return (
        <div className="employee-container">
            <div className="user-container">

                {
                    users.map(user =>  <Details userDetails={user} handleAddProduct={handleAddProduct} ></Details>)
                
                    
                }

            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Employee;
  