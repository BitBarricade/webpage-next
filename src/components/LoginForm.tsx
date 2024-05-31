"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username or email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted", values);
      // Add form submission logic here
    },
  });

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Bit Barricade</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username or email"
              className="w-full p-3 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 mt-2">{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 mt-2">{formik.errors.password}</div>
            ) : null}
          </div>
          <a href="#" className="text-primary text-sm block text-right mb-2">
            Forgot password?
          </a>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg"
          >
            Sign in
          </button>
          <div className="or-divider text-center my-4">
            <span>or</span>
          </div>
          <button
            type="button"
            className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg"
          >
            Sign in with Google
          </button>
          <p className="text-center mt-4">
            Are you new?{" "}
            <a href="#" className="text-primary">
              Create an Account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
