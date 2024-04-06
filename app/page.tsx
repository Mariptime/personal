import React from "react";
import Navbar from "./AkshayComps/Navbar";
import Link from "next/link";
import MainChunk from "./VaishnaviComps/MainChunk";

const page = () => {
  return (
    <>
      <Navbar />
      <MainChunk />
      <button className="btn btn-accent">
        <Link href="/Account">Click me</Link>
      </button>
    </>
  );
};

export default page;
