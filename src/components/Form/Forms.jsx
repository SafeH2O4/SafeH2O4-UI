
import React from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from 'axios';


function Formp({ closeForm, productName }) {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    // Logic to save the data, for example, sending it to an API
    try {
      const tokenResponse = await axios.post('https://5o1pyuw4e6.execute-api.us-east-1.amazonaws.com/api/auth/gettoken', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      });
      data['token'] = tokenResponse.data.token;
      const sendMail = await axios.post('https://5o1pyuw4e6.execute-api.us-east-1.amazonaws.com/api/mail/send', data, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      });
      if (sendMail.status === 200) alert("Order placed !!");
    } catch (error) {
      console.error('Error:', error);
    }
    console.log("Form data:", data);
    // Close the form after submission
    closeForm(false);
  };

  return (
    <div className="formbackground">
      <div className="formContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeForm(false)}>X</button>
        </div>

        <div className="title">
          <h2>Let's Place Order</h2>
        </div>

        <div className="body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input-group__label" htmlFor="custName">Customer Name</label>
            <input 
             className="input-group__input"
              type="text" 
              id="custName" 
              {...register("custName", { required: "Customer name is required" })} 
            />
            <span className="input-group__error"> {errors.custName && <p className="error">{errors.custName.message}</p>}</span>


            <label className="input-group__label" htmlFor="custMobile">Phone Number</label>
            <input 
              className="input-group__input"
              type="text" 
              id="custMobile" 
              {...register("custMobile", { 
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits"
                }
              })} 
            />
            <span className="input-group__error"> {errors.custMobile && <p className="error">{errors.custMobile.message}</p>}</span>
        

            <label className="input-group__label" htmlFor="custEmail">Email Id</label>
            <input 
              className="input-group__input"
              type="email" 
              id="custEmail" 
              placeholder="SAFEH2O4@gmail.com"
              {...register("custEmail", { 
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address"
                }
              })} 
            />
            <span className="input-group__error"> {errors.custEmail && <p className="error">{errors.custEmail.message}</p>}</span>
      

            <label className="input-group__label" htmlFor="model">Product Requested:</label>
            <input 
              className="input-group__input"
              type="text" 
              id="model" 
              value={productName} 
              {...register("model")} 
              readOnly 
            />
            

            <label className="input-group__label" htmlFor="quantity">Quantity</label>
            <input 
              className="input-group__input"
              type="number" 
              id="quantity" 
              {...register("quantity", { 
                required: "Quantity is required", 
                min: { value: 1, message: "Minimum quantity is 1" },
                max: { value: 10, message: "Maximum quantity is 10" }
              })} 
            />
            <span className="input-group__error"> {errors.quantity && <p className="error">{errors.quantity.message}</p>}</span>
            

            <label className="input-group__label" htmlFor="deliveryDate">Preferred Delivery Date</label>
            <input
              className="input-group__input" 
              type="date" 
              id="deliveryDate" 
              {...register("deliveryDate", { required: "Preferred delivery date is required" })} 
            />
            <span className="input-group__error"> {errors.deliveryDate && <p className="error">{errors.deliveryDate.message}</p>}</span>
          
            <label className="input-group__label" htmlFor="custMessage">Message</label>
            <input
              className="input-group__input"
              type="text"
              id="custMessage"
              placeholder="Please type your query here.."
              {...register("custMessage")} 
            />

            <div className="footer">
              <button type="button" onClick={() => closeForm(false)} id="cancelBtn">
                Cancel
              </button>
              <button type="submit" >Place Order</button>
            </div>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
}

export default Formp;

