/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, ShieldCheck, Truck, Headphones, Menu, X, ArrowRight, ChevronLeft, ChevronRight, Check, Plus, Minus, BatteryCharging, Feather, Droplets } from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Types ---
type CartItem = {
  id: number | string;
  nome: string;
  precoFormatado: string;
  imagem: string;
  quantidade: number;
};

// --- Data ---
const produtos = [
  {
    id: 1,
    nome: "Sense Wave",
    precoFormatado: "R$ 99,00",
    imageUrl: "https://prazer-sense.sirv.com/Loja%20Online%20Sense/wave-product.jpg",
    checkoutUrlYampi: "#product-sense-wave",
    tag: "Mais vendido"
  },
  {
    id: 2,
    nome: "Sense Connect",
    precoFormatado: "R$ 129,90",
    imageUrl: "https://prazer-sense.sirv.com/Loja%20Online%20Sense/connect-product.jpg",
    checkoutUrlYampi: "#",
    tag: "Novo"
  },
  {
    id: 3,
    nome: "Sense Sugar",
    precoFormatado: "R$ 109,90",
    imageUrl: "https://prazer-sense.sirv.com/Loja%20Online%20Sense/sugar-product.jpg",
    checkoutUrlYampi: "#",
    tag: "Essencial"
  }
];

