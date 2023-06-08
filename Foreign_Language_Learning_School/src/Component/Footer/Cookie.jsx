

const Cookie = () => {
    return (
        <div>
           <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Cookie Policy</h2>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">What are Cookies?</h3>
        <p className="text-gray-700">
          Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, enhance user experience, and provide information to website owners.
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Types of Cookies We Use</h3>
        <ol className="list-decimal list-inside text-gray-700">
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for the functioning of our website and cannot be disabled in our systems. They are usually set in response to actions made by you, such as setting your privacy preferences, logging in, or filling out forms. You can set your browser to block these cookies, but some parts of the website may not function properly.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> We use analytics cookies to collect information about how visitors use our website, such as which pages they visit and the duration of their visit. This data helps us improve the performance and relevance of our website. These cookies are collected anonymously and do not personally identify you. You can opt out of these cookies by adjusting your browser settings or using the opt-out mechanisms provided by our analytics service provider.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> We may use advertising cookies to deliver personalized advertisements that are relevant to your interests. These cookies collect information about your browsing habits and are typically placed by third-party advertising networks. They remember websites you have visited and share this information with other organizations, such as advertisers. You can manage your advertising cookie preferences through your browser settings or by visiting the relevant third-party websites.
          </li>
        </ol>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">Third-Party Cookies</h3>
        <p className="text-gray-700">
          Our website may contain cookies from third-party services.
        </p>
      </div>
    </div>
        </div>
    );
};

export default Cookie;