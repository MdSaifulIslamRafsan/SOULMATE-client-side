import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const CheckoutForm = () => {
    const stripe = useStripe();
    const {user} = useAuth();
    const [clientSecret , setClientSecret] = useState('');
    const element = useElements();
    const axiosSecure = useAxiosSecure();
    const price = 5;

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price})
        .then((res)=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[axiosSecure , price])
    
  const handlePaySubmit = async (e) => {
    e.preventDefault();
    if(!stripe || !element){
        return
    }

    const card = element.getElement(CardElement);
    if(card === null){
        return
    }

    const {error} = await stripe.createPaymentMethod({
        type: 'card',
        card,
    });
    if (error) {
       return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error?.message,
          });
      } 

      const {error:confirmError, paymentMethod} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card: card,
            billing_details:{
               email: user?.email || 'anonymous',
               name: user?.displayName || 'anonymous'
            } 

        }
      })
      if (confirmError) {
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: confirmError?.message,
          });
      } else {
        Swal.fire({
            title: "Good job!",
          text: "You've successfully Payment",
          icon: "success",
          });
       
      }
  };


  return (
    <form className="mt-5 space-y-5" onSubmit={handlePaySubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <AwesomeButton disabled={!stripe || !clientSecret} className="w-28" type="primary">
         Pay
    </AwesomeButton>
      
    </form>
  );
};

export default CheckoutForm;
