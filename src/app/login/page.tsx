import React from "react";
import type { Metadata } from "next";
import LeftSection from "@/components/LeftSection";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  openGraph: {
    title: "Login",
  }
};

function page() {
  return (
    <div>
      <LeftSection />
      <LoginForm />
    </div>
  );
}

export default page;
