import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-sage-100 text-white py-8">
      <div className="container max-w-4xl mx-auto gap-4 flex flex-col md:flex-row justify-between items-center mb-4">
        <Image
          src="/credits/IAPCP.png"
          alt="International Alliance Professional Complementary Practictioners Accredited Member"
          width={271}
          height={136}
        />
        <Image
          src="/credits/MCH.png"
          alt="Mindvalley Certified Coach"
          width={132}
          height={100}
        />
        <Image
          src="/credits/RHA.png"
          alt="Reiki Healing Association Member"
          width={136}
          height={136}
        />
        <Image
          src="/credits/Regrowth.png"
          alt="Regrowth Therapy and Healing Logo"
          width={240}
          height={87}
        />
      </div>
      <div className="container mx-auto px-4 text-center">
        <p>©2025 Regrowth Therapy & Healing LLC. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
