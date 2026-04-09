import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Feather, Layers, Sparkles, Bot } from 'lucide-react';
import heroImage from '@/assets/hero-model.jpg';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

const features = [
  { icon: Feather, title: 'Комфортные ткани', desc: 'Натуральные материалы высшего качества' },
  { icon: Layers, title: 'Универсальные силуэты', desc: 'Подходят для любого случая' },
  { icon: Sparkles, title: 'Лёгкое сочетание', desc: 'Каждая вещь сочетается с другой' },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="pb-24">
      {/* AI Banner */}
      <div className="flex items-center justify-center gap-2 bg-secondary/80 border-b border-border px-4 py-2.5">
        <Bot size={14} className="text-muted-foreground shrink-0" />
        <p className="text-xs text-muted-foreground text-center leading-snug">
          Данный сайт сгенерирован с помощью искусственного интеллекта
        </p>
      </div>

      {/* Hero */}
      <section className="relative h-[85vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Be confident — базовая одежда"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-light tracking-tight text-foreground"
          >
            Be confident
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base text-muted-foreground mt-2 max-w-[280px] leading-relaxed"
          >
            Базовая одежда, в которой ты чувствуешь себя уверенно
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => navigate('/catalog')}
            className="mt-5 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-transform active:scale-95"
          >
            Смотреть каталог
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-5 py-12">
        <p className="text-lg font-light text-foreground leading-relaxed">
          Мы создаём одежду, которая не&nbsp;отвлекает от&nbsp;тебя
        </p>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
          Минимализм, который работает каждый день. Уверенность начинается с комфорта.
        </p>
      </section>

      {/* Features */}
      <section className="px-5 pb-12">
        <div className="flex flex-col gap-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Icon size={18} className="text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-5 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-foreground">Популярное</h2>
          <button
            onClick={() => navigate('/catalog')}
            className="text-xs text-muted-foreground tracking-wide"
          >
            Все товары →
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
