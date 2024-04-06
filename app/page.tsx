import React from "react";
import Navbar from "./AkshayComps/Navbar";
import Link from "next/link";
import MainChunk from "./VaishnaviComps/MainChunk";
import Footer from "./VaishnaviComps/Footer";
const page = () => {
  return (
    <>
    <div className="mr-12 ml-12">
    <Navbar />
      <MainChunk />
      <button className="btn btn-accent">
        <Link href="/Account">Click me</Link>
      </button>
    </div>
   
      <Footer/>
    </>
  );
};

export default page;