const kitsEspeciais = [
  {
    id: 101,
    nome: "Kit Iniciante",
    precoFormatado: "R$ 89,90",
    imageUrl: "https://prazer-sense.sirv.com/Loja%20Online%20Sense/kit-iniciante.png",
    checkoutUrlYampi: "#",
    tag: "Mais vendido"
  },
  {
    id: 102,
    nome: "Kit Sado",
    precoFormatado: "R$ 119,90",
    imageUrl: "https://prazer-sense.sirv.com/Loja%20Online%20Sense/kit-sado.png",
    checkoutUrlYampi: "#",
    tag: "Exclusivo"
  },
  {
    id: 103,
    nome: "Kit Cool",
    precoFormatado: "R$ 99,90",
    imageUrl: "https://prazer-sense.sirv.com/Loja%20Online%20Sense/kit-cool.png",
    checkoutUrlYampi: "#",
    tag: "Essencial"
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
          <a href="#">
            <img 
              src="https://prazer-sense.sirv.com/Loja%20Online%20Sense/(575x230px)-logotipo%20copiar-2.png" 
              alt="SenseMagic Logo" 
              className="h-10 md:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Desktop Menu Center */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide text-gray-400">
          <a href="#produtos" className="hover:text-white transition-colors uppercase">Produtos</a>
          <a href="#kits" className="hover:text-white transition-colors uppercase">Kits Especiais</a>
          <a href="#quem-somos" className="hover:text-white transition-colors uppercase">Quem somos</a>
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            className="p-2 hover:bg-white/5 rounded-full transition-colors relative"
            onClick={() => window.dispatchEvent(new CustomEvent('toggleCart'))}
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-brand-pink rounded-full" id="cart-badge" style={{ display: 'none' }}></span>
          </button>
        </div>

        {/* Mobile Toggle & Cart */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            className="p-2 text-white relative"
            onClick={() => window.dispatchEvent(new CustomEvent('toggleCart'))}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-brand-pink rounded-full" id="cart-badge-mobile" style={{ display: 'none' }}></span>
          </button>
          <button className="p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
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

const productWave = {
  images: [
    "https://prazer-sense.sirv.com/Loja%20Online%20Sense/Produtos/001.jpg",
    "https://prazer-sense.sirv.com/Loja%20Online%20Sense/Produtos/002.jpg",
    "https://prazer-sense.sirv.com/Loja%20Online%20Sense/Produtos/003.jpg",
    "https://prazer-sense.sirv.com/Loja%20Online%20Sense/Produtos/004.jpg"
  ],
  title: "Sense Wave",
  subtitle: "10 modos de vibração, potência sem igual e silêncio absoluto. Recarregável, discreto e feito pra te fazer bem.",
  tags: ["A prova d'água", "Recarregável", "Leve e potente"],
  price: "R$99",
  checkoutUrl: "https://sense-magic-toys.pay.yampi.com.br/r/DUFMA932PV",
  promoText: "Frete grátis acima de R$299",
  accordions: [
    { title: "O que torna especial?", content: "O Wave não é qualquer varinha, é o modelo mais vendido do mundo por um bom motivo. Feito com silicone de toque aveludado e carcaça ABS ultradurável, ele combina potência de verdade com um silêncio que só você vai saber. São 10 modos de vibração para você descobrir o que o seu corpo ama (de um jeito suave até aquele que faz esquecer o nome.)" },
    { title: "Como uso esse produto?", content: "Simples: carregue via USB (notebook, PC ou carregador de celular) e em 2 a 3 horas ele está pronto pra agir. Com 20 cm de comprimento e cabeça flexível que se adapta ao corpo, o Wave alcança exatamente onde você quer, seja para massagem relaxante ou estimulação intima. Escolha um dos 10 modos, encontre o seu favorito e aproveite." },
    { title: "Seus diferenciais", content: "Recarregável via USB, sem pilha, sem interrupção na hora errada. Silencioso de verdade, porque prazer discreto não precisa de explicação. Feito com silicone aveludado de toque suave, com 10 modos de vibração para você descobrir (e redescobrir) o que te dá prazer. E com entrega 100% discreta, sem identificação do produto na embalagem ou na nota fiscal, só você sabe o que chegou." }
  ],
  bottomDescription: "Sua varinha, suas regras. O Sense Wave entrega vibrações potentes e silenciosas em 10 modos diferentes, para você explorar o próprio corpo no seu ritmo, sem fio, sem pilha e sem julgamento."
};

const Accordion: React.FC<{title: string, content: string}> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-4">
      <button className="flex w-full justify-between items-center text-left text-white font-semibold group" onClick={() => setIsOpen(!isOpen)}>
        <span className="group-hover:text-brand-pink transition-colors">{title}</span>
        {isOpen ? <Minus className="w-5 h-5 text-gray-400 group-hover:text-brand-pink transition-colors" /> : <Plus className="w-5 h-5 text-gray-400 group-hover:text-brand-pink transition-colors" />}
      </button>
      <AnimatePresence>
        {isOpen && (
           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
             <p className="pt-4 text-gray-400 text-sm leading-relaxed">{content}</p>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
};

const ProductPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImage = productWave.images[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productWave.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = () => {
    window.dispatchEvent(new CustomEvent('addToCart', { 
      detail: {
        id: 'wave-01',
        nome: productWave.title,
        precoFormatado: productWave.price,
        imagem: productWave.images[0],
        quantidade: 1
      }
    }));
  };
  
  return (
    <div id="product-top" className="pt-32 md:pt-48 pb-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 relative z-10">
      
      {/* Title & Tags Mobile Only */}
      <div className="md:hidden flex flex-col pt-4 order-1">
          <div className="mb-4 flex gap-3 flex-wrap">
              {productWave.tags.map((tag, idx) => {
                 let Icon = Check;
                 if (tag.includes("água")) Icon = Droplets;
                 else if (tag.includes("Recarregável")) Icon = BatteryCharging;
                 else if (tag.includes("potente")) Icon = Feather;
                 return (
                   <span key={idx} className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 whitespace-nowrap">
                      <Icon className="w-3.5 h-3.5 text-brand-pink" />
                      {tag}
                   </span>
                 );
              })}
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">{productWave.title}</h1>
      </div>

      {/* Left Column - Slider */}
      <div className="space-y-4 order-2 md:order-none">
         <div className="aspect-square rounded-3xl overflow-hidden bg-dark-surface border border-white/5 relative group premium-shadow">
            <AnimatePresence mode="wait">
              <motion.img 
                key={mainImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={mainImage} 
                className="w-full h-full object-cover absolute inset-0" 
                alt={productWave.title} 
                referrerPolicy="no-referrer" 
              />
            </AnimatePresence>
         </div>
         <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
            {productWave.images.map((img, idx) => (
              <button key={idx} onClick={() => setCurrentIndex(idx)} className={`flex-shrink-0 w-20 md:w-24 aspect-square rounded-2xl overflow-hidden border-2 transition-all ${mainImage === img ? 'border-brand-pink' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                 <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
         </div>
      </div>
      
      {/* Right Column - Info */}
      <div className="flex flex-col order-3 md:order-none mt-4 md:mt-0">
          <div className="hidden md:flex mb-6 gap-3 flex-wrap">
              {productWave.tags.map((tag, idx) => {
                 let Icon = Check;
                 if (tag.includes("água")) Icon = Droplets;
                 else if (tag.includes("Recarregável")) Icon = BatteryCharging;
                 else if (tag.includes("potente")) Icon = Feather;
                 return (
                   <span key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                      <Icon className="w-4 h-4 text-brand-pink" />
                      {tag}
                   </span>
                 );
              })}
          </div>
          
          <h1 className="hidden md:block text-5xl font-extrabold text-white mb-4 tracking-tight">{productWave.title}</h1>
          <p className="text-lg text-gray-400 leading-relaxed font-medium mb-8 pb-8 border-b border-white/10">
            {productWave.subtitle}
          </p>
          
          <div className="flex flex-col gap-4 mb-4">
            <a href={productWave.checkoutUrl} target="_blank" rel="noopener noreferrer" className="w-full py-4 px-8 bg-brand-pink text-white font-bold rounded-full hover:bg-brand-pink-hover transition-all flex items-center justify-center text-lg shadow-lg shadow-brand-pink/20">
              {productWave.price} <span className="mx-2 opacity-50">|</span> Comprar Agora
            </a>
            <button 
              onClick={handleAddToCart}
              className="w-full py-4 px-8 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center text-lg"
            >
              Adicionar ao Carrinho
            </button>
          </div>
          <div className="text-center text-sm font-medium text-brand-pink flex items-center justify-center gap-2 mb-10">
            <Truck className="w-4 h-4" /> {productWave.promoText}
          </div>
          
          <div className="space-y-2 mb-8">
             {productWave.accordions.map((acc, idx) => (
                 <Accordion key={idx} title={acc.title} content={acc.content} />
             ))}
          </div>
          
          <p className="text-base text-white font-medium leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
            {productWave.bottomDescription}
          </p>
      </div>
    </div>
  )
};

const faqs = [
  {
    title: "O Wave é silencioso mesmo?",
    content: "Sim! O motor do Wave foi projetado pra ser potente e silencioso ao mesmo tempo. Você aproveita cada momento sem se preocupar com quem está do lado de fora."
  },
  {
    title: "Como faço pra carregar?",
    content: "Simples: conecte o cabo USB que acompanha o produto em qualquer fonte (notebook, PC ou carregador de celular). Em 2 a 3 horas ele está com a bateria cheia e pronto pra usar."
  },
  {
    title: "Posso usar no banho?",
    content: "Pode sim! O Wave é à prova d'água, então banho, banheira ou onde a imaginação levar, ele acompanha você sem problema nenhum."
  },
  {
    title: "A embalagem chega discreta?",
    content: "Sempre. Enviamos em caixa lacrada sem nenhuma identificação do produto por fora. Ninguém além de você precisa saber o que chegou, essa parte é só sua."
  },
  {
    title: "Tive um problema, como falo com vocês?",
    content: "A gente está aqui! É só chamar no nosso WhatsApp e a nossa equipe te responde rapidinho. Seja pra tirar uma dúvida antes de comprar ou resolver qualquer coisa depois, estamos sempre prontos pra te ajudar."
  }
];

const ProductFeatures = () => (
  <section 
    className="py-32 bg-[#fafafa] text-gray-900 relative -mt-4 border-t border-gray-200 overflow-hidden"
    style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.03) 2px, transparent 2px)', backgroundSize: '32px 32px' }}
  >
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
          O prazer que <span className="text-brand-pink">você merecia</span><br />ter encontrado antes.
        </h2>
        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          O Wave foi criado pra quem quer qualidade, discrição e potência (tudo no mesmo lugar)
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-20">
        
        {/* Left Image */}
        <div className="order-1 md:order-1 flex justify-center relative z-0">
           {/* Glow behind image - weaker opacity */}
           <div 
             className="absolute inset-0 w-[140%] h-[140%] -left-[20%] -top-[20%] rounded-full -z-10" 
             style={{ background: 'radial-gradient(circle, rgba(219, 39, 119, 0.15) 0%, transparent 65%)' }}
           ></div>
           
           <img 
              src="https://prazer-sense.sirv.com/Loja%20Online%20Sense/Produtos/wave-transparent.png" 
              alt="Sense Wave" 
              className="w-full max-w-[280px] md:max-w-[420px] object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700" 
           />
        </div>
        
        {/* Right Features */}
        <div className="flex flex-col gap-6 text-left order-2 md:order-2 relative z-10 w-full max-w-lg mx-auto md:mr-auto md:ml-0">
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-all group border border-pink-100">
            <div className="flex items-center gap-4 mb-4">
               <span className="p-3 bg-brand-pink/10 rounded-full text-brand-pink shadow-sm">
                 <BatteryCharging className="w-6 h-6" />
               </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Recarregável via USB</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Chega de pilha acabando na hora errada. O Wave carrega em qualquer USB (notebook, PC ou carregador de celular 5V) e em até 2 horas está pronto pra uma sessão completa.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-all group border border-pink-100">
            <div className="flex items-center gap-4 mb-4">
               <span className="p-3 bg-brand-pink/10 rounded-full text-brand-pink shadow-sm">
                 <Feather className="w-6 h-6" />
               </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Textura Soft Touch</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              O silicone aveludado do Wave foi escolhido a dedo: macio, hipoalergênico e com um toque tão suave que parece feito pra você. Prazer que começa antes mesmo de ligar.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-all group border border-pink-100">
            <div className="flex items-center gap-4 mb-4">
               <span className="p-3 bg-brand-pink/10 rounded-full text-brand-pink shadow-sm">
                 <Droplets className="w-6 h-6" />
               </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">À prova d'água</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Banho, banheira ou onde a imaginação mandar. O Wave é à prova d'água, então você leva pra onde quiser sem preocupação (e a limpeza depois fica muito mais fácil também)
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center relative z-20">
        <button onClick={(e) => { e.preventDefault(); document.getElementById('product-top')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center justify-center py-4 px-10 bg-brand-pink text-white font-bold rounded-full hover:bg-brand-pink-hover transition-all gap-2 shadow-lg shadow-brand-pink/20 text-lg">
          Comprar Agora <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-32 relative text-white bg-dark-bg bg-texture border-t border-white/5 overflow-hidden">
    <div className="premium-glow -top-40 -right-40 opacity-30" />
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16 relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-serif-premium">
          Ficou alguma dúvida?
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed font-medium">
          A gente sabe que comprar pela primeira vez pode gerar uma pergunta ou outra (e tá tudo bem). Reunimos aqui as dúvidas mais comuns pra você comprar com confiança e sem mistério.
        </p>
      </div>
      
      <div className="flex flex-col relative z-10 bg-dark-surface p-8 md:p-12 rounded-[2rem] border border-white/5 premium-shadow">
        {faqs.map((faq, index) => (
          <Accordion key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
      
      <div className="mt-16 text-center relative z-20">
        <button onClick={(e) => { e.preventDefault(); document.getElementById('product-top')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center justify-center py-4 px-10 bg-brand-pink text-white font-bold rounded-full hover:bg-brand-pink-hover transition-all gap-2 shadow-lg shadow-brand-pink/20 text-lg">
          Comprar Agora <ArrowRight className="w-5 h-5" />
        </button>
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
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || "");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const updateBadge = () => {
      const badge = document.getElementById('cart-badge');
      const mobileBadge = document.getElementById('cart-badge-mobile');
      const hasItems = cartItems.length > 0;
      if (badge) badge.style.display = hasItems ? 'block' : 'none';
      if (mobileBadge) mobileBadge.style.display = hasItems ? 'block' : 'none';
    };
    updateBadge();
  }, [cartItems]);

  useEffect(() => {
    const handleToggleCart = () => setIsCartOpen(prev => !prev);
    const handleAddToCart = (e: Event) => {
      const customEvent = e as CustomEvent<CartItem>;
      setCartItems(prev => {
        const existing = prev.find(item => item.id === customEvent.detail.id);
        if (existing) {
          return prev.map(item => item.id === customEvent.detail.id ? { ...item, quantidade: item.quantidade + 1 } : item);
        }
        return [...prev, customEvent.detail];
      });
      setIsCartOpen(true);
    };

    window.addEventListener('toggleCart', handleToggleCart);
    window.addEventListener('addToCart', handleAddToCart);

    return () => {
      window.removeEventListener('toggleCart', handleToggleCart);
      window.removeEventListener('addToCart', handleAddToCart);
    };
  }, []);

  const updateQuantity = (id: string | number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantidade + delta;
        return newQuantity > 0 ? { ...item, quantidade: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantidade > 0));
  };

  const removeItem = (id: string | number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };


  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(window.location.hash);
      // Let the browser handle standard hash scrolling unless it's a "page"
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash === "#product-sense-wave") {
      return (
        <main className="overflow-x-hidden">
          <ProductPage />
          <ProductFeatures />
          <FAQSection />
        </main>
      );
    }

    return (
      <main className="overflow-x-hidden">
        <Hero />
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/30 to-transparent" />
        </div>
        <PrazerPremium />
        <AboutUs />
        <KitsEspeciais />
        <Benefits />
      </main>
    );
  };

  return (
    <div className="min-h-screen selection:bg-brand-pink selection:text-white bg-dark-bg bg-texture">
      <Navbar />
      
      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-dark-surface border-l border-white/5 z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white font-serif-premium">Seu Carrinho</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-gray-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                    <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                    <p>Seu carrinho está vazio.</p>
                    <button onClick={() => setIsCartOpen(false)} className="mt-4 text-brand-pink font-semibold hover:underline">
                      Continuar explorando
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-dark-bg p-4 rounded-2xl border border-white/5">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-black flex-shrink-0">
                        <img src={item.imagem} alt={item.nome} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col flex-1 justify-between py-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-white font-semibold text-sm line-clamp-2 pr-4">{item.nome}</h4>
                          <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-brand-pink text-xs transition-colors p-1 -mt-1 -mr-1">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex justify-between items-end mt-2">
                          <span className="text-brand-pink font-bold">{item.precoFormatado}</span>
                          <div className="flex items-center gap-3 bg-dark-surface rounded-full px-3 py-1 border border-white/5">
                            <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-white">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium text-white min-w-[12px] text-center">{item.quantidade}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-white">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-white/5 bg-dark-surface">
                  <div className="flex justify-between items-center mb-6 text-lg">
                    <span className="text-gray-400">Total estimado</span>
                    <span className="text-white font-bold font-serif-premium">
                      R$ {cartItems.reduce((acc, item) => {
                        const price = parseFloat(item.precoFormatado.replace('R$', '').replace(',', '.'));
                        return acc + (price * item.quantidade);
                      }, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <button className="w-full py-4 bg-brand-pink text-white font-bold rounded-full hover:bg-brand-pink-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-pink/20">
                    Finalizar Compra <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {renderContent()}
      <Footer />
    </div>
  );
}

