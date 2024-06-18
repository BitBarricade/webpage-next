import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import ContactForm from "@/components/Contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  openGraph: {
    title: "Contact Us",
  }
};

const ContactPage = () => {
  return (
    <div>
      <Hero />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
