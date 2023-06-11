/* eslint-disable react/prop-types */

const PaymentHistory2 = ({data,index}) => {
   
    return (
        <tbody  className=" p-1">
             <tr className="border-2">
               <td className="p-3 text-center"> {index + 1} </td>
               <td className="p-3 text-center"> {data.MyClasses} </td>
               <td className="p-3 text-center">{data.quantity} </td>
               <td className="p-3 text-center">{data.classPrice} </td>
               <td className="p-3 text-center">{data.date} </td>
               <td className="p-3 text-center">{data.orderStatus} </td>
               
             </tr>
           </tbody>
    );
};

export default PaymentHistory2;