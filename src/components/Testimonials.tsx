import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "محمد عنده 'عين' مخرج شاطر، مش مجرد مونتير بيقص كليبات. حول فكرة الحملة لحاجة تانية خالص بروح سينمائية أبهرتنا كلنا.",
    name: "مروان إبراهيم",
    role: "Creative Director, Cairo Ads",
    project: "Social Media Campaign",
  },
  {
    quote: "أكتر حاجة عجبتني هي السرعة وفهمه للتفاصيل من أول مرة. قدر يلقط الـ 'vibe' اللي كنا محتاجينه للـ Vlog وطلع شغل عالمي.",
    name: "سلمى الشافعي",
    role: "Founder, Nile Content Studio",
    project: "Travel Vlog Series",
  },
  {
    quote: "السهل الممتع.. شغل المونتاج بتاعه في إعلان المنتج الجديد خلى الفيديو روح وحكاية، مش مجرد لقطات ورا بعض.",
    name: "كريم يحيى",
    role: "Marketing Manager, Tech-Masr",
    project: "Product Launch",
  },
  {
    quote: "ودنه في هندسة الصوت والمزيكا ممتازة، بيعرف يخليك تعيش جوه الفيديو. فعلاً من المواهب اللي هيكون ليها اسم كبير في المونتاج.",
    name: "ياسين منصور",
    role: "Music Video Director",
    project: "Music Video",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background/50" dir="rtl">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
         <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          className="text-center mb-16"

        >

          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-2 uppercase italic">&gt; Feedback</p>

          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">

            Client <span className="text-gradient-neon">Words</span>

          </h2>

        </motion.div>
        <div className="relative min-h-[350px] md:min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center w-full"
            >
              {/* Cinematic Quote mark */}
              <div className="font-display text-8xl text-primary/10 leading-none h-12 select-none italic">"</div>

              <p className="text-xl md:text-3xl text-foreground/90 leading-relaxed font-display max-w-3xl mx-auto mb-10 italic">
                {testimonials[current].quote}
              </p>

              <div className="space-y-2">
                <p className="font-display text-lg font-bold text-foreground">
                  {testimonials[current].name}
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-left" dir="ltr">
                   <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                    {testimonials[current].role}
                  </p>
                  <span className="hidden md:block w-1 h-1 bg-primary/40 rounded-full" />
                  <p className="font-mono text-[10px] text-primary tracking-[0.2em] font-semibold">
                    PROJECT: {testimonials[current].project.toUpperCase()}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Control Bar */}
        <div className="flex flex-col items-center gap-8 mt-16">
          <div className="flex items-center gap-8 flex-row-reverse">
            <button
              onClick={prev}
              className="group relative w-14 h-14 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-muted-foreground group-hover:text-primary">→</span>
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    i === current ? "w-10 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" : "w-3 bg-border hover:bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="group relative w-14 h-14 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 rounded-full overflow-hidden"
            >
               <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-muted-foreground group-hover:text-primary">←</span>
            </button>
          </div>
          
          <div className="font-mono text-[9px] text-muted-foreground/40 tracking-[0.5em] uppercase" dir="ltr">
             {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
