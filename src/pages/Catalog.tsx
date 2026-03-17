import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

const filters = ['Все', 'Верх', 'Низ'];
const filterMap: Record<string, string | null> = { 'Все': null, 'Верх': 'tops', 'Низ': 'bottoms' };

export default function Catalog() {
  const [active, setActive] = useState('Все');

  const filtered = filterMap[active]
    ? products.filter(p => p.category === filterMap[active])
    : products;

  return (
    <div className="px-5 pt-14 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-light tracking-tight text-foreground mb-5"
      >
        Каталог
      </motion.h1>

      <div className="flex gap-2 mb-6">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
              active === f
                ? 'bg-foreground text-background'
                : 'bg-secondary text-muted-foreground'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
