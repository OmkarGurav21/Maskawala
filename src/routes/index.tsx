import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Coffee,
} from "lucide-react";
import { SteamCursor } from "@/components/SteamCursor";

import heroImg from "@/assets/hero.jpg";
import chaiImg from "@/assets/chai.jpg";
import bunmaskaImg from "@/assets/bunmaska.jpg";
import keemapavImg from "@/assets/keemapav.jpg";
import dhansakImg from "@/assets/dhansak.jpg";
import kejriwalImg from "@/assets/kejriwal.jpg";
import cheesecakeImg from "@/assets/cheesecake.jpg";
import interior1 from "@/assets/interior1.jpg";
import interior2 from "@/assets/interior2.jpg";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maskawala & Co. — Pune's Heritage Irani Café | Bun Maska & Chai" },
      {
        name: "description",
        content:
          "Step into Pune's most loved Irani café. Authentic Irani Chai, Bun Maska, Keema Pav, Dhansak and Eggs Kejriwal in Kothrud & Baner. Where every cup tells a story.",
      },
      { name: "keywords", content: "Irani Cafe Pune, Bun Maska Pune, Irani Chai Pune, Cafe in Kothrud, Cafe in Baner, Parsi Restaurant Pune, Keema Pav Pune" },
      { property: "og:title", content: "Maskawala & Co. — Heritage Irani Café in Pune" },
      { property: "og:description", content: "Where heritage, flavor, and conversations come together." },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

