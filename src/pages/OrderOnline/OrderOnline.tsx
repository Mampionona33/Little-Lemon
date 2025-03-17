const OrderOnline = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Order Online
      </h1>

      {/* Section de formulaire de commande */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Delivery Information
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Delivery Address</label>
            <input
              type="text"
              placeholder="123 Main St, City, Country"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+123 456 7890"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Delivery Instructions
            </label>
            <textarea
              placeholder="e.g., Leave at the front door"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="font-semibold w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary hover:text-primary transition"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Section des options de livraison */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Delivery Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Standard Delivery
            </h3>
            <p className="text-gray-600 mb-4">
              Delivered within 45 minutes. Free for orders above $20.
            </p>
            <p className="text-green-600 font-semibold">$5.00</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Express Delivery
            </h3>
            <p className="text-gray-600 mb-4">
              Delivered within 20 minutes. Fast and reliable.
            </p>
            <p className="text-green-600 font-semibold">$10.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
