import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useStore } from '@/lib/store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useStore();
  const navigate = useNavigate();

  return (
    <div className="px-5 pt-14 pb-32">
      <h1 className="text-2xl font-light tracking-tight text-foreground mb-5">Корзина</h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
            <ShoppingBag size={24} className="text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">Корзина пуста</p>
          <button
            onClick={() => navigate('/catalog')}
            className="mt-4 text-xs text-foreground underline underline-offset-4"
          >
            Перейти в каталог
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            <AnimatePresence>
              {cart.map(({ product, size, quantity }) => (
                <motion.div
                  key={`${product.id}-${size}`}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex gap-3 p-3 rounded-xl bg-card border border-border"
                >
                  <img
                    src={product.image}
                    alt={product.nameRu}
                    className="w-20 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between">
                        <p className="text-sm font-medium text-foreground truncate pr-2">{product.name}</p>
                        <button
                          onClick={() => removeFromCart(product.id, size)}
                          className="text-muted-foreground shrink-0"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">Размер: {size}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 bg-secondary rounded-full px-1">
                        <button
                          onClick={() => updateQuantity(product.id, size, quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, size, quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {(product.price * quantity).toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Total + Checkout */}
          <div className="fixed bottom-16 left-0 right-0 p-5 bg-background/80 backdrop-blur-xl border-t border-border">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-muted-foreground">Итого</p>
              <p className="text-lg font-medium text-foreground">{cartTotal.toLocaleString('ru-RU')} ₽</p>
            </div>
            <button
              onClick={() => toast.success('Заказ оформлен!')}
              className="w-full bg-foreground text-background py-3.5 rounded-full text-sm font-medium tracking-wide transition-transform active:scale-[0.98]"
            >
              Оформить заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
}
