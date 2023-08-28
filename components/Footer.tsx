import React from "react";
import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/constants/constants";

interface FooterT {}

const Footer: React.FC<FooterT> = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarHub 2023 <br /> All rights reserved &copy;
          </p>
        </div>

        <ul className="footer__links">
          {footerLinks.map((block) => (
            <li key={block.title} className="footer__link">
              <h3 className="font-bold">{block.title}</h3>
              <ul className="flex flex-col gap-6">
                {block.links.map((link) => (
                  <li key={link.title} className="text-gray-500">
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p className="text-gray-500">&copy;2023 CarHub. All rights reserved.</p>

        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
