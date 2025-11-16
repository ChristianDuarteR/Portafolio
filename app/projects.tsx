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
    <div className="p-5 rounded-2xl bg-white/10 border border-white/20 shadow-sm hover:shadow-md transition-all flex flex-col gap-4">

      <h3 className="text-xl font-semibold text-gray-100">
        {name}
      </h3>

      <div className="flex items-center gap-4 flex-wrap">
        {techIcons.map((t, i) => (
          <div
            key={i}
            className={`w-14 h-14 rounded-full ${t.color ?? "bg-white/10"} 
            backdrop-blur-sm p-3 flex items-center justify-center border border-white/20`}
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

      <div className="flex gap-4 flex-wrap">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            className="text-sm px-3 py-1 rounded-lg bg-purple-600/30 text-purple-200 hover:bg-purple-600/50 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
