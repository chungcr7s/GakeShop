import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = () => {
    // Validate the form fields before proceeding with payment
    if (!formData.name || !formData.phoneNumber || !formData.address) {
      toast.error("Please fill out all the required fields.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    // Simulate a payment process (you can replace this with your actual payment logic)
    // For demonstration purposes, just show a success message
    toast.success("Payment successful! Thank you for your purchase.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment Gateway" />

      <div className="pb-10">
        <p className="text-lg mb-4">
          Please provide your information to proceed with the payment.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <button
            className="w-full py-2 bg-primeColor text-white rounded-md hover:bg-black duration-300"
            type="button"
            onClick={handlePayment}
          >
            Pay Now
          </button>
        </form>

        <div className="mt-8">
          <Link to="/">
            <button className="w-full py-2 bg-primeColor text-white rounded-md hover:bg-black duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </div>
  );
};

export default Payment;