/* ─────────── NAVIGATION ─────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#story", label: "Story" },
    { href: "#menu", label: "Menu" },
    { href: "#experience", label: "Experience" },
    { href: "#gallery", label: "Gallery" },
    { href: "#locations", label: "Visit" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#143025]/95 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between text-cream">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl md:text-[26px] tracking-tight">
            Maskawala
          </span>
          <span className="text-gold font-serif-display italic text-xl">& Co.</span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[12px] uppercase tracking-[0.22em] font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="story-link hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+919999999999"
          className="hidden md:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-gold hover:text-cream transition-colors"
        >
          <Phone className="w-3.5 h-3.5" /> Reserve
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-cream transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-6 h-px bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-cream transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#143025] overflow-hidden"
          >
            <div className="px-6 py-8 space-y-5 text-cream">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-display tracking-wide"
                >
                  {l.label}
                </a>
              ))}
              <div className="brass-rule my-4" />
              <a href="tel:+919999999999" className="block text-gold uppercase tracking-[0.22em] text-sm">
                Call to reserve
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ─────────── HERO ─────────── */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen w-full overflow-hidden bg-charcoal">
      {/* Background image with slow pan */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <div className="absolute inset-0 animate-slow-pan">
          <img
            src={heroImg}
            alt="Vintage Irani café interior at Maskawala & Co. with steaming chai and bun maska"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1d16]/70 via-[#0c1d16]/40 to-[#0c1d16]/85" />
        <div className="absolute inset-0 texture-grain" />
      </motion.div>

      {/* Floating dust particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="dust-particle"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Steam plumes anchored bottom center */}
      <div className="absolute left-1/2 bottom-[18%] -translate-x-1/2 pointer-events-none hidden md:block">
        <span className="steam-plume" style={{ left: "0", bottom: "0", animationDelay: "0s" }} />
        <span className="steam-plume" style={{ left: "-14px", bottom: "0", animationDelay: "1.4s" }} />
        <span className="steam-plume" style={{ left: "14px", bottom: "0", animationDelay: "2.8s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 text-cream">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="eyebrow text-gold mb-8"
        >
          Est. Pune · Irani Café
        </motion.span>

        <h1 className="font-display text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[84px] max-w-5xl">
          {"Where Every Cup".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.7 + i * 0.18, ease: [0.2, 0.7, 0.2, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 1.3 }}
            className="italic font-serif-display text-gold-soft inline-block"
          >
            Tells a Story.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-8 max-w-xl text-base md:text-[17px] leading-relaxed text-cream/80 font-light"
        >
          Experience Pune's most loved Irani café — where heritage, flavor and
          unhurried conversations come together over chai and bun maska.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.95 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#menu" className="btn-gold">
            Explore Menu <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#locations" className="btn-ghost-gold">
            Visit Us
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.3 }}
          className="absolute bottom-10 inset-x-0 px-6"
        >
          <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center border-t border-cream/20 pt-6">
            {[
              { n: "02", l: "Locations" },
              { n: "10K+", l: "Cups Served" },
              { n: "100%", l: "Authentic Irani" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-gold text-2xl md:text-3xl">{s.n}</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-cream/70 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── REUSABLE REVEAL ─────────── */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-12">
      <div className="brass-rule w-24" />
      <Coffee className="w-4 h-4 text-gold" />
      <div className="brass-rule w-24" />
    </div>
  );
}

/* ─────────── STORY / TIMELINE ─────────── */

function Story() {
  const moments = [
    { year: "1900s", title: "Bombay's First Cafés", body: "Persian immigrants opened the city's first Irani cafés — quiet rooms where strangers became regulars over a glass of chai." },
    { year: "1950s", title: "The Golden Era", body: "Marble tables, bentwood chairs and brass fans. Cafés became Bombay's living room — for poets, taxi drivers and film stars alike." },
    { year: "2019", title: "Maskawala & Co. Begins", body: "Three friends in Pune set out to keep the warmth, the recipes and the unhurried mornings alive. Maskawala & Co. opens in Kothrud." },
    { year: "Today", title: "Two Homes, One Soul", body: "Kothrud and Baner. The bun is still buttered by hand. The chai is still poured slow. The story keeps brewing." },
  ];

  return (
    <section id="story" className="paper-bg texture-grain py-28 md:py-40 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Heritage</span>
            <h2 className="font-display text-4xl md:text-6xl mt-6 text-emerald">
              Born From <em className="font-serif-display text-gold not-italic md:italic">Tradition</em>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-charcoal/70 leading-relaxed">
              For over a century, Irani cafés have been a quiet corner of the
              subcontinent. We carry that warmth, one cup at a time.
            </p>
          </div>
        </Reveal>

        <Divider />

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold to-gold/0"
          />

          <div className="space-y-16 md:space-y-24">
            {moments.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.1 }}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-16 items-center ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="font-display italic text-gold text-2xl">{m.year}</div>
                  <h3 className="font-display text-2xl md:text-3xl mt-2 text-emerald">{m.title}</h3>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">{m.body}</p>
                </div>
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold ring-4 ring-cream" />
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── SIGNATURE DELIGHTS ─────────── */

const dishes = [
  { name: "Irani Chai", img: chaiImg, desc: "Slow-brewed, kettle-poured, served scorching in a cutting glass.", badge: true },
  { name: "Bun Maska", img: bunmaskaImg, desc: "A soft pillowy bun, split open and crowned with a slab of cold butter.", badge: true },
  { name: "Keema Pav", img: keemapavImg, desc: "Slow-cooked mutton mince with our heritage Parsi masala, fresh pav.", badge: true },
  { name: "Dhansak", img: dhansakImg, desc: "The Sunday Parsi classic — lentils, mutton and caramelised brown rice.", badge: false },
  { name: "Eggs Kejriwal", img: kejriwalImg, desc: "Toast, melted cheese, green chili and a sunny side egg on top.", badge: false },
  { name: "Cheesecake", img: cheesecakeImg, desc: "Baked in-house. Dense, creamy, finished with seasonal compote.", badge: false },
];

function Menu() {
  return (
    <section id="menu" className="bg-emerald text-cream py-28 md:py-40 px-6 texture-grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">The Menu</span>
            <h2 className="font-display text-4xl md:text-6xl mt-6">
              Signature <em className="font-serif-display text-gold not-italic md:italic">Delights</em>
            </h2>
            <p className="mt-6 max-w-lg mx-auto text-cream/70 leading-relaxed">
              Each dish, a quiet inheritance. Made the way it has always been made.
            </p>
          </div>
        </Reveal>

        <Divider />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mt-8">
          {dishes.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#143025] border border-gold/20 overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1d16]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-gold/20 to-transparent mix-blend-overlay" />
                {d.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.22em] bg-gold text-charcoal font-medium">
                    Signature
                  </span>
                )}
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl">{d.name}</h3>
                <p className="mt-3 text-cream/70 text-sm leading-relaxed">{d.desc}</p>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all duration-700 pointer-events-none" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── EXPERIENCE ─────────── */

function Experience() {
  const points = [
    { t: "Authentic Recipes", d: "Family hand-me-downs, untouched by trends." },
    { t: "Heritage Ambience", d: "Marble tables, brass details, slow afternoons." },
    { t: "Fresh Ingredients", d: "Sourced daily. The bun is baked the same morning." },
    { t: "Family Atmosphere", d: "Strangers welcome. Regulars become family." },
    { t: "Affordable Luxury", d: "Heritage hospitality without the heritage price tag." },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="experience" className="paper-bg py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 md:gap-24 items-center">
        <Reveal>
          <div ref={ref} className="relative arch-mask aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl">
            <motion.img
              src={interior1}
              alt="Vintage interior of Maskawala & Co."
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ y, scale: 1.15 }}
            />
            <div className="absolute inset-0 ring-1 ring-gold/40 ring-inset arch-mask pointer-events-none" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">The Experience</span>
            <h2 className="font-display text-4xl md:text-5xl mt-6 text-emerald">
              Sit a while. <br />
              <em className="font-serif-display text-gold not-italic md:italic">Let the day slow.</em>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-7">
            {points.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex gap-5 border-b border-emerald/15 pb-6"
              >
                <span className="font-display italic text-gold text-2xl mt-1 w-10">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl text-emerald">{p.t}</h3>
                  <p className="text-charcoal/70 mt-1 leading-relaxed">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── GALLERY ─────────── */

const galleryImages = [
  { src: interior1, alt: "Café interior with marble tables and brass fans", h: "tall" },
  { src: chaiImg, alt: "Cutting chai in a glass", h: "short" },
  { src: bunmaskaImg, alt: "Bun maska with butter", h: "med" },
  { src: gallery1, alt: "A guest enjoying chai", h: "tall" },
  { src: keemapavImg, alt: "Keema pav plate", h: "short" },
  { src: interior2, alt: "Vintage clocks and brass detail", h: "tall" },
  { src: kejriwalImg, alt: "Eggs Kejriwal on vintage china", h: "med" },
  { src: gallery2, alt: "Vintage Irani café signboard", h: "short" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const heightMap: Record<string, string> = {
    short: "h-56 md:h-64",
    med: "h-72 md:h-80",
    tall: "h-80 md:h-96",
  };

  return (
    <section id="gallery" className="bg-cream py-28 md:py-40 px-6 texture-grain">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Moments</span>
            <h2 className="font-display text-4xl md:text-6xl mt-6 text-emerald">
              A Glimpse <em className="font-serif-display text-gold md:italic not-italic">Inside</em>
            </h2>
          </div>
        </Reveal>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 mt-16 space-y-4 md:space-y-6">
          {galleryImages.map((g, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08 }}
              className={`relative w-full overflow-hidden group block ${heightMap[g.h]} mb-4 md:mb-6 break-inside-avoid`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald/0 group-hover:bg-emerald/30 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-cream text-sm font-display">{g.alt}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>
            <button
              className="absolute left-4 md:left-10 text-cream"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((p) => (p === null ? 0 : (p - 1 + galleryImages.length) % galleryImages.length));
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 md:right-10 text-cream"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((p) => (p === null ? 0 : (p + 1) % galleryImages.length));
              }}
              aria-label="Next"
            >
              <ChevronRight className="w-9 h-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─────────── LOCATIONS ─────────── */

const locations = [
  {
    name: "Kothrud",
    address: "Survey 12/3B, Plot 2, Shop 2, Saket Housing Society, Karve Road, Pune",
    phone: "+91 99999 99999",
    hours: "8:00 AM – 11:30 PM",
    map: "https://maps.google.com/?q=Saket+Housing+Society+Karve+Road+Pune",
  },
  {
    name: "Baner",
    address: "Akonni Center, Lalit Estate, Baner, Pune",
    phone: "+91 99999 99998",
    hours: "8:00 AM – 11:30 PM",
    map: "https://maps.google.com/?q=Akonni+Center+Lalit+Estate+Baner+Pune",
  },
];

function Locations() {
  return (
    <section id="locations" className="bg-cream paper-bg py-28 md:py-40 px-6 texture-grain">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Visit Us</span>
            <h2 className="font-display text-4xl md:text-6xl mt-6 text-emerald">
              Two Homes, <em className="font-serif-display text-gold md:italic not-italic">One Soul</em>
            </h2>
          </div>
        </Reveal>

        <Divider />

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {locations.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="bg-card border border-emerald/15 p-8 md:p-10 relative group hover:border-gold/60 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/40" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gold/40" />

              <span className="eyebrow">Pune</span>
              <h3 className="font-display text-4xl md:text-5xl mt-4 text-emerald">{l.name}</h3>

              <div className="mt-8 space-y-4 text-charcoal/80">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-gold shrink-0" />
                  <p className="leading-relaxed">{l.address}</p>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-4 h-4 mt-1 text-gold shrink-0" />
                  <p>{l.hours}</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 mt-1 text-gold shrink-0" />
                  <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="story-link">{l.phone}</a>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={l.map} target="_blank" rel="noopener noreferrer" className="btn-gold !py-3 !px-5 !text-[11px]">
                  Directions <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="btn-gold !py-3 !px-5 !text-[11px] !bg-transparent !text-emerald !border-emerald hover:!bg-emerald hover:!text-cream">
                  Call
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── TESTIMONIALS ─────────── */

const testimonials = [
  { name: "Aarti S.", quote: "The bun maska tastes exactly like the one my grandfather used to bring home from Bombay. Pure nostalgia.", where: "Kothrud" },
  { name: "Rohan M.", quote: "Slow afternoons, perfect chai, and a corner table that felt like ours from the first visit.", where: "Baner" },
  { name: "Farzana B.", quote: "Finally, a Parsi café in Pune that gets the Dhansak right. The ambience is the real luxury.", where: "Kothrud" },
  { name: "Vikram J.", quote: "Eggs Kejriwal here is unreal. Brass fans, marble tables, the works. It's a small piece of old Bombay.", where: "Baner" },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-emerald-deep text-cream py-28 md:py-36 px-6 texture-grain relative">
      <div className="max-w-3xl mx-auto text-center">
        <span className="eyebrow">Customer Love</span>
        <div className="flex justify-center gap-1 mt-8 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        <div className="relative mt-10 min-h-[200px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 20, rotateZ: -1 }}
              animate={{ opacity: 1, y: 0, rotateZ: 0 }}
              exit={{ opacity: 0, y: -20, rotateZ: 1 }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="font-serif-display italic text-2xl md:text-[32px] leading-snug">
                "{testimonials[idx].quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-[0.22em] text-gold">
                {testimonials[idx].name} · {testimonials[idx].where}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`w-8 h-px transition-all ${i === idx ? "bg-gold w-12" : "bg-cream/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── INSTAGRAM ─────────── */

function InstagramSection() {
  const posts = [bunmaskaImg, chaiImg, interior1, kejriwalImg, gallery2, dhansakImg];
  return (
    <section className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow">@maskawalaco</span>
          <h2 className="font-display text-3xl md:text-5xl mt-6 text-emerald">
            Follow the <em className="font-serif-display text-gold md:italic not-italic">Steam Trail</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3 mt-12">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="relative aspect-square overflow-hidden group block"
            >
              <img src={p} alt="Instagram post" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-emerald/0 group-hover:bg-emerald/70 transition-colors duration-500 flex items-center justify-center">
                <Instagram className="w-7 h-7 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── CTA ─────────── */

function CTA() {
  return (
    <section className="relative bg-emerald text-cream py-32 md:py-44 px-6 overflow-hidden texture-grain">
      <div className="absolute inset-0 opacity-30">
        <img src={interior2} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald via-emerald/85 to-emerald" />
      </div>

      {/* slow steam */}
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 pointer-events-none hidden md:block">
        <span className="steam-plume" style={{ animationDelay: "0s" }} />
        <span className="steam-plume" style={{ left: "-18px", animationDelay: "1.8s" }} />
        <span className="steam-plume" style={{ left: "18px", animationDelay: "3.2s" }} />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow">An Invitation</span>
        </Reveal>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-8 leading-[1.05]">
          {["Pull Up A Chair.", "The Chai Is Ready."].map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + i * 0.3 }}
              className="block"
            >
              {i === 1 ? <em className="font-serif-display text-gold not-italic md:italic">{line}</em> : line}
            </motion.span>
          ))}
        </h2>

        <Reveal delay={0.6}>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#locations" className="btn-gold">
              Visit Today <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+919999999999" className="btn-ghost-gold">
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── FOOTER ─────────── */

function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 pt-20 pb-10 px-6 texture-grain">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="font-display text-2xl text-cream">
              Maskawala <span className="text-gold font-serif-display italic">& Co.</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60 font-serif-display italic">
              Where every cup tells a story.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream/60 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="text-cream/60 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">Locations</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>Karve Road, Kothrud</li>
              <li>Lalit Estate, Baner</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">Open Daily</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>8:00 AM – 11:30 PM</li>
              <li className="font-serif-display italic text-cream/50">Breakfast all day</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">Reach Us</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><a href="tel:+919999999999" className="story-link">+91 99999 99999</a></li>
              <li><a href="mailto:hello@maskawala.co" className="story-link">hello@maskawala.co</a></li>
              <li className="flex gap-3 pt-2">
                <a href="#" className="story-link text-gold text-xs uppercase tracking-[0.2em]">Swiggy</a>
                <span className="text-cream/30">·</span>
                <a href="#" className="story-link text-gold text-xs uppercase tracking-[0.2em]">Zomato</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="brass-rule mt-16 mb-6" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Maskawala & Co. All rights reserved.</p>
          <p className="font-serif-display italic">A small ode to the Irani cafés of Bombay.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────── PAGE ─────────── */

function Home() {
  return (
    <main className="bg-cream text-charcoal overflow-x-hidden">
      <SteamCursor />
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Experience />
      <Gallery />
      <Locations />
      <Testimonials />
      <InstagramSection />
      <CTA />
      <Footer />
    </main>
  );
}
