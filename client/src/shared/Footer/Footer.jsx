/*

Copyright 2024 Himanshu Dinkar

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Link } from 'react-router-dom'
import React from 'react'
import { useLocation } from 'react-router-dom';

// Fix: Update imports from lucide-react
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube // Added Youtube import
} from 'lucide-react';
import { motion } from 'framer-motion';

const FooterLink = ({ href, children }) => (
  <motion.li
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <a
      href={href}
      className="hover:text-white transition-colors duration-300 flex items-center gap-2"
    >
      {children}
    </a>
  </motion.li>
);

const SocialButton = ({ Icon, href }) => (
  <motion.a
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contacti';

  return (
    <footer className={`relative overflow-hidden ${isContactPage
      ? 'bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-xl'
      : 'bg-gradient-to-b from-slate-900 to-slate-950 text-gray-400'
      } py-16`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <img className="h-12 w-auto rounded-lg" src="/logo/jnu_logo.png" alt="Jaipur National University Logo" />
              <Link to="/" className="text-3xl font-bold text-gray-300 ">
                Jaipur National University
              </Link>
            </motion.div>

            <ul className="space-y-4">
              <FooterLink href="mailto:info@jnujaipur.ac.in">
                <Mail className="h-5 w-5 text-indigo-400" />
                info@jnujaipur.ac.in
              </FooterLink>
              <FooterLink href="tel:18001021900">
                <Phone className="w-4 h-4" />
                Toll Free: 1800 102 1900
              </FooterLink>
              <FooterLink href="tel:01413127028">
                <Phone className="w-4 h-4" />
                Phone: 0141 3127028
              </FooterLink>
              <FooterLink href="#">
                <MapPin className="w-4 h-4" />
                Jaipur-Agra Bypass, Near New RTO Office, Jagatpura, Jaipur-302017
              </FooterLink>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4">
              <SocialButton Icon={Facebook} href="https://www.facebook.com/jaipurnationaluniv" />
              <SocialButton Icon={Twitter} href="https://x.com/jaipurjnu" />
              <SocialButton Icon={Linkedin} href="https://www.linkedin.com/school/jaipurnationaluniversity/" />
              <SocialButton Icon={Instagram} href="https://www.instagram.com/jnujaipuruniversity/" />
              <SocialButton Icon={Youtube} href="https://www.youtube.com/channel/UC8KBt4ZO1h8mFoRGhROBb7A" />
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Tutorials</FooterLink>
              <FooterLink href="#">Support Center</FooterLink>
              <FooterLink href="#">API Reference</FooterLink>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">News & Blog</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Security</FooterLink>
              <FooterLink href="#">Compliance</FooterLink>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center text-sm">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Jaipur National University. All rights reserved.
            </p>
            <p className="mt-2 text-gray-500">
              Empowering Education Through Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
