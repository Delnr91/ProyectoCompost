import React, { useState } from 'react';
import logoSrc from './assets/logo.jpg';
// ----- Paleta de Colores Estricta (Logo) -----
// Verde: #006400
// Naranja: #FFA500
// Negro/Gris Oscuro: #1F2937 (gray-800) / #111827 (gray-900)
// Blanco: #FFFFFF
// Tinte Verde Claro (para degradado sutil): #D1FAE5 (green-100)

// ----- Componente Header -----
// Fondo blanco, SIN sticky, CON navegación
const Header = () => {
  // !! IMPORTANTE: Cambia "/logo-compost-solar.png" por el nombre real de tu archivo de logo en la carpeta public !!
 
  const placeholderLogo = "https://placehold.co/150x80/FFFFFF/000000?text=Logo+Compost+Solar";

  return (
    // Fondo blanco, sombra leve. Contenedor interno para alinear logo y nav.
    <header className="py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" aria-label="Volver al inicio"> {/* Enlace en el logo opcional */}
          <img
            src={logoSrc}
            alt="Logo Compost Solar Calama"
            className="w-40 md:w-56 h-auto"  // Altura ajustada ligeramente
            // ADVERTENCIA: Si tu logo tiene elementos blancos, no serán visibles aquí. Considera editar el logo.
            onError={(e) => { e.target.onerror = null; e.target.src=placeholderLogo }}
          />
        </a>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            {/* Links de navegación */}
            {[
              { href: "#solucion", label: "Solución" },
              { href: "#beneficios", label: "Beneficios" },
              { href: "#nosotros", label: "Nosotros" }, // Apunta a la sección Misión/Visión
              { href: "#contacto", label: "Contacto" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  // Estilo de los enlaces: gris oscuro, naranja al pasar el mouse, fuente Lato
                  className="text-gray-700 hover:text-[#FFA500] font-sans text-sm md:text-base font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

// ----- Componente Hero Section -----
// Fondo blanco, título negro, botón naranja
const HeroSection = () => {
  return (
    // Añadimos un id por si se quiere enlazar aquí también
    <section id="inicio" className="text-center py-24 md:py-32 bg-white">
       <div className="container mx-auto px-6 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Abono Orgánico Solar: Elegancia Natural para la Tierra de Calama
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto font-sans">
            Transformamos residuos orgánicos locales en abono premium usando el poder del sol. Nutre tu suelo con sostenibilidad y clase.
          </p>
          <a
            href="#contacto"
            className="bg-[#FFA500] hover:bg-orange-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-lg text-lg md:text-xl transition-all duration-300 ease-in-out inline-block transform hover:scale-105 hover:shadow-lg"
          >
            Descubre Más
          </a>
      </div>
    </section>
  );
};

// ----- Componente Simple Section (Reutilizable para Problema) -----
// Fondo blanco explícito
const SimpleSection = ({ title, children, id, borderTopColor = null }) => {
  const borderClass = borderTopColor ? `border-t-4 ${borderTopColor}` : '';
  return (
    <section id={id || undefined} className={`py-16 md:py-20 bg-white ${borderClass}`}>
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10 md:mb-12 font-serif">
          {title}
        </h2>
        <div className="max-w-3xl mx-auto text-center text-lg text-gray-700 font-sans">
          {children}
        </div>
      </div>
    </section>
  );
};

// ----- Componente Solution Section con Imágenes -----
// Fondo blanco explícito, AÑADIDO ID
const SolutionSectionWithImages = () => {
  return (
    // Añadido id="solucion"
    <section id="solucion" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10 md:mb-12 font-serif">
            Nuestra Solución: Abono Solar Premium
          </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-lg text-gray-700 font-sans">
            <p className="mb-4">
              Creamos un abono orgánico excepcional a partir de residuos agrícolas seleccionados, deshidratados con innovadora tecnología solar. Un proceso limpio que devuelve vida y nutrientes esenciales a tu tierra.
            </p>
            <p>
              Aprovechamos la alta radiación solar de Calama de forma eficiente para un producto ecológico de máxima calidad.
            </p>
             {/* Placeholder con borde verde */}
             <div className="mt-8 h-56 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden border-4 border-[#006400]">
              [Imagen/Diagrama del Proceso]
             </div>
          </div>
          <div className="md:w-1/2">
             {/* Placeholder con borde naranja */}
             <div className="h-72 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden shadow-lg border-4 border-[#FFA500]">
               [Imagen del Abono/Producto]
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// ----- Componente Benefit Item -----
// Tarjeta blanca, título verde, borde superior naranja
const BenefitItem = ({ title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#FFA500] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl text-center h-full flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-[#006400] mb-3 font-serif">{title}</h3>
            <p className="text-gray-700 font-sans flex-grow">{description}</p>
        </div>
    );
};

// ----- Componente Benefits Section -----
// Fondo blanco explícito, título verde, AÑADIDO ID
const BenefitsSection = () => {
  const benefits = [
    { title: "Revitaliza Suelos", description: "Mejora drásticamente la estructura y retención de agua en tierras áridas." },
    { title: "Nutrición Superior", description: "Aporta un rico balance de nutrientes esenciales (K, P, Ca) para plantas vigorosas." },
    { title: "Pureza Natural", description: "100% orgánico y local. Libre de químicos, cuida tu salud y el ecosistema." },
    { title: "Eco-Consciente", description: "Producido con energía solar limpia, revalorizando residuos orgánicos." },
    { title: "Impulso Local", description: "Fomenta la economía circular y sostenible de Calama." },
    { title: "Uso Eficiente del Agua", description: "Ayuda al suelo a retener más humedad, optimizando cada gota de riego." },
  ];

  return (
    // Añadido id="beneficios" y bg-white
    <section id="beneficios" className="py-16 md:py-20 bg-white border-t-4 border-[#006400]">
       <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006400] text-center mb-12 md:mb-16 font-serif">
          Beneficios Exclusivos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- Componente Mission & Vision Section -----
// Fondos sólidos verde/naranja, AÑADIDO ID
const MissionVisionSection = () => {
  return (
    // Añadido id="nosotros" y bg-white para la sección general
    <section id="nosotros" className="py-16 md:py-20 bg-white">
       <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
          {/* Mission: Fondo verde, texto blanco, título naranja */}
          <div className="bg-[#006400] text-white p-8 md:p-10 rounded-lg shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-4 font-serif">
              Nuestra Misión
            </h3>
            <p className="text-lg leading-relaxed opacity-95 font-sans">
              Transformar los desperdicios orgánicos agrícolas de Calama en abono sustentable de alta calidad utilizando energía solar, para nutrir los suelos de agricultores y jardineros locales, promoviendo una agricultura más sostenible y reduciendo la contaminación en nuestra comuna.
            </p>
          </div>
          {/* Vision: Fondo naranja, texto negro, título verde */}
          <div className="bg-[#FFA500] text-gray-900 p-8 md:p-10 rounded-lg shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#006400] mb-4 font-serif">
              Nuestra Visión
            </h3>
            <p className="text-lg leading-relaxed font-sans">
              Ser reconocidos en los próximos 3-5 años como la empresa líder en producción y distribución de abono orgánico solar en la Región de Antofagasta, destacando por nuestra innovación tecnológica, la calidad de nuestro producto, nuestro impacto ambiental positivo y el fortalecimiento de la economía circular local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----- Componente Call To Action Section -----
// Fondo verde, texto blanco, botón naranja
const CallToActionSection = () => {
    return (
        <section className="py-16 md:py-20 text-center bg-[#006400] rounded-lg shadow-lg my-12 mx-auto max-w-6xl px-6 md:px-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 font-serif">
                ¿Listo para Transformar tu Tierra?
            </h2>
            <p className="mb-10 max-w-2xl mx-auto text-lg opacity-95 font-sans">
                Si eres agricultor buscando la excelencia, jardinero apasionado por lo natural, o productor interesado en colaborar, este es el siguiente paso.
            </p>
            <a
                href="#contacto"
                className="bg-[#FFA500] hover:bg-orange-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-lg text-lg md:text-xl transition-all duration-300 ease-in-out inline-block transform hover:scale-105 hover:shadow-lg"
            >
                Conversemos
            </a>
        </section>
    );
};

// ----- Componente Contact Form -----
// Fondo blanco explícito, ID ya existente
const ContactForm = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado (simulación):', formData);
    setMessage('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setMessage(''), 5000);
  };

  return (
    // id="contacto", añadido bg-white
    <section id="contacto" className="py-16 md:py-20 bg-white">
       <div className="container mx-auto px-6 md:px-8">
        {/* Tarjeta del formulario blanca con borde */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-3xl mx-auto border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10 font-serif">
            Ponte en Contacto
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2 font-sans">
                Nombre Completo:
              </label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-300 font-sans" placeholder="Tu nombre"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 font-sans">
                Correo Electrónico:
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-300 font-sans" placeholder="tu.email@ejemplo.com"/>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2 font-sans">
                Tu Mensaje:
              </label>
              <textarea id="mensaje" name="mensaje" rows="5" value={formData.mensaje} onChange={handleChange} required className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-300 font-sans" placeholder="¿En qué podemos ayudarte?"></textarea>
            </div>
            <div className="text-center pt-4">
              <button type="submit" className="bg-[#006400] hover:bg-green-800 text-white font-bold py-3 px-10 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out text-lg transform hover:scale-105 hover:shadow-lg">
                Enviar Mensaje
              </button>
            </div>
          </form>
          {message && (
            <div className="mt-6 text-center">
              <p className="text-[#006400] font-bold">{message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ----- Componente Footer -----
// Fondo verde oscuro
const Footer = () => {
  return (
    <footer className="bg-[#006400] text-white text-center py-5 mt-auto">
      <p className="text-sm opacity-90 font-sans">
        &copy; {new Date().getFullYear()} Compost Solar Calama. Elegancia y Sostenibilidad para tu Tierra.
      </p>
      <p className="text-xs mt-1 opacity-70 font-sans">Desarrollado por danidev33</p>
    </footer>
  );
};


// ----- Componente Principal App -----
function App() {
  // NOTE: Add global font styles (Playfair Display for serif, Lato for sans) in your main CSS file (e.g., index.css)
  // NOTE: Ensure Tailwind CSS is properly configured in your project.
  // NOTE: Using direct hex colors like bg-[#006400] bypasses theme config but ensures exact color match.

  return (
    // Fondo principal blanco
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Contenedor principal del contenido */}
      <div className="flex-grow">
        <Header /> {/* Header con navegación */}
        {/* El contenido principal se renderiza aquí */}
        <HeroSection />
        <SimpleSection title="El Desafío de Cultivar en el Desierto" id="problema" borderTopColor="border-gray-200">
          <p>
            Los suelos áridos de Calama y la escasez de agua presentan un reto único. ¿Buscas una solución sostenible y eficaz que respete la naturaleza y potencie tus cultivos o jardines?
          </p>
        </SimpleSection>
        <SolutionSectionWithImages /> {/* id="solucion" añadido dentro */}
        <BenefitsSection /> {/* id="beneficios" añadido dentro */}
        <MissionVisionSection /> {/* id="nosotros" añadido dentro */}
        <CallToActionSection />
        <ContactForm /> {/* id="contacto" añadido dentro */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
