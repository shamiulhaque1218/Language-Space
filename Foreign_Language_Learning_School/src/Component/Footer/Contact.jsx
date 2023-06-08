const Contact = () => {
  return (
    <div>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-8">
          Have a question or feedback? Reach out to us using the contact
          information provided below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> 016242424242
              <strong>Phone:</strong> 015242424242
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> thelanguagespace@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Send us a Message</h3>
            <p className="text-gray-700 mb-2">
              If you have any questions or inquiries, please feel free to reach
              out to us using the contact information provided above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
