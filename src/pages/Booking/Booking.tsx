const Booking = () => {
  return (
    <div className="w-full justify-center items-center flex min-h-[50vh] p-14">
      <form
        action=""
        method="post"
        className="w-full flex flex-col max-w-md shadow-md p-4 gap-4 border bg-gray-100 rounded-lg"
      >
        <fieldset className="flex flex-col border border-gray-200 rounded-md p-2 bg-gray-50">
          <legend className="font-semibold text-gray-800">Booking</legend>
          <div className="flex flex-col ">
            <label htmlFor="date" className="font-semibold text-gray-800">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="border border-gray-200 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="time" className="font-semibold text-gray-800">
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="border border-gray-200 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="guests_number"
              className="font-semibold text-gray-800"
            >
              Guests number
            </label>
            <input
              type="number"
              name="guests_number"
              id="guests_number"
              min="1"
              className="border border-gray-200 rounded-md p-2"
              placeholder="1"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="instruction"
              className="font-semibold text-gray-800"
            >
              Instructions
            </label>
            <textarea
              name="instruction"
              id="instruction"
              rows={3}
              className="border border-gray-200 rounded-md p-2"
              placeholder="Extra information"
            />
          </div>
        </fieldset>

        <fieldset className="flex flex-col border border-gray-200 rounded-md p-2 bg-gray-50">
          <legend className="font-semibold text-gray-800">Contact</legend>

          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-200 rounded-md p-2"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-200 rounded-md p-2"
              placeholder="exemple@email.com"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="font-semibold text-gray-800">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="border border-gray-200 rounded-md p-2"
              placeholder="1234567890"
            />
          </div>
        </fieldset>

        <div className="flex justify-center w-full">
          <button
            className={`
            bg-secondary text-primary py-2 px-4 
              rounded-md mt-4 cursor-pointer font-semibold 
              hover:border-2 hover:border-secondary 
              hover:bg-transparent hover:bg-primary hover:text-secondary w-1/2
            `}
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
