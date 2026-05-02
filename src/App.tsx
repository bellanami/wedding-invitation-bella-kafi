/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { MapPin, Clock } from "lucide-react";
import { useRef } from "react";

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const coupleY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const fadeIn = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-10% 0px -10% 0px" },
    transition: { 
      duration: 1.2, 
      ease: [0.215, 0.61, 0.355, 1.0] // Smooth cubic-bezier (easeOutCubic)
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfdfb] overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-start pt-16 md:pt-20 px-6 text-center overflow-hidden">
        {/* Background Layer */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
          <img 
            src="/src/images/Background.png" 
            alt="Background" 
            className="w-full h-full object-cover object-center scale-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Couple Layer (Parallax) */}
        <motion.div 
          style={{ y: coupleY }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute inset-0 z-5 flex items-end justify-center"
        >
          <img 
            src="/src/images/Couple.png" 
            alt="Couple" 
            className="h-[80%] md:h-[90%] w-auto object-contain object-bottom translate-y-[40%] scale-120"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Content Overlay */}
        <motion.div 
          style={{ y: textY }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <p className="tracking-[0.3em] text-[10px] md:text-xs font-medium text-[#1c2e1c] mb-2 uppercase">Undangan Pernikahan</p>
          <h1 className="font-serif text-5xl md:text-8xl text-[#1c2e1c] mb-1 leading-none">Bella & Kafi</h1>
          <p className="font-serif text-lg md:text-xl text-[#1c2e1c] tracking-[0.4em] italic">30 . 05 . 2026</p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="pt-20 pb-8 px-6 text-center max-w-3xl mx-auto">
        <motion.div {...fadeIn}>
          <div className="mb-8">
            <img 
              src="/src/images/bismillah.png" 
              alt="Bismillah" 
              className="h-16 mx-auto opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-sage-800 italic">
            Dengan penuh rasa syukur kepada Allah dan penuh sukacita, kami mohon doa restu pada acara pernikahan putra putri kami:
          </p>
        </motion.div>
      </section>

      {/* Bride & Groom Section */}
      <section className="pt-8 pb-10 px-6 max-w-5xl mx-auto space-y-16">
        {/* Bride */}
        <motion.div 
          {...fadeIn}
          className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-sm border border-sage-100"
        >
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-sage-400 mb-2 block italic">Bride</span>
            <h2 className="font-serif text-3xl md:text-4xl text-sage-900 mb-4 italic">Bella Namira Syaidatulnissa</h2>
            <p className="text-sage-600 text-sm md:text-base">
              Putri dari Bapak Trisnadi <br /> & Ibu Ira Silviawati
            </p>
          </div>
          <div className="w-48 h-64 md:w-64 md:h-80 overflow-hidden rounded-2xl shadow-lg order-1 md:order-2">
            <img 
              src="/src/images/Profile-Bella.png" 
              alt="Bella Namira" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Groom */}
        <motion.div 
          {...fadeIn}
          className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-sm border border-sage-100"
        >
          <div className="w-48 h-64 md:w-64 md:h-80 overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="/src/images/Profile-Kafi.png" 
              alt="Muhammad Sir Kafi" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-sage-400 mb-2 block italic">Groom</span>
            <h2 className="font-serif text-3xl md:text-4xl text-sage-900 mb-4 italic">Muhammad Sir Kafi El Migwar</h2>
            <p className="text-sage-600 text-sm md:text-base">
              Putra dari Bapak Khairul As'ad <br /> & Ibu Yusniarti
            </p>
          </div>
        </motion.div>
      </section>

      {/* Event Details Section */}
      <section className="py-24 px-6 bg-sage-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p {...fadeIn} className="font-serif text-xl text-sage-800 mb-12 italic">
            Yang Insyaa Allah akan diselenggarakan pada:
          </motion.p>

          <motion.div 
            {...fadeIn}
            className="bg-sage-700 text-white p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden mb-8 text-left"
          >
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
              <img src="src/images/flower-bg.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h3 className="font-serif text-xl mb-1 italic">Sabtu</h3>
              <div className="text-3xl md:text-6xl font-serif font-bold mb-2">30 Mei 2026</div>
              <p className=" font-serif text-sage-200 tracking-widest text-sm italic">13 Dzulhijjah 1447 H</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-sage-100 p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-sage-200 text-left"
            >
              <h4 className="font-serif text-xl md:text-2xl text-sage-900 mb-2 italic">Akad</h4>
              <div className="flex items-center justify-start gap-1 md:gap-2 text-sage-700">
                <Clock size={16} className="md:w-[18px]" />
                <span className="font-medium text-sm md:text-base whitespace-nowrap">08:00 - Selesai</span>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="bg-sage-600 text-white p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-lg text-left"
            >
              <h4 className="font-serif text-xl md:text-2xl mb-2 italic">Resepsi</h4>
              <div className="flex items-center justify-start gap-1 md:gap-2 text-sage-100">
                <Clock size={16} className="md:w-[18px]" />
                <span className="font-medium text-sm md:text-base whitespace-nowrap">13:00 - 17:00</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6 text-center">
        <motion.div {...fadeIn} className="max-w-2xl mx-auto">
          <p className="text-sage-500 font-medium mb-4">Bertempat di:</p>
          <h2 className="font-serif text-3xl md:text-4xl text-sage-900 mb-8 leading-tight italic">
            Gedung Graha Korpri, <br /> Jl. Veteran, Pontianak
          </h2>
          <motion.a 
            href="https://maps.app.goo.gl/EefrgixSgrAqNKzaA" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-sage-800 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:bg-sage-900 transition-colors"
          >
            <MapPin size={20} />
            Lihat di Maps
          </motion.a>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32 px-6 bg-sage-900 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/floral-bg/1920/1080?blur=10" 
            alt="" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div {...fadeIn} className="relative z-10 max-w-3xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 italic">
            “Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).”
          </p>
          <p className="tracking-widest text-sage-300 uppercase text-sm">Adz-Dzariyyat: 49</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-sage-100">
        <p className="font-serif text-2xl text-sage-900 mb-2 italic">Bella & Kafi</p>
        <p className="text-sage-400 text-xs tracking-widest uppercase">© 2026 Wedding Invitation</p>
      </footer>
    </div>
  );
}
