const Booking = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <form
        method="post"
        className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 space-y-6"
      >
        {/* Section Booking */}
        <fieldset className="border border-gray-300 rounded-lg p-4 bg-gray-100">
          <legend className="text-lg font-semibold text-gray-800 px-2">
            Booking
          </legend>

          <div className="space-y-3">
            <div className="flex flex-col">
              <label htmlFor="date" className="font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="time" className="font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="guests_number"
                className="font-medium text-gray-700"
              >
                Guests Number
              </label>
              <input
                type="number"
                name="guests_number"
                id="guests_number"
                min="1"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="instruction"
                className="font-medium text-gray-700"
              >
                Special Requests
              </label>
              <textarea
                name="instruction"
                id="instruction"
                rows={3}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Extra information..."
              />
            </div>
          </div>
        </fieldset>

        {/* Section Contact */}
        <fieldset className="border border-gray-300 rounded-lg p-4 bg-gray-100">
          <legend className="text-lg font-semibold text-gray-800 px-2">
            Contact
          </legend>

          <div className="space-y-3">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="example@email.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="1234567890"
              />
            </div>
          </div>
        </fieldset>

        {/* Bouton de soumission */}
        <div className="flex justify-center">
          <button
            className="bg-primary text-white py-2 px-6 rounded-lg font-semibold 
              hover:bg-secondary hover:text-primary transition duration-300 shadow-md 
              focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
