/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";


const AddClass = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = data =>  { console.log(data) }

    return (
        <div>
            <div>
      <form  onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2">
        <div className="mb-4 mx-10">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4  mx-10">
          <label
            htmlFor="pictureURL"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Picture URL:
          </label>
          <input
            type="text"
            name="pictureURL"
            {...register("pictureURL", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 mx-10">
          <label
            htmlFor="sellerName"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Seller Name:
          </label>
          <input
            type="text"
            name="sellerName"
            {...register("sellerName", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 mx-10">
          <label
            htmlFor="sellerEmail"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Seller Email:
          </label>
          <input
            type="email"
            name="sellerEmail"
            {...register("sellerEmail", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 mx-10">
          <label
            htmlFor="subCategory"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Sub-category:
          </label>
          <input
            type="text"
            name="subCategory"
            {...register("subcategory", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 mx-10">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Price:
          </label>
          <input
            type="text"
            name="price"
            {...register("price", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 mx-10">
          <label
            htmlFor="rating"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Rating:
          </label>
          <input
            type="text"
            name="rating"
            {...register("rating", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 mx-10 ">
          <label
            htmlFor="quantity"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Available Quantity:
          </label>
          <input
            type="text"
            name="quantity"
            {...register("quantity", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mx-10 my-8 px-4 py-2 text-center font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>   
        </div>
    );
};

export default AddClass;