import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import SharedHeadings from "../SharedComponents/SharedHeadings";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
    const location=useLocation();
    const paymentData=location.state && location.state.data;
    console.log(paymentData)
    const rent=paymentData.rent;
    console.log(rent)
    // To do: add publishable key
    const stripePromise=loadStripe(import.meta.env.VITE_payment_gateway) ;
    return (
        <div className="py-40">
            <SharedHeadings heading={'Proceed Payment'} subheading={'Apply Coupon'}></SharedHeadings>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm rent={rent}></CheckoutForm>
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;