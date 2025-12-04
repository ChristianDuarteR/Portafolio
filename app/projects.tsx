import Image from "next/image";

type ProjectCardProps = {
  name: string;
  techIcons: {
    icon: string;
    color?: string;
  }[];
  links: { label: string; url: string }[];
};

export default function Proyect({ name, techIcons, links }: ProjectCardProps) {
  return (
    <div
      className="
        p-4
        sm:p-6
        rounded-2xl 
        bg-white/10 
        backdrop-blur-md
        border border-white/20 
        shadow-sm 
        hover:shadow-md 
        transition-all 
        flex 
        flex-col 
        gap-5
      "
    >
      <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
        {name}
      </h3>

      <div
        className="
          flex 
          items-center 
          gap-3 
          sm:gap-4 
          flex-wrap
        "
      >
        {techIcons.map((t, i) => (
          <div
            key={i}
            className={`
              rounded-xl
              ${t.color ?? "bg-white/10"}
              backdrop-blur-sm 
              p-2 
              sm:p-3 
              border border-white/20 
              flex 
              items-center 
              justify-center 
              w-12 
              h-12 
              sm:w-14 
              sm:h-14
            `}
          >
            <Image
              src={t.icon}
              alt="tech"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div
        className="
          flex 
          flex-wrap 
          gap-3 
          sm:gap-4
        "
      >
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            className="
              text-xs 
              sm:text-sm 
              px-3 
              py-1.5 
              rounded-lg 
              bg-purple-600/30 
              text-purple-200 
              hover:bg-purple-600/50 
              transition-colors
            "
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
