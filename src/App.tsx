/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, ShieldCheck, Truck, Headphones, Menu, X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// --- Data ---
const produtos = [
  {
    id: 1,
    nome: "Aura Silk - Massageador Premium",
    precoFormatado: "R$ 289,90",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    checkoutUrlYampi: "#",
    tag: "Best Seller"
  },
  {
    id: 2,
    nome: "Luna Mist - Difusor de Bem-estar",
    precoFormatado: "R$ 197,00",
    imageUrl: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop",
    checkoutUrlYampi: "#",
    tag: "Novo"
  },
  {
    id: 3,
    nome: "Velvet Touch - Óleo Corporal",
    precoFormatado: "R$ 89,90",
    imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
    checkoutUrlYampi: "#",
    tag: "Essencial"
  }
];

const kitsEspeciais = [
  {
    id: 101,
    nome: "Kit Noite de Gala",
    precoFormatado: "R$ 549,90",
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    checkoutUrlYampi: "#",
    tag: "Kit Luxo"
  },
  {
    id: 102,
    nome: "Duo Sensorial",
    precoFormatado: "R$ 329,00",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    checkoutUrlYampi: "#",
    tag: "Mais Vendido"
  },
  {
    id: 103,
    nome: "Ritual de Autocuidado",
    precoFormatado: "R$ 419,00",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    checkoutUrlYampi: "#",
    tag: "Exclusivo"
  }
];

const diferenciais = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Frete Discreto",
    description: "Embalagens sem identificação para sua total privacidade."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Pagamento Seguro",
    description: "Transações criptografadas com as melhores tecnologias."
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Suporte Premium",
    description: "Atendimento humanizado e especializado para você."
  }
];

const sliderImages = [
  "https://prazer-sense.sirv.com/Loja%20Online%20Sense/(1000x1500px)%20img-connect-1-2.jpg",
  "https://prazer-sense.sirv.com/Loja%20Online%20Sense/(1000x1500px)%20img-sugar-1-2.jpg",
  "https://prazer-sense.sirv.com/Loja%20Online%20Sense/(1000x1500px)%20img-wave-1-2.jpg"
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full glass-nav z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Left */}
        <div className="flex-shrink-0">
          <img 
            src="https://prazer-sense.sirv.com/Loja%20Online%20Sense/(575x230px)-logotipo%20copiar-2.png" 
            alt="SenseMagic Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Menu Center */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide text-gray-400">
          <a href="#produtos" className="hover:text-white transition-colors uppercase">Produtos</a>
          <a href="#kits" className="hover:text-white transition-colors uppercase">Kits Especiais</a>
          <a href="#quem-somos" className="hover:text-white transition-colors uppercase">Quem somos</a>
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-surface border-b border-white/5 px-6 py-8 flex flex-col gap-6"
          >
            <a href="#produtos" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white">Produtos</a>
            <a href="#kits" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white">Kits Especiais</a>
            <a href="#quem-somos" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white">Quem somos</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-texture">
      <div className="premium-glow -top-40 -left-40 opacity-80" />
      <div className="premium-glow bottom-0 right-0 opacity-40 bg-white/5" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)' }} />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-2 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 order-1 text-center md:text-left"
        >
          <span className="hidden md:inline-block px-4 py-1.5 bg-brand-pink/10 text-brand-pink text-xs font-bold tracking-widest uppercase rounded-full mb-8 border border-brand-pink/20">
            Experiência Sensorial
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-[1] mb-8 tracking-tighter font-serif-premium italic">
            O Luxo do <br />
            <span className="text-brand-pink not-italic">Seu Prazer.</span>
          </h1>
          <p className="text-m text-gray-400 max-w-md mx-auto md:mx-0 mb-10 leading-relaxed font-medium">
            Curadoria exclusiva de bem-estar e sofisticação. Descubra novas sensações com a máxima elegância e discrição.
          </p>
          <div className="hidden md:flex flex-col sm:flex-row gap-6">
            <a 
              href="#produtos"
              className="px-10 py-5 bg-brand-pink text-white font-bold rounded-full hover:bg-brand-pink-hover transition-all flex items-center justify-center gap-3 group shadow-xl shadow-brand-pink/20"
            >
              Explorar agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <div className="relative group order-2">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden premium-shadow border border-white/5 relative bg-dark-surface">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={current}
                src={sliderImages[current]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.6 },
                  scale: { duration: 1, ease: [0.16, 1, 0.3, 1] }
                }}
                alt="SenseMagic Experience"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {/* Slider Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <button onClick={prev} className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={next} className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {sliderImages.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${current === i ? "w-8 bg-brand-pink" : "w-2 bg-white/30"}`}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile Button - Below Slider */}
          <div className="mt-12 md:hidden flex flex-col gap-6">
            <a 
              href="#produtos"
              className="px-10 py-5 bg-brand-pink text-white font-bold rounded-full hover:bg-brand-pink-hover transition-all flex items-center justify-center gap-3 group shadow-xl shadow-brand-pink/20"
            >
              Explorar agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-pink/10 rounded-full blur-[100px] -z-10" />
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ produto }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-dark-surface rounded-3xl overflow-hidden border border-white/5 premium-shadow-hover relative"
    >
      <div className="absolute inset-0 bg-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      <div className="relative z-10">
        <div className="relative aspect-square overflow-hidden bg-black/40">
          <img 
            src={produto.imageUrl} 
            alt={produto.nome}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-5 left-5">
            <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10 text-white">
              {produto.tag}
            </span>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-pink transition-colors">{produto.nome}</h3>
          <div className="flex items-center justify-between mt-6">
            <span className="text-2xl font-semibold text-white/90">{produto.precoFormatado}</span>
            <a 
              href={produto.checkoutUrlYampi}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-pink text-white text-sm font-bold rounded-full hover:bg-brand-pink-hover transition-all shadow-lg shadow-brand-pink/20"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PrazerPremium = () => (
  <section id="produtos" className="py-32 bg-dark-bg relative overflow-hidden">
    <div className="premium-glow -top-40 -right-40 opacity-80" />
    <div className="premium-glow -bottom-40 -left-40 opacity-30 bg-white/5" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)' }} />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight font-serif-premium italic">Prazer <span className="text-brand-pink not-italic">Premium</span></h2>
          <p className="text-gray-400 max-w-xl text-lg font-medium">
            Nossa curadoria exclusiva de produtos que unem tecnologia de ponta e design ergonômico para o seu máximo prazer.
          </p>
        </div>
        <a href="#" className="text-brand-pink font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-sm tracking-widest">
          Ver Coleção Completa <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
    {/* Background Texture */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-pink/5 blur-[150px] -z-10" />
  </section>
);

