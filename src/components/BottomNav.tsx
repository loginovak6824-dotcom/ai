import { Home, LayoutGrid, Heart, ShoppingBag, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '@/lib/store';

const tabs = [
  { icon: Home, label: 'Главная', path: '/' },
  { icon: LayoutGrid, label: 'Каталог', path: '/catalog' },
  { icon: Heart, label: 'Избранное', path: '/favorites' },
  { icon: ShoppingBag, label: 'Корзина', path: '/cart' },
  { icon: User, label: 'Профиль', path: '/profile' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useStore();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        {tabs.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path || 
            (path === '/catalog' && location.pathname.startsWith('/product'));
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-0.5 py-1 px-3 relative transition-colors ${
                active ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <div className="relative">
                <Icon size={20} strokeWidth={active ? 2 : 1.5} />
                {path === '/cart' && cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-foreground text-background text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </button>
          );
        })}
      </div>
      {/* Safe area padding for iOS */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
