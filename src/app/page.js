'use client'

import Body from "@/components/body";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let [open, setOpen] = useState(false);
  return (
    <main className="bg-[white] overflow-hidden">
      {!open &&
        <div className="fixed top-0 z-[3] w-screen">
        <Contact/>
        </div>
      }
    <div className={!open ? "mt-[44px]":""}>
    
    <Navbar
    open={open}
    setOpen={setOpen}
    />
      <Header/>
      <Body/>
    </div>
    </main>
  );
}
