import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">LET'S COLLABORATE</p>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tight text-foreground mb-6">
            Ready to create<br />
            <span className="text-gradient-neon">something epic?</span>
          </h2>
          <a
            href="mailto:hello@cutstudio.com"
            className="inline-block px-10 py-4 border border-primary/30 text-primary font-mono text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-neon cursor-none"
          >
            START A PROJECT
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
          <span className="font-mono text-xs text-muted-foreground tracking-wider">
            © 2026 CUT.STUDIO — ALL RIGHTS RESERVED
          </span>
          <div className="flex gap-8">
            {["Instagram", "Vimeo", "Behance", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider cursor-none"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
