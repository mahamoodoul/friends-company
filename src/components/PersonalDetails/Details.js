import React from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,  faPlus } from '@fortawesome/free-solid-svg-icons'


const Details = (props) => {
    const {name,email,image,salary,company}=props.userDetails;
   
    return (
        <div className="employee">
        <div>
           <img src={image} alt="robert"/>
           
        </div>
        <div>
            <h1 className="employee-name">{name}</h1>
          
            <p>Email : {email}</p>  
            
            <p>Company : {company.name}</p>  

            <p>Salary: {salary}$</p>
            <button className="main-btn" onClick={() =>props.handleAddProduct(props.userDetails)} > <FontAwesomeIcon icon={ faPlus} /> Add now</button>
        </div>

    </div>
    );
};

export default Details;
