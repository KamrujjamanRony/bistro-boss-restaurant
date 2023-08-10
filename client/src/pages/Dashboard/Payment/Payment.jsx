import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../../../components/Home/SectionHeader";
import useCart from "../../../hooks/useCart";
import CheckoutForm from "./CheckoutForm";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="max-w-5xl items-center pl-12">
            <SectionHeader subHeader="please process" header="Payment"></SectionHeader>
            <h2 className="text-3xl"> Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;