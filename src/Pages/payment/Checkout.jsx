
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Checkout = () => {
    const {user} = useAuth();
    const {biodataId} = useParams();
    
      
    return (
        <div className="max-w-md  w-full mx-auto  my-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-medium mb-6">Payment Information</h2>
            <p className="font-bold">Boidata Id: {biodataId} </p>
            <p>Email: {user?.email}</p>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
        </div>
    </div>
    );
};

export default Checkout;