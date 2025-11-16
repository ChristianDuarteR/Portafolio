import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/christian-javier-duarte-rojas",
      icon: 'linkedln.svg',
    },
    {
      name: "GitHub",
      href: "https://github.com/ChristianDuarteR",
      icon: 'github.svg',
    },
    {
      name: "Correo",
      href: "mailto:christianjavierduarte@gmail.com",
      icon: 'mail.svg',
    },
  ];

  return (
    <div className="flex gap-6 items-center justify-center p-6 ">
      {links.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center"
        >
        
        <Image
        src={`${item.icon}`}
        alt={item.name}
        width={32}
        height={32}
        className="invert"
        />

        </motion.a>
      ))}
    </div>
  );
}
