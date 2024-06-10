import LeftSection from "@/components/LeftSection";
import LoginForm from "@/components/LoginForm";
import React from "react";

function page() {
  return (
    <div  style={{backgroundColor: "var(--background-color) !important"}}>
      <LeftSection />
      <LoginForm />
    </div>
  );
}

export default page;
