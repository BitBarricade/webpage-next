"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const ContactForm = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form className="space-y-6">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <Field
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-3 border rounded-lg"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border rounded-lg"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div>
                  <Field
                    name="subject"
                    placeholder="Subject"
                    className="w-full p-3 border rounded-lg"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Leave a message here"
                    className="w-full p-3 border rounded-lg h-32"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white rounded-lg"
                  >
                    Send Message
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
