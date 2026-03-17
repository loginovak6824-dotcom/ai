import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { products } from '@/lib/products';
import { useStore } from '@/lib/store';
import ProductCard from '@/components/ProductCard';

export default function Favorites() {
  const { favorites } = useStore();
  const favProducts = products.filter(p => favorites.includes(p.id));

  return (
    <div className="px-5 pt-14 pb-24">
      <h1 className="text-2xl font-light tracking-tight text-foreground mb-5">Избранное</h1>

      {favProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
            <Heart size={24} className="text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">Здесь пока пусто</p>
          <p className="text-xs text-muted-foreground mt-1">Добавляйте понравившиеся товары</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {favProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