const AboutUs = () => (
  <section id="quem-somos" className="py-32 bg-dark-surface relative overflow-hidden">
    <div className="premium-glow -top-40 -right-40 opacity-50" />
    <div className="premium-glow -bottom-40 -left-40 opacity-20 bg-white/5" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)' }} />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden premium-shadow border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop" 
              alt="About SenseMagic" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-pink/20 rounded-full blur-[80px]" />
        </div>
        <div>
          <span className="text-brand-pink font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Nossa Essência</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight font-serif-premium italic">Quem Somos</h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
            <p>
              A <span className="text-white">SenseMagic</span> nasceu da vontade de democratizar o prazer com sofisticação. Acreditamos que o bem-estar sexual é um pilar fundamental da saúde e da felicidade.
            </p>
            <p>
              Nossa missão é oferecer uma experiência de compra segura, discreta e luxuosa, selecionando apenas o que há de melhor no mercado global de toys e cosméticos sensoriais.
            </p>
            <p>
              Cada detalhe, da curadoria à entrega, é pensado para que você se sinta respeitada, valorizada e pronta para explorar o seu melhor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const KitsEspeciais = () => (
  <section id="kits" className="py-32 bg-dark-bg bg-texture relative overflow-hidden">
    <div className="premium-glow -bottom-40 -right-40 opacity-70" />
    <div className="premium-glow -top-40 -left-40 opacity-30 bg-white/5" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)' }} />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight font-serif-premium italic">Kits <span className="text-brand-pink not-italic">Especiais</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
          Combinações perfeitas criadas por nossos especialistas para elevar sua experiência a um novo patamar de sensações.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {kitsEspeciais.map((kit) => (
          <ProductCard key={kit.id} produto={kit} />
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-32 bg-dark-surface border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-16">
        {diferenciais.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 bg-white/5 text-brand-pink rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-brand-pink group-hover:text-white transition-all duration-500 border border-white/5 group-hover:scale-110">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed font-medium">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white py-32 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-20 mb-24">
        <div className="col-span-2">
          <img 
            src="https://prazer-sense.sirv.com/Loja%20Online%20Sense/(575x230px)-logotipo%20copiar-2.png" 
            alt="SenseMagic Logo White" 
            className="h-12 md:h-16 w-auto object-contain mb-10"
            referrerPolicy="no-referrer"
          />
          <p className="text-gray-400 max-w-sm leading-relaxed text-lg font-medium">
            Sua boutique premium de bem-estar. Qualidade, discrição e sofisticação 
            em cada detalhe da sua jornada de autodescoberta.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-10 uppercase text-xs tracking-[0.3em] text-brand-pink">Navegação</h4>
          <ul className="space-y-6 text-sm font-semibold text-gray-400">
            <li><a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
            <li><a href="#produtos" className="hover:text-white transition-colors">Produtos</a></li>
            <li><a href="#kits" className="hover:text-white transition-colors">Kits Especiais</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-10 uppercase text-xs tracking-[0.3em] text-brand-pink">Suporte</h4>
          <ul className="space-y-6 text-sm font-semibold text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold tracking-widest text-gray-500 uppercase">
        <p>© 2026 SenseMagic. Todos os direitos reservados.</p>
        <div className="flex gap-10">
          <span>CNPJ: 00.000.000/0000-00</span>
          <span className="text-brand-pink">Feito com Paixão</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-pink selection:text-white bg-dark-bg bg-texture">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/30 to-transparent" />
        </div>
        <PrazerPremium />
        <AboutUs />
        <KitsEspeciais />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}
