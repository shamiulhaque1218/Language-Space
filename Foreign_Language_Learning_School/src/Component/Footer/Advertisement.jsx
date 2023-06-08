const Advertisement = () => {
  return (
    <div>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Advertisement Opportunities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-bold mb-4">Banner Ads</h3>
            <p className="text-gray-700 mb-2">
              Promote your brand with banner ads on our website.
            </p>
            <p className="text-gray-700 mb-2">Banner Size: 728x90 pixels</p>
            <p className="text-gray-700 mb-2">Placement: Top of the page</p>
            <p className="text-gray-700">
              Contact us for pricing and availability.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-bold mb-4">Sponsored Content</h3>
            <p className="text-gray-700 mb-2">
              Feature your content with sponsored articles and blog posts.
            </p>
            <p className="text-gray-700 mb-2">
              Reach our audience with your brands message.
            </p>
            <p className="text-gray-700 mb-2">
              Contact us for pricing and details.
            </p>
            <p className="text-gray-700">
              We offer various sponsorship packages tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
