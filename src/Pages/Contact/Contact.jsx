import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Logo from "../../Components/Logo/Logo";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Socials from "../../Components/Socials/Socials";

const Contact = () => {
  return (
    <main className="w-[100vw] h-[100vh] contactsImage flex justify-center items-center">
      <Logo />
      <Sidebar />
      <ContactForm />
      <Socials />
    </main>
  );
};

export default Contact;
