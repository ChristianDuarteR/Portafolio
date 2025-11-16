import Image, { StaticImageData } from "next/image";

type ExperienceProps = {
  logo: StaticImageData | string;
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
};

export default function Experience({
  logo,
  company,
  role,
  start,
  end,
  description,
}: ExperienceProps) {
  const validLogo =
    typeof logo === "string" && !logo.startsWith("/")
      ? "/" + logo
      : logo;

  return (
    <div className="relative flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:shadow-md transition-all">

      <div className="flex items-center justify-between w-full mb-3">

        <span className="text-s text-gray-400 whitespace-nowrap">
          {start} — {end}
        </span>

        <Image
          src={validLogo}
          alt={company}
          width={200}
          height={200}
          className="relative object-contain"
        />
      </div>

      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-bold text-pink-300">{role}</h3>
        <span className="text-sm text-purple-300">· {company}</span>
      </div>

    <p className="text-sm sm:text-base text-pretty text-gray-400 text-left">
        {description}
    </p>
    </div>
  );
}
