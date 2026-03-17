import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Minus, Plus } from 'lucide-react';
import { products } from '@/lib/products';
import { useStore } from '@/lib/store';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const { toggleFavorite, isFavorite, addToCart } = useStore();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-muted-foreground">
        Товар не найден
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Выберите размер');
      return;
    }
    addToCart(product, selectedSize);
    toast.success('Добавлено в корзину');
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 bg-background/80 backdrop-blur-xl">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={() => toggleFavorite(product.id)}
          className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
        >
          <Heart size={18} className={isFavorite(product.id) ? 'fill-foreground' : ''} />
        </button>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="aspect-[3/4] bg-secondary"
      >
        <img src={product.image} alt={product.nameRu} className="w-full h-full object-cover" />
      </motion.div>

      {/* Info */}
      <div className="px-5 pt-5">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-medium text-foreground">{product.name}</h1>
            <p className="text-sm text-muted-foreground mt-0.5">{product.nameRu}</p>
          </div>
          <p className="text-xl font-medium text-foreground">{product.price.toLocaleString('ru-RU')} ₽</p>
        </div>

        {/* Sizes */}
        <div className="mt-6">
          <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3">Размер</p>
          <div className="flex gap-2">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-11 h-11 rounded-lg text-sm font-medium transition-colors ${
                  selectedSize === size
                    ? 'bg-foreground text-background'
                    : 'bg-secondary text-foreground'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className="w-full mt-6 bg-foreground text-background py-3.5 rounded-full text-sm font-medium tracking-wide transition-transform active:scale-[0.98]"
        >
          Добавить в корзину
        </button>

        {/* Description */}
        <div className="mt-8 space-y-4 pb-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-1">Ткань</p>
            <p className="text-sm text-foreground">{product.description.fabric}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-1">Посадка</p>
            <p className="text-sm text-foreground">{product.description.fit}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-1">Уход</p>
            <p className="text-sm text-foreground">{product.description.care}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
