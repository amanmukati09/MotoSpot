import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className="flex flex-col text-green-200 font-extrabold text-md  mt-2  bg-emerald-950">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 mt-2">
      <div className="flex flex-col justify-start items-start gap-6 mt-3">
        <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link key={link.title} href={link.url} className="text-white font-semibold text-sm">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-2 text-sm font-semibold sm:px-16 px-6 py-2">
      <p>@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-100">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-100">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
