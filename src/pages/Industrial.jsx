import { Link } from 'react-router-dom';
import Footer from './Footer';

const Industrial = () => {
  const benefits = [
    {
      number: '01',
      title: 'Más visibilidad en cada cruce',
      description:
        'Proyectamos sendas y zonas de seguridad directamente sobre el piso para que peatones y autoelevadores compartan el espacio con referencias claras.',
    },
    {
      number: '02',
      title: 'Una demarcación que no se desgasta',
      description:
        'La señalización de luz no se despinta con las ruedas, la humedad ni la limpieza diaria. El patrón permanece visible mientras el equipo está encendido.',
    },
    {
      number: '03',
      title: 'Instalación pensada para tu planta',
      description:
        'Relevamos alturas, recorridos y condiciones de iluminación para definir una solución a medida, sin obras ni interrupciones en la operación.',
    },
  ];

  return (
    <>
      <main className="bg-[#101725] text-white">
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,rgba(255,190,0,0.12),transparent_35%),linear-gradient(110deg,#101725_35%,#1d2630_100%)]" />
          <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">
                Seguridad industrial · Firefly
              </p>
              <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Sendas peatonales
                <span className="block text-[#ffc400]">que no se borran.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Convertimos el piso de tu planta en una guía visible. Proyectores LED de alta
                definición marcan cruces, pasillos y zonas de riesgo sin pintura, cintas ni
                contacto con el tránsito.
              </p>
              <Link
                to="/contact"
                className="mt-9 inline-flex items-center rounded-full bg-[#ffc400] px-7 py-3.5 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Pedí un relevamiento <span className="ml-3 text-xl" aria-hidden="true">→</span>
              </Link>
            </div>

            <div
              className="relative mx-auto flex h-[330px] w-full max-w-[540px] items-end justify-center overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,#29323a,#151b24_65%)] p-8 shadow-2xl sm:h-[390px]"
              role="img"
              aria-label="Representación de una senda peatonal proyectada con luz en una planta industrial"
            >
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:54px_54px]" />
              <div className="absolute left-1/2 top-10 h-8 w-20 -translate-x-1/2 rounded-lg border-2 border-orange-400 bg-slate-700 shadow-[0_0_24px_rgba(255,155,0,.25)]" />
              <div className="absolute left-1/2 top-[70px] h-[190px] w-[75%] -translate-x-1/2 bg-yellow-400/20 [clip-path:polygon(47%_0,53%_0,100%_100%,0_100%)]" />
              <div className="relative z-10 flex h-28 w-[85%] items-stretch justify-center gap-2 sm:gap-3">
                {[0, 1, 2, 3, 4, 5].map((stripe) => (
                  <span
                    key={stripe}
                    className="w-full -skew-x-12 bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-[0_0_18px_rgba(255,196,0,.35)]"
                  />
                ))}
              </div>
              <span className="absolute bottom-4 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs font-medium tracking-wide text-slate-300">
                Proyección LED · sin contacto con el piso
              </span>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#151d2b]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 px-6 md:grid-cols-4 md:divide-y-0 md:px-10">
            {[
              ['+20', 'años de experiencia en iluminación'],
              ['0', 'reparaciones de pintura en la zona proyectada'],
              ['24/7', 'visibilidad durante cada turno'],
              ['100%', 'sin contacto con el piso'],
            ].map(([value, label]) => (
              <div key={value} className="px-5 py-8 md:px-8 md:py-10">
                <p className="text-4xl font-black text-[#ffc400] md:text-5xl">{value}</p>
                <p className="mt-2 max-w-[210px] text-sm leading-6 text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f3f4f6] text-slate-900">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-orange-700">
                El desafío en planta
              </p>
              <h2 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">
                La pintura se gasta. El riesgo, no.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                El tránsito intenso, la humedad y las tareas de limpieza deterioran la
                demarcación tradicional. Cuando una senda deja de verse, personas y máquinas
                vuelven a compartir el mismo espacio sin una referencia clara.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                ['Desgaste por tránsito', 'Ruedas, pallets y suciedad borran la pintura y despegan las cintas.'],
                ['Pisos exigentes', 'La humedad, el aceite y las superficies irregulares reducen la adherencia.'],
                ['Paradas y mantenimiento', 'Repintar implica bloquear sectores y volver a intervenir la operación.'],
              ].map(([title, description]) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">
              La solución
            </p>
            <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
              Demarcación hecha con luz, en tres pasos.
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article key={benefit.number} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                  <p className="text-3xl font-black text-[#ffc400]">{benefit.number}</p>
                  <h3 className="mt-5 text-xl font-extrabold">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{benefit.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <h3 className="text-2xl font-black">¿Lo vemos en tu planta?</h3>
                <p className="mt-2 text-slate-300">Analizamos el espacio y te recomendamos el patrón adecuado.</p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 rounded-full bg-[#ffc400] px-6 py-3 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Industrial;
