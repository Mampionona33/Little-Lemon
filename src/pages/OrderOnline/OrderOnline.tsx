import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";

// Définir le schéma de validation avec Zod
const orderSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  deliveryInstructions: z.string().optional(),
});

// Inférer le type du formulaire à partir du schéma Zod
type OrderFormInputs = z.infer<typeof orderSchema>;

const OrderOnline = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrderFormInputs>({
    resolver: zodResolver(orderSchema), // Intégrer Zod avec React Hook Form
  });

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit: SubmitHandler<OrderFormInputs> = (data) => {
    console.log("Form data:", data);
    toast.success("Order placed successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset();
  };

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Champ Full Name */}
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("fullName")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
            />
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-600">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Champ Delivery Address */}
          <div>
            <label className="block text-gray-700 mb-2">Delivery Address</label>
            <input
              type="text"
              placeholder="123 Main St, City, Country"
              {...register("deliveryAddress")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
            />
            {errors.deliveryAddress && (
              <p className="mt-2 text-sm text-red-600">
                {errors.deliveryAddress.message}
              </p>
            )}
          </div>

          {/* Champ Phone Number */}
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+123 456 7890"
              {...register("phoneNumber")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
            />
            {errors.phoneNumber && (
              <p className="mt-2 text-sm text-red-600">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Champ Delivery Instructions */}
          <div>
            <label className="block text-gray-700 mb-2">
              Delivery Instructions
            </label>
            <textarea
              placeholder="e.g., Leave at the front door"
              {...register("deliveryInstructions")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
              rows={3}
            />
            {errors.deliveryInstructions && (
              <p className="mt-2 text-sm text-red-600">
                {errors.deliveryInstructions.message}
              </p>
            )}
          </div>

          {/* Bouton de soumission */}
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
