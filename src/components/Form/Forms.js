
import React from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Formp({ closeForm, productName }) {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Logic to save the data, for example, sending it to an API
    console.log("Form data:", data);
    // Close the form after submission
    closeForm(false);
    alert("Order placed successfully!");
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
            <label htmlFor="cusName">Customer Name</label>
            <input 
              type="text" 
              id="cusName" 
              {...register("cusName", { required: "Customer name is required" })} 
            />
            {errors.cusName && <p className="error">{errors.cusName.message}</p>}
            <br />

            <label htmlFor="cusPhoneNum">Phone Number</label>
            <input 
              type="text" 
              id="cusPhoneNum" 
              {...register("cusPhoneNum", { 
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits"
                }
              })} 
            />
            {errors.cusPhoneNum && <p className="error">{errors.cusPhoneNum.message}</p>}
            <br />

            <label htmlFor="email">Email Id</label>
            <input 
              type="email" 
              id="email" 
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address"
                }
              })} 
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <br />

            <label htmlFor="product">Product Requested:</label>
            <input 
              type="text" 
              id="product" 
              value={productName} 
              {...register("product")} 
              readOnly 
            />
            <br />

            <label htmlFor="quantity">Quantity</label>
            <input 
              type="number" 
              id="quantity" 
              {...register("quantity", { 
                required: "Quantity is required", 
                min: { value: 1, message: "Minimum quantity is 1" },
                max: { value: 10, message: "Maximum quantity is 10" }
              })} 
            />
            {errors.quantity && <p className="error">{errors.quantity.message}</p>}
            <br />

            <label htmlFor="date">Preferred Delivery Date</label>
            <input 
              type="date" 
              id="date" 
              {...register("date", { required: "Preferred delivery date is required" })} 
            />
            {errors.date && <p className="error">{errors.date.message}</p>}
            <br />

            <div className="footer">
              <button type="button" onClick={() => closeForm(false)} id="cancelBtn">
                Cancel
              </button>
              <button type="submit">Place Order</button>
            </div>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
}

export default Formp;

