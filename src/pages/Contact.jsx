import { FaWhatsapp } from 'react-icons/fa6'; 
import Footer from './Footer';
import projectionImage from '../assets/images/set01.jpg';

const Contact = () => {
  return (

    
    
    <div>

                  {/* Sección Quiénes Somos con imagen */}
                  <section className="w-full py-20 bg-black text-white flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-12 px-6 lg:px-20" data-aos="fade-up">
    {/* Columna de Texto alineado a la izquierda */}
    <div className="max-w-lg text-left">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4 relative inline-block">
            CONTACTANOS
            <span className="block w-20 h-1 bg-[#a464ff] mt-2"></span>
        </h2>
        <p className="font-semibold mb-4">
            Listos para asesorarte
        </p>
        <p className="mb-4">
            Nuestro equipo de expertos está listo para ayudarte a elegir el modelo
            perfecto para tu iniciativa.
        </p>

        <p className="mb-4 flex flex-col items-start gap-4">
    <a 
        href="https://wa.me/5491163789091" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-[#25D366] font-semibold hover:text-[#a464ff] transition-all duration-300"
    >
        <FaWhatsapp size={24} />
        <span>+54 9 11 63789091</span>
    </a>

    <a 
        href="mailto:fireflyproyecciones@gmail.com" 
        className="flex items-center space-x-2 text-[#25D366] font-semibold hover:text-[#a464ff] transition-all duration-300 text-lg"
    >
        <span>✉️</span>
        <span>fireflyproyecciones@gmail.com</span>
    </a>
</p>

        
    </div>

    {/* Cuadro a la derecha para la imagen */}
    <div className="w-full max-w-sm lg:max-w-md">
        <img
            src={projectionImage}
            alt="Proyección de luces decorativas en un sendero"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
    </div>
</section>

{/* 
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={500} gravity={0.1} colors={['#f7a1b1', '#85e0e2', '#a1e1f2']} />}
 */}



      {/* <div className="text-center mb-8 bg-white rounded-3xl shadow-md p-6 w-full max-w-2xl border border-gray-200">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">¡Nos encantaría saber de ti!</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Si tienes alguna pregunta, comentario o simplemente quieres saludar, completa el formulario a continuación.
          Nuestro equipo está comprometido a responderte lo antes posible.
        </p>
      </div> */}

{/*       <div
        className={`relative transition-all bg-white rounded-lg shadow-lg p-8 w-full max-w-md border-2 ${borderAnimation ? 'border-blue-600' : 'border-transparent'} border-opacity-80`}
      > */}
       {/*  <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">Contáctanos</h1> */}

     {/*    <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

         
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500 transition-all"
            ></textarea>
          </div>

          
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
          >
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
 */}
        {/* Estado del envío */}
   {/*      {status && <p className="text-center mt-4 text-sm text-gray-600">{status}</p>}
 */}
       
{/*         {isSending && (
          <div className="absolute inset-0 border-animation">
            <style>{`
              @keyframes borderAnimation {
                0% {
                  border-top: 4px solid #4f81e0;
                }
                25% {
                  border-right: 4px solid #4f81e0;
                }
                50% {
                  border-bottom: 4px solid #4f81e0;
                }
                75% {
                  border-left: 4px solid #4f81e0;
                }
                100% {
                  border: 4px solid #4f81e0;
                }
              }

              .border-animation {
                animation: borderAnimation 3s forwards;
                border: 4px solid transparent;
              }
            `}</style>
          </div>
        )}
      </div> */}

      <Footer/>
    </div>
  );
};

export default Contact;