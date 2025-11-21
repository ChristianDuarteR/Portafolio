import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/christian-javier-duarte-rojas",
      icon: "linkedln.svg",
    },
    {
      name: "GitHub",
      href: "https://github.com/ChristianDuarteR",
      icon: "github.svg",
    },
    {
      name: "Correo",
      href: "mailto:christianjavierduarte@gmail.com",
      icon: "mail.svg",
    },
  ];

  return (
    <div
      className="
        flex 
        flex-wrap 
        gap-4 
        sm:gap-6 
        items-center 
        justify-center 
        p-4 
        sm:p-6
      "
    >
      {links.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.12, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          className="
            p-3 
            sm:p-4 
            bg-white/10 
            backdrop-blur-lg
            rounded-2xl 
            shadow 
            hover:shadow-lg 
            transition-all 
            cursor-pointer 
            flex 
            items-center 
            justify-center
          "
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={28}
            height={28}
            className= "sm:w-[32px] sm:h-[32px]"
          />
        </motion.a>
      ))}
    </div>
  );
}
