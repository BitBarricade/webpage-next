"use client";
import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import ReCAPTCHA from 'react-google-recaptcha';
import { Alert } from "react-bootstrap";
import * as Yup from "yup";
import Styles from "./Contact.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required").min(3, "Need atleast 3 characters").max(20, "Maximum 20 characters allowed"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required").min(5, "Need atleast 5 characters").max(50, "Maximum 50 characters allowed"),
  message: Yup.string().required("Required").min(10, "Need atleast 10 characters").max(200, "Maximum 200 characters allowed"),
});

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {

  const [status, setStatus] = useState<string>('');
  const [statusCode, setStatusCode] = useState<number>(0);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');

  const recaptchaRef = useRef(null);

  const onCaptchaChange = (token: string) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (values: FormValues) => {
    if (!recaptchaToken) {
      setStatus('Complete the Captcha.');
      setStatusCode(404);
      return 1;
    }
    setStatus('');

    const data = new FormData();
    data.append('name', values.name);
    data.append('email', values.email);
    data.append('subject', values.subject);
    data.append('message', values.message);
    data.append('g-recaptcha-response', recaptchaToken);

    try {
      setSubmitting(true);
      const response = await fetch('https://formspree.io/f/xkgwwkkj', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      setStatusCode(response.status);

      if (response.ok) {
        setStatus('Thanks for your submission!');
      } else {
        setStatus('Submission failed. Please try again.');
      }
    } catch (error) {
      setStatus('Submission failed. Please try again..!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <motion.div
          initial={{ opacity: 0, y: 150, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className={`justify-content-center ${Styles.SectionTitle}`}><span></span>Contact Us<span></span></p>
          <h1 className={`text-center mb-5 ${Styles.Title}`}>Contact For Any Query</h1>
        </motion.div>
        <div className="row justify-content-center">
          <div className="col-lg-7 col-xl-6 col-xxl-4">
            <motion.div
              initial={{ opacity: 0, y: 150, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form noValidate>
                      {statusCode != 200 && (<div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field
                              name="name"
                              id="name"
                              min="3"
                              max="20"
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
                              min="10"
                              max="50"
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
                              min="10"
                              max="200"
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
                            <ReCAPTCHA
                              className="g-recaptcha"
                              sitekey="6Ld7ggEqAAAAAB2AC2jj6CAluRMztZBkHmPT34VS"
                              ref={recaptchaRef}
                              onChange={onCaptchaChange}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className={`btn w-100 py-3 ${Styles.Button}`}
                            >
                              {isSubmitting ? "Submitting..." : "Send Message"}
                            </button>
                          </div>
                        </div>
                      </div>)}
                      {status && (<div className="row g-3 mt-1">
                        <div className="col-12">
                          <div className="form-floating">
                            <Alert variant={statusCode == 200 ? 'primary' : 'danger'}>
                              {status}
                            </Alert>
                          </div>
                        </div>
                      </div>)}
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
