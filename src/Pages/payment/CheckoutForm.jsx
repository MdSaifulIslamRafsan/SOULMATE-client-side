import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const element = useElements();
  const axiosSecure = useAxiosSecure();
  const price = 5;
  const { biodataId } = useParams();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  const handlePaySubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.message,
      });
    }

    const { error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );
    if (confirmError) {
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: confirmError?.message,
      });
    } else {

          const contactInfo = { biodata_id: parseInt(biodataId),
            status: "Pending" ,  email: user?.email };
            axiosSecure.post('/contactRequest' , contactInfo)
            .then((res)=>{
              if(res.data.insertedId){
               Swal.fire({
                   title: "Good job!",
                   text: "You've successfully payment. Wait for admin approval",
                   icon: "success",
                 });
              }
            }).catch((error)=>{
                if (error.response && error.response.status === 409) {
                    Swal.fire({
                      title: 'Duplicate Entry',
                      text: error.response.data.message,
                      icon: 'warning'
                    });
                  } else {
                    Swal.fire({
                      title: 'Error!',
                      text: error.message,
                      icon: 'error'
                    });
                  }
            })
        
     
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
      <AwesomeButton
        disabled={!stripe || !clientSecret}
        className="w-28"
        type="primary"
      >
        Pay
      </AwesomeButton>
    </form>
  );
};

export default CheckoutForm;
