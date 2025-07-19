import React from "react";

interface PortfoliumProps {
  showPortfolio: boolean;
  setShowPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: (section: string) => void;
  paginasWebRef: React.RefObject<HTMLDivElement | null>;
  disenoUXUIRef: React.RefObject<HTMLDivElement | null>;
  edicionVideoRef: React.RefObject<HTMLDivElement | null>;
  handleScroll: (section: string) => void;
  paginasWeb: string[];
  disenoUXUI: string[];
  edicionVideo: string[];
  paginasWebLinks: string[];
}

const Portfolium: React.FC<PortfoliumProps> = ({
  showPortfolio,
  setShowPortfolio,
  activeSection,
  paginasWebRef,
  disenoUXUIRef,
  edicionVideoRef,
  handleScroll,
  paginasWeb,
  disenoUXUI,
  edicionVideo,
  paginasWebLinks,
}) => {
  if (!showPortfolio) return null;
  return (
    <section className="w-screen px-6 py-10 text-white flex flex-col items-start bg-[#020942] min-h-screen relative overflow-hidden">
      {/* Fondo decorativo con óvalos extra */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Óvalos desordenados */}
        <div className="absolute top-10 left-20 w-64 h-32 bg-indigo-200 opacity-40 rounded-full rotate-12"></div>
        <div className="absolute top-40 right-32 w-48 h-24 bg-indigo-300 opacity-30 rounded-full -rotate-6"></div>
        <div className="absolute bottom-20 left-40 w-72 h-36 bg-indigo-100 opacity-30 rounded-full rotate-3"></div>
        <div className="absolute bottom-10 right-10 w-56 h-28 bg-indigo-200 opacity-40 rounded-full -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-20 bg-indigo-300 opacity-20 rounded-full rotate-45"></div>
        <div className="absolute top-24 left-2/3 w-32 h-16 bg-indigo-200 opacity-30 rounded-full -rotate-24"></div>
        {/* Óvalos adicionales */}
        <div className="absolute top-1/4 left-1/4 w-52 h-24 bg-indigo-100 opacity-25 rounded-full rotate-6"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-28 bg-indigo-200 opacity-35 rounded-full -rotate-18"></div>
        <div className="absolute top-2/3 left-1/5 w-44 h-20 bg-indigo-300 opacity-20 rounded-full rotate-30"></div>
        <div className="absolute bottom-1/4 left-1/2 w-36 h-16 bg-indigo-200 opacity-30 rounded-full rotate-12"></div>
        <div className="absolute top-1/6 right-1/6 w-40 h-18 bg-indigo-100 opacity-25 rounded-full -rotate-8"></div>
      </div>
      {/* Botón Volver en la esquina superior derecha */}
      <button
        onClick={() => setShowPortfolio(false)}
        className="fixed top-8 right-8 z-20 bg-white hover:bg-indigo-950 hover:border hover:text-white font-semibold cursor-pointer transition-colors text-[#020942] px-6 py-3 rounded-full shadow-lg"
      >
        ← Volver
      </button>
      <h2 className="text-4xl font-bold mb-4 relative z-10">Mi Portafolio</h2>
      <p className="mb-8 max-w-2xl relative z-10">
        Aquí podras ver mis proyectos, habilidades y videos. Haz clic
        sobre cada pagina web para verlas en linea.
      </p>
      {/* Botones de filtro y scroll */}
      <div className="flex gap-6 mb-10 relative z-10">
        <button
          className={`pb-2 cursor-pointer border-b-4 transition-colors font-semibold text-lg ${activeSection === "paginasWeb" ? "border-indigo-400 text-indigo-300" : "border-transparent text-white hover:text-indigo-200"}`}
          onClick={() => handleScroll("paginasWeb")}
        >
          Páginas Web
        </button>
        <button
          className={`pb-2 cursor-pointer border-b-4 transition-colors font-semibold text-lg ${activeSection === "disenoUXUI" ? "border-indigo-400 text-indigo-300" : "border-transparent text-white hover:text-indigo-200"}`}
          onClick={() => handleScroll("disenoUXUI")}
        >
          Diseño UX/UI
        </button>
        <button
          className={`pb-2 cursor-pointer border-b-4 transition-colors font-semibold text-lg ${activeSection === "edicionVideo" ? "border-indigo-400 text-indigo-300" : "border-transparent text-white hover:text-indigo-200"}`}
          onClick={() => handleScroll("edicionVideo")}
        >
          Edición de Video
        </button>
      </div>
      {/* Grid de imágenes por secciones */}
      <div className="w-full flex flex-col gap-12 relative z-10">
        {/* Páginas Web */}
        <div ref={paginasWebRef}>
          <h3 className="text-2xl font-bold mb-4">Páginas Web</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginasWeb.map((imgSrc, index) => (
              <div key={index} className="relative group overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer flex justify-center items-center">
                <img src={imgSrc} alt={`Web ${index + 1}`} className="w-auto h-auto object-contain mx-auto transition duration-300 group-hover:opacity-40" />
                <a href={paginasWebLinks[index]} target="_blank" rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-[#020942] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-600 transition">Ver en línea</span>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Diseño UX/UI */}
        <div ref={disenoUXUIRef}>
          <h3 className="text-2xl font-bold mb-4">Diseño UX/UI</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {disenoUXUI.map((imgSrc, index) => (
              <div key={index} className="overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer flex justify-center items-center relative z-10">
                <img src={imgSrc} alt={`UXUI ${paginasWeb.length + index + 1}`} className="w-[320px] h-[220px] object-cover mx-auto relative z-10" />
              </div>
            ))}
          </div>
        </div>
        {/* Edición de Video */}
        <div ref={edicionVideoRef}>
          <h3 className="text-2xl font-bold mb-4">Edición de Video</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {edicionVideo.map((mediaSrc, index) => (
              <div key={index} className="overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col items-center justify-center relative z-10">
                {mediaSrc.endsWith('.mp4') ? (
                  <video controls className="w-auto h-auto object-contain mx-auto relative z-10">
                    <source src={mediaSrc} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                ) : (
                  <img src={mediaSrc} alt={`Video ${paginasWeb.length + disenoUXUI.length + index + 1}`} className="w-auto h-auto object-contain mx-auto relative z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolium;
