const Address = () => {
  return (
    <div>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Our Address</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Headquarters</h3>
            <p className="text-gray-700 mb-2">road 10, Uttara 11 </p>
            <p className="text-gray-700 mb-2">Dhaka, 1230</p>
            <p className="text-gray-700 mb-2">Bangladesh</p>
            <p className="text-gray-700">Phone: 123-456-7890</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Branch Office</h3>
            <p className="text-gray-700 mb-2">road 2, Nikunja</p>
            <p className="text-gray-700 mb-2">Dhaka, 1229</p>
            <p className="text-gray-700 mb-2">Bangladesh</p>
            <p className="text-gray-700">Phone: 987-654-3210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
