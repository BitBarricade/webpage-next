"use client";
import React from "react";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Styles from "./Contact.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const ContactForm = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <motion.div
          initial={{ opacity: 0, y: 150, scale: 0.5}}
          whileInView={{opacity: 1, y: 0, scale: 1}}
          transition={{ duration: 0.8 }}
        >
          <p className={`justify-content-center ${Styles.SectionTitle}`}><span></span>Contact Us<span></span></p>
          <h1 className={`text-center mb-5 ${Styles.Title}`}>Contact For Any Query</h1>
        </motion.div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 150, scale: 0.5}}
              whileInView={{opacity: 1, y: 0, scale: 1}}
              transition={{ duration: 1 }}
            >
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
                  <Form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <Field
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            className={`form-control ${Styles.FormText}`}
                          />
                          <label htmlFor="name" className={Styles.FormTextLabel}>Your Name</label>
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <Field
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className={`form-control ${Styles.FormText}`}
                          />
                          <label htmlFor="email" className={Styles.FormTextLabel}>Your Email</label>
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <Field
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            className={`form-control ${Styles.FormText}`}
                          />
                          <label htmlFor="subject" className={Styles.FormTextLabel}>Subject</label>
                          <ErrorMessage
                            name="subject"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <Field
                            as="textarea"
                            name="message"
                            id="message"
                            placeholder="Leave a message here"
                            className={`form-control ${Styles.FormText}`}
                            style={{ height: "150px" }}
                          />
                          <label htmlFor="message" className={Styles.FormTextLabel}>Leave a message here</label>
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <button
                            type="submit"
                            className={`btn w-100 py-3 ${Styles.Button}`}
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
