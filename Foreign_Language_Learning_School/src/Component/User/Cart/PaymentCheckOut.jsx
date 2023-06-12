/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";



const PaymentCheckOut = ({classPrice,tqData}) => {
    const stripe = useStripe();
    const elements = useElements();
    const{user} = useContext(AuthContext);
    const [ConError,setError] =useState('');
    const [clientSecret,setClientSecret] =useState('');
    const [transitionId,setTransitionId] =useState('');
    const [processing,setProcessing] =useState(false);
    const [axiosSecure] = useAxiosSecure();

 useEffect(()=> {
  console.log(classPrice);
  if(classPrice > 0) {
    axiosSecure.post(`/create-payment-intent`, {classPrice})
  .then(data=> {
    console.log(data.data.clientSecret);
    setClientSecret(data.data.clientSecret);
  })
  }
 },[classPrice, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            
            return;
          }

          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }

         console.log('card',card)

         const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log('[error]', error);
          setError(error.message);
        } else {
          setError('')
         // console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true);
        const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || 'unknown',
                name: user?.displayName || 'anonymous',
              },
            },
          },
        );
        if(confirmError) {
          console.log(confirmError)
        }

        console.log('paymentIntent', paymentIntent);
        setProcessing(false);
        if(paymentIntent.status === 'succeeded') {
          setTransitionId(paymentIntent.id);
          const payment = {email:user?.email, transitionId:paymentIntent.id,
             classPrice,
              quantity: tqData.length, MyClasses: tqData.nameOfClass,
               CartId: tqData._id,
                MyClassId: tqData.classId ,
                 date: new Date(),
                  orderStatus: 'service pending'
           
          }
          axiosSecure.post(`/payments`, payment)
          .then(res=> {
            console.log(res.data);
            if(res.data.insertResult.insertedId) {
              Swal.fire({
                title: 'Payment Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
             
            }
          })
        }
    
    }
    
    return (
       <>
        <form className="w-2/6 m-8 ml-20" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="px-5 py-2 m-5 text-white bg-blue-700 rounded-2xl text-xl gFont3" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {
      ConError && <p className="text-red-600 text-lg my-4 mx-5">{ConError}</p>
    }
    {
      transitionId && <p className="text-green-600 text-lg my-4 mx-5">Wow Transition Complete   Transition Id: {transitionId}</p>
    }
    </>
    );
};

export default PaymentCheckOut;