import { loadStripe } from "@stripe/stripe-js";
import PaymentCheckOut from "./PaymentCheckOut";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_payment);
const Payment = () => {
    return (
        <div>
            <h2 className="p-8 text-3xl gFont3">Payment</h2>

            <Elements stripe={stripePromise}>
            <PaymentCheckOut />
            </Elements>
            
        </div>
    );
};

export default Payment;