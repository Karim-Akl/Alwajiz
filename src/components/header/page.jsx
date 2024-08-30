"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prev => !prev);

  return (
    <header>
      <div className="container flex navbur">
        <div className="flex" style={{ justifyContent: "space-between", gap: "10rem" }}>
          {/* Logo */}
          <div className="img-class">
            <Link href="/">
              <img src="/image/logo.png" alt="Logo" className="logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex">
              <li><Link href="/">الصفحة الرئيسية</Link></li>
              <li><Link href="/our-services">خدماتنا</Link></li>
              <li><Link href="/contact">اتصل بنا</Link></li>
            </ul>
          </nav>
        </div>

        {/* Contact Button and Menu Button */}
        <div className="flex">
          <Link href="/contact">
            <button className="contact-but">ابقى على تواصل</button>
          </Link>

          <button className="menu" onClick={toggleModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="18" height="2" fill="black" />
              <rect x="3" y="11" width="18" height="2" fill="black" />
              <rect x="3" y="16" width="18" height="2" fill="black" />
            </svg>
          </button>
        </div>
        {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button className="icon-x" onClick={toggleModal}>x</button>
            </li>
            <li><Link href="/">الصفحة الرئيسية</Link></li>
            <li><Link href="/our-services">خدماتنا</Link></li>
            <li><Link href="/contact">اتصل بنا</Link></li>
          </ul>
        </div>
      )} 


      </div    > 


    </header>
  );
};

export default Header;
