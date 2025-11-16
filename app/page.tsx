"use client";
import Image from "next/image";
import Contact from "./contact";
import Experience from "./experience";
import Proyect from "./projects";

const NAME = "Christian Duarte";
const ROLE = "Desarrollador Fullstack Junior";
const LOCATION = "Bogotá, Colombia";
const PHONE_NUMBER = "573002853566";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola Christian vi tu portafolio y me gustaria contactarte para conocerte mejor. ¿Podemos conectarnos para discutir más detalles?");
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${PHONE_NUMBER}&text=${WHATSAPP_MESSAGE}`;
export const projects = [
  {
    id: 1,
    name: "IA y Big Data para automatizar el análisis de sentimientos en reseñas de productos",

    techIcons: [
      { icon: "/flask.svg", color: "bg-white/30" },
      { icon: "/react.svg", color: "bg-sky-500/20" },
      { icon: "/mongo.svg", color: "bg-green-600/20" },
    ],

    links: [
      { label: "GitHub BackEnd", url: "https://github.com/Medina95/ReviewBack" },
      { label: "GitHub FrontEnd" , url: "https://github.com/Medina95/Proyecto-front"},
      { label: "Demostracion", url: "https://www.youtube.com/watch?v=rJPe5Ea8vxM" },
    ],
  },

  {
    id: 2,
    name: "Cenizas del pasado - Videojuego Multijugador en linea",

    techIcons: [
      { icon: "/docker.svg", color: "bg-blue-500/20" },
      { icon: "/nodejs.svg", color: "bg-green-500/20" },
      { icon: "/angular.svg", color: "bg-red-500/20" },
      { icon: "/java.svg", color: "bg-orange-500/20" },
      { icon: "/mongo.svg", color: "bg-green-600/20" },
    ],

    links: [
      { label: "Demostracion", url: "https://www.youtube.com/watch?v=tqIWOVZXyY8" },
    ],
  },

  {
    id: 3,
    name: "MedProcedures - Plataforma de gestion de procedimientos médicos",

    techIcons: [
      { icon: "/java.svg", color: "bg-orange-500/20" },
      { icon: "/springboot.svg", color: "bg-green-400/20" },
      { icon: "/mysql.svg", color: "bg-blue-300/20" },
    ],

    links: [
      { label: "Demostracion", url: "https://www.youtube.com/watch?v=4lHCgaHd9Qs" },
    ]
  },
];


const experiencias = [
 {
    id: 1,
    company: "InproExt",
    title: "Desarrollador FullStack junior",
    period: "Diciembre 2024 - Junio 2025",
    description: "Diseñé e implementé HumanPower desde cero, una plataforma de gestión de desempeño para empresas con cientos de colaboradores. Definí su arquitectura técnica usando Python, Vue y PostgreSQL, priorizando escalabilidad, seguridad y mantenibilidad. Desarrollé sus módulos clave: ingesta masiva de datos, motor de evaluaciones, analítica de talento e integración de IA para detectar brechas de habilidades y recomendar rutas de aprendizaje. También construí una experiencia de usuario clara y funcional. Además, presenté la solución a clientes potenciales, demostrando su valor técnico y generando alto interés empresarial. Dejé una demo totalmente funcional y preparada para ser continuada sin afectar la continuidad del proyecto.",
    image: "logo-inproext.png"
 }, 
 {
    id: 2,
    company: "BenditaEssence",
    title: "Desarrollador Tecnico",
    period: "Junio 2025 - Actualidad",
    description: "Como Desarrollador Técnico en BenditaEssence hago parte del equipo core de integraciones en Salesforce, trabajando directamente con clientes para mejorar y automatizar procesos empresariales. Utilizo Node.js, Apex (similar a Java), HTML, CSS y APIs REST para crear flujos avanzados, personalizaciones y conectores que optimizan operaciones y fortalecen la gestión comercial. Participo en todo el ciclo: análisis funcional, diseño técnico, desarrollo, pruebas y acompañamiento al cliente. He implementado soluciones exitosas para empresas como Constructora Capital, Rápido Ochoa, Factor Legal,entre otras logrando mejorar sus procesos internos y la eficiencia de sus equipos a través de automatizaciones e integraciones escalables dentro del CRM.",
    image: "logo-benditaessence.png"  
 }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="w-full border-b border-white/10 sticky top-0 backdrop-blur-md z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
              <Image src="/christian-duarte.jpeg" alt="Profile" width={48} height={48} />
            </div>
            <div>
              <h1 className="text-lg font-semibold">{NAME}</h1>
              <p className="text-xs text-white/60">{ROLE}</p>
            </div>
          </div>

          <nav className="flex gap-6 text-sm text-white/70">
            <a href="#home" className="hover:text-white">Inicio</a>
            <a href="#experience" className="hover:text-white">Experiencia</a>
            <a href="#projects" className="hover:text-white">Proyectos Destacados</a>
            <a href="#sobremi" className="hover:text-white">Sobre Mi</a>
            <a href="#contact" className="hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

        <section id='home' className="text-center py-16" >
          <h2 className="text-4xl font-bold mb-4">Hola! soy {NAME}</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            {ROLE} con experiencia construyendo aplicaciones completas. Me apasiona el desarrollo de software y estoy constantemente,
            aprendiendo para mejorar cada día. Actualmente me encuentro <span className="text-green-400">disponible para trabajar</span>.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium"
          >
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp Icon"
              width={100}
              height={100}
              className="w-5 h-5"
              priority={true}
            />

             Contáctame vía WhatsApp
          </a>

          <Contact />
        
      </section>
      <section id="experience" className="text-center">
        <h3 className="text-3xl font-bold mb-8 text-left"> Experiencia </h3>

        <div className="flex flex-col gap-6"> 
          {experiencias.map((exp) => (
            <Experience
              key={exp.id}
              logo={exp.image}
              company={exp.company}
              role={exp.title}
              start={exp.period.split(" - ")[0]}
              end={exp.period.split(" - ")[1]}
              description={exp.description}
            />
          ))}
        </div>
      </section>


      <div className="max-w-3xl mx-auto px-6 py-16 space-y-32">

      <section id="projects">
        <h3 className="text-3xl font-bold mb-8 text-left flex items-center gap-2">
          <span className="text-purple-400 font-mono">{'</>'}</span>
          Proyectos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Proyect
              key={project.id}
              name={project.name}
              techIcons={project.techIcons}
              links={project.links}
            />
          ))}
        </div>
      </section>

      <section id="sobremi" className="text-left">
        <h3 className="text-3xl font-bold mb-8">Sobre mí</h3>

        <p className="text-lg leading-relaxed text-gray-300">
          Soy un desarrollador en crecimiento que se enfoca en aprender de forma
          autónoma y constante, siempre buscando tecnologías que me reten y que
          fortalezcan mi stack. Mi experiencia en entornos reales incluyendo
          desarrollo full stack, backend con Python/Django, Salesforce, Nuxt y
          despliegues con Docker me ha permitido desarrollar una mentalidad
          altamente adaptable, orientada a resolver problemas y comprender un
          proyecto de punta a punta.
        </p>

        <br />

        <p className="text-lg leading-relaxed text-gray-300">
          Me motiva mantenerme a la vanguardia, explorar nuevas herramientas y aplicar
          buenas prácticas modernas para construir soluciones escalables,
          mantenibles y alineadas con las necesidades del negocio.
        </p>
      </section>



        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold mb-4">¡Mandame un mensaje!</h3>
            <Contact/>
        </section>
      </div>

      <footer className="mt-5 py-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {2025} {NAME} {LOCATION}. Portafolio construido con Next.js & Tailwind.
      </footer>
    </main>
  );
}