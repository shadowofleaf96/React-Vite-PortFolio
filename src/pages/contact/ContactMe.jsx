import React, { useState, useEffect } from "react";
import { Button, Typography, Alert } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

const URL = import.meta.env.VITE_URL;

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const formData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      message: data.get("message"),
    };

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setAlert({
        severity: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlert({
        severity: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        setAlert({
          severity: "success",
          message: "Email sent successfully!",
        });
      } else {
        setAlert({
          severity: "error",
          message: "Failed to send email. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({
        severity: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [alert]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      direction="column"
      id="contact-me"
      className="space-y-2 items-center justify-center"
      style={{ borderRadius: "5px", marginBottom: "50px" }}
    >
      <div className="w-full p-5" style={{ textAlign: "center" }}>
        <div>
          <h1 className="underline text-center dark:text-white font-medium text-4xl md:text-5xl font-poppins">
            Contact Me
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mt-12"
          >
            <div className="md:w-4/5 lg:w-3/4 xl:w-2/3">
              <div className="flex flex-col md:flex-row">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md text-gray-900 bg-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-second"
                  placeholder="First Name"
                />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md text-gray-900 bg-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-second"
                  placeholder="Last Name"
                />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="my-2 py-2 px-4 rounded-md text-gray-900 bg-gray-300 w-full outline-none focus:ring-2 focus:ring-second"
              />
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                className="my-2 py-2 px-4 rounded-md text-gray-900 bg-gray-300 w-full outline-none focus:ring-2 focus:ring-second"
              ></textarea>
            </div>
            <Button
              type="submit"
              loading={loading}
              ripple={true}
              className="font-poppins mx-2 flex items-center justify-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mt-4 bg-second text-white border-2 border-second hover:bg-green-500 hover:border-green-500 transition duration-300 mb-4 md:mr-2 dark:bg-second dark:hover:bg-green-500 dark:text-gray-200 dark:hover:border-green-500"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
      {alert && (
        <Alert
          color={
            alert.severity === "success"
              ? "green"
              : alert.severity === "error"
              ? "red"
              : "blue"
          }
          borderLeft
          role="alert"
          className="ml-auto p-2 mt-2 flex items-center justify-center"
        >
          <button onClick={handleCloseAlert} className="ml-auto p-2">
            <Icon icon="mdi:close" height={24} width={24} />
          </button>
          <span className="font-base font-poppins ml-auto p-2">
            {alert.message}
          </span>
        </Alert>
      )}
    </div>
  );
};

export default ContactMe;
