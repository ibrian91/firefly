import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const industrialStats = [
  { target: 0, suffix: ' hs', label: 'Sin detener la planta', accessibleValue: '0 horas' },
  { target: 50000, prefix: '+', suffix: ' hs', label: 'Vida útil continua en entornos exigentes', accessibleValue: 'Más de 50.000 horas' },
  { target: 365, suffix: ' días', label: 'Señalización nítida sin repintado', accessibleValue: '365 días' },
  { target: 300, prefix: '+', suffix: '%', label: 'Más visibilidad que la pintura tradicional', accessibleValue: 'Más de 300 por ciento' },
];

const Industrial = () => {
  const videoSectionRef = useRef(null);
  const videoRef = useRef(null);
  const autoPlayAttemptedRef = useRef(false);
  const countersStartedRef = useRef(false);
  const [counterValues, setCounterValues] = useState(industrialStats.map(() => 0));
  const [needsPlaybackPermission, setNeedsPlaybackPermission] = useState(false);

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

  useEffect(() => {
    const section = videoSectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return undefined;

    let counterAnimationFrame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (!countersStartedRef.current) {
          countersStartedRef.current = true;
          const finalValues = industrialStats.map((stat) => stat.target);

          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setCounterValues(finalValues);
          } else {
            const startTime = performance.now();
            const duration = 2400;

            const animateCounters = (currentTime) => {
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const easedProgress = 1 - (1 - progress) ** 3;
              setCounterValues(finalValues.map((value) => Math.round(value * easedProgress)));

              if (progress < 1) {
                counterAnimationFrame = requestAnimationFrame(animateCounters);
              }
            };

            counterAnimationFrame = requestAnimationFrame(animateCounters);
          }
        }

        if (!autoPlayAttemptedRef.current) {
          autoPlayAttemptedRef.current = true;
          video.muted = false;
          video.play().then(
            () => setNeedsPlaybackPermission(false),
            () => setNeedsPlaybackPermission(true),
          );
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (counterAnimationFrame) cancelAnimationFrame(counterAnimationFrame);
    };
  }, []);

  const enableVideoPlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    try {
      await video.play();
      setNeedsPlaybackPermission(false);
    } catch {
      setNeedsPlaybackPermission(true);
    }
  };

  return (
    <>
      <main className="bg-[#101725] text-white">
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/videos/industrial-hero.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,23,37,0.96)_0%,rgba(16,23,37,0.84)_48%,rgba(16,23,37,0.46)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,23,37,0.55),transparent_45%)]" />
          <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 md:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">
                Señaletica Industrial · Firefly
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
                Contactá a un asesor <span className="ml-3 text-xl" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section
          ref={videoSectionRef}
          className="border-b border-white/10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,196,0,0.10),transparent_55%)] px-6 py-14 md:px-10 md:py-20"
        >
          <div className="mx-auto grid max-w-6xl items-center justify-items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="w-full max-w-2xl">
              <p className="mb-5 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">
                Beneficios de la señalización con luz
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industrialStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-yellow-400/40 sm:p-6"
                  >
                    <p
                      className="whitespace-nowrap text-2xl font-black text-[#ffc400] sm:text-3xl"
                      aria-label={stat.accessibleValue}
                    >
                      <span aria-hidden="true">
                        {stat.prefix ?? ''}
                        {counterValues[index].toLocaleString('es-AR')}
                        {stat.suffix}
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:justify-self-end">
              <video
                ref={videoRef}
                className="h-[380px] max-h-[70vh] w-auto max-w-full rounded-2xl border border-white/10 object-contain shadow-2xl sm:h-[440px]"
                controls
                playsInline
                preload="metadata"
                aria-label="Video de presentación de las soluciones industriales Firefly"
              >
                <source src="/videos/industrial-intro.mp4" type="video/mp4" />
                Tu navegador no puede reproducir este video.
              </video>
              {needsPlaybackPermission && (
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-slate-950/65 p-6 text-center">
                  <div>
                    <p className="mb-4 text-sm text-white">
                      El navegador requiere una interacción para reproducir el video con sonido.
                    </p>
                    <button
                      type="button"
                      onClick={enableVideoPlayback}
                      className="rounded-full bg-[#ffc400] px-5 py-3 font-bold text-slate-950 transition hover:bg-yellow-300"
                    >
                      Reproducir con sonido
                    </button>
                  </div>
                </div>
              )}
            </div>
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
