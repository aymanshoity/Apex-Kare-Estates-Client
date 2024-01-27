import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const CheckoutForm = ({ rent }) => {
    const stripe = useStripe()
    const element = useElements()
    const [error, setError] = useState('')
    const [clientSecret,setClientSecret]=useState('')
    const axiosSecure = UseAxiosSecure()
    console.log(rent)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {rent:rent})
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, rent])
    console.log(clientSecret)
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !element) {
            return
        }
        const card = element.getElement(CardElement)

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('[error]', error)
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod)
            setError('')
        }

    }
    return (
        <div className="border p-10 rounded-lg md:w-[700px] mx-auto bg-[#ECF4D6]">
            <form className="" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#265073',
                                '::placeholder': {
                                    color: '#265073',
                                },
                            },
                            invalid: {
                                color: '#265073',
                            },
                        },
                    }}
                />
                <button disabled={!stripe || !clientSecret} className="my-10 w-full btn bg-[#265073] text-[#ECF4D6]" type="submit" >
                    Pay
                </button>
                <p className="text-red-500">{error}</p>

            </form>
        </div>
    );
};

export default CheckoutForm;