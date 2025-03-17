import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Définir le schéma de validation avec Zod
const formSchema = z.object({
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  guests_number: z.number().min(1, "Number of guests must be at least 1"),
  instruction: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
});

type FormData = z.infer<typeof formSchema>;

const Booking = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
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
                id="date"
                {...register("date")}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-900 focus:outline-none"
              />
              {errors.date && (
                <span className="text-red-500 text-sm">
                  {errors.date.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="time" className="font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                id="time"
                {...register("time")}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-900 focus:outline-none"
              />
              {errors.time && (
                <span className="text-red-500 text-sm">
                  {errors.time.message}
                </span>
              )}
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
                id="guests_number"
                {...register("guests_number", { valueAsNumber: true })}
                min="1"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-900 focus:outline-none"
                placeholder="1"
              />
              {errors.guests_number && (
                <span className="text-red-500 text-sm">
                  {errors.guests_number.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="instruction"
                className="font-medium text-gray-700"
              >
                Special Requests
              </label>
              <textarea
                id="instruction"
                {...register("instruction")}
                rows={3}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-900 focus:outline-none"
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
                id="name"
                {...register("name")}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-900 focus:outline-none"
                placeholder="John Doe"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-900 focus:outline-none"
                placeholder="example@email.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-900 focus:outline-none"
                placeholder="1234567890"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
        </fieldset>

        {/* Bouton de soumission */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded-lg font-semibold 
              hover:bg-secondary hover:text-primary transition duration-300 shadow-md 
              focus:ring-2 focus:ring-green-900 focus:outline-none"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
