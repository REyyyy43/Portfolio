import { useState, useRef } from "react";
import "../styles/style.css";
import videoFile from "../assets/background.mp4";
import videoFondo from "../assets/backgroundHab.mp4";
import { skills } from "../components/skillsData";
import { paginasWeb, disenoUXUI, edicionVideo, paginasWebLinks } from "../components/portfolioData";
import Portfolium from "../components/Portfolium";

// Íconos de React Icons
import {
  FaGithub,
  FaFacebookF,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiLinkedin,
 
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaUpwork } from "react-icons/fa6";

const Home: React.FC = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [activeSection, setActiveSection] = useState("paginasWeb");
  const paginasWebRef = useRef<HTMLDivElement>(null);
  const disenoUXUIRef = useRef<HTMLDivElement>(null);
  const edicionVideoRef = useRef<HTMLDivElement>(null);

  const handleScroll = (section: string) => {
    setActiveSection(section);
    let ref;
    if (section === "paginasWeb") ref = paginasWebRef;
    else if (section === "disenoUXUI") ref = disenoUXUIRef;
    else ref = edicionVideoRef;
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <div className="bg-[#020942] px-0.5 py-0.5 overflow-hidden">
        <div
          className={`flex transition-transform duration-700 ease-in-out ${
            showPortfolio ? "-translate-x-[100vw]" : ""
          } w-[200vw]`}
        >
          {/* SECCIÓN VIDEO */}
          <section className="w-screen pr-4 relative">
            <video
              autoPlay
              loop
              muted
              className="w-full max-h-[600px] object-cover rounded-xl shadow-lg"
            >
              <source src={videoFile} type="video/mp4" />
            </video>

            {/* Botón centrado más arriba */}
            <button
              onClick={() => setShowPortfolio(true)}
              className="absolute bottom-20 cursor-pointer left-1/2 transform -translate-x-1/2 border border-gray-50 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-[#020942] transition duration-300"
            >
              Ver Portafolio →
            </button>
          </section>

          {/* SECCIÓN PORTAFOLIO */}
          {showPortfolio && (
          <Portfolium
            showPortfolio={showPortfolio}
            setShowPortfolio={setShowPortfolio}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            paginasWebRef={paginasWebRef}
            disenoUXUIRef={disenoUXUIRef}
            edicionVideoRef={edicionVideoRef}
            handleScroll={handleScroll}
            paginasWeb={paginasWeb}
            disenoUXUI={disenoUXUI}
            edicionVideo={edicionVideo}
            paginasWebLinks={paginasWebLinks}
          />
           )}
        </div>

        {/* REDES SOCIALES */}
        {!showPortfolio && (
          <section className="bg-[#232954] text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4 z-20 relative">
            <div>
              <h2 className="text-xl font-bold">Sígueme en mis redes</h2>
              <p className="text-sm">Contenido exclusivo en cada plataforma</p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://github.com/REyyyy43"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-gray-400 transition"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/reinaldo-landaeta-232188289/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition"
              >
                <SiLinkedin className="text-2xl" />
              </a>
              <a
                href="https://discord.com/channels/1141530033949773905"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-500 transition"
              >
                <FaDiscord className="text-2xl" />
              </a>
              <a
                href="https://w.app/micontacto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-700 transition"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01d4bcd03c2f8ed577"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700 transition"
              >
                <FaUpwork className="text-2xl" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition"
              >
                <MdEmail className="text-2xl" />
              </a>
            </div>

            <div>
              <a
                href="https://w.app/micontacto"
                className="bg-white text-[#020942] px-4 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Contactar
              </a>
            </div>
          </section>
        )}

        {/* SECCIÓN SKILLS */}
        {!showPortfolio && (
          <section className="mt-0 text-white px-0 relative">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-[700px] object-cover"
              >
                <source src={videoFondo} type="video/mp4" />
              </video>
              <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-20 pb-20">
                <h2 className="text-3xl font-bold mb-10 text-center">
                  Mis Habilidades
                </h2>
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-full">
                  {skills.map(({ icon, title, desc }, i) => (
                    <li
                      key={i}
                      className="bg-[#03155b] p-4 rounded-lg shadow-md flex items-start gap-4"
                    >
                      {icon}
                      <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-gray-300">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Home;
