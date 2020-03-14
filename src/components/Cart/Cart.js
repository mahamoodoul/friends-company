import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    const total=cart.reduce((total,productPrice)=>total+parseFloat(productPrice.salary),0);

    //  let total=0;
    //   for(let i=0;i<cart.length;i++){
    //       const product=cart[i];
         
    //      let ab=product.salary;
    //      total=total+parseFloat(ab);
    //   }

    return (
        <div className="em-cart">
            <h4>Employee Summery</h4>
            <p>Total Employee: {cart.length}</p>
          
            <p>Total Salary:{total} $</p>
            <button className="salary-btn">Send Salary</button>
            
        </div>
    );
};

export default Cart;