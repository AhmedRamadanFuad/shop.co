import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import pay1 from "@/assets/icons/pay-1.svg";
import pay2 from "@/assets/icons/pay-2.svg";
import pay3 from "@/assets/icons/pay-3.svg";
import pay4 from "@/assets/icons/pay-4.svg";
import pay5 from "@/assets/icons/pay-5.svg";
import Image from "next/image";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
const pays = [
  { img: pay1, href: "#" },
  { img: pay2, href: "#" },
  { img: pay3, href: "#" },
  { img: pay4, href: "#" },
  { img: pay5, href: "#" },
];

function FooterSection() {
  return (
    <section>
      <div className="translate-y-1/2">
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default FooterSection;
