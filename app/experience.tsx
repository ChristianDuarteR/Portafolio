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
    <div
      className="
        relative 
        flex 
        flex-col 
        p-4 
        sm:p-6 
        rounded-xl 
        bg-white/5 
        border 
        border-white/10 
        shadow-sm 
        hover:shadow-md 
        transition-all 
        backdrop-blur-md
      "
    >
      <div
        className="
          flex 
          flex-col 
          sm:flex-row 
          sm:items-center 
          justify-between 
          w-full 
          mb-3 
          gap-3
        "
      >
        <span className="text-sm text-gray-400 whitespace-nowrap">
          {start} — {end}
        </span>

        <div className="flex justify-start sm:justify-end">
<Image
  src={validLogo}
  alt={company}
  width={180}
  height={180}
  className="
    object-contain 
    w-36 
    h-14 
    sm:w-48 
    sm:h-20
    opacity-80
  "
/>



        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-2">
        <h3 className="text-lg sm:text-xl font-bold text-pink-300">
          {role}
        </h3>

        <span className="text-sm sm:text-base text-purple-300 sm:ml-2">
          · {company}
        </span>
      </div>

      <p
        className="
          text-sm 
          sm:text-base 
          text-pretty 
          text-gray-300 
          leading-relaxed
        "
      >
        {description}
      </p>
    </div>
  );
}
