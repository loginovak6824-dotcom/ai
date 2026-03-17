import { Heart, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/store';
import { useStore } from '@/lib/store';

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite, addToCart } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group"
    >
      <div
        className="relative aspect-[3/4] rounded-lg overflow-hidden bg-secondary cursor-pointer mb-2"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.nameRu}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
            className="w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-background"
          >
            <Heart
              size={16}
              className={isFavorite(product.id) ? 'fill-foreground text-foreground' : 'text-foreground'}
            />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); addToCart(product, 'M'); }}
            className="w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-background"
          >
            <ShoppingBag size={16} className="text-foreground" />
          </button>
        </div>
      </div>
      <div className="px-0.5">
        <p className="text-sm font-medium text-foreground leading-tight">{product.name}</p>
        <p className="text-sm text-muted-foreground mt-0.5">
          {product.price.toLocaleString('ru-RU')} ₽
        </p>
      </div>
    </motion.div>
  );
}
