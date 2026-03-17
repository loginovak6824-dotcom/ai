import { User, Package, MapPin, CreditCard, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

const menuItems = [
  { icon: Package, label: 'Мои заказы' },
  { icon: MapPin, label: 'Адреса доставки' },
  { icon: CreditCard, label: 'Способы оплаты' },
  { icon: HelpCircle, label: 'Помощь' },
];

export default function Profile() {
  return (
    <div className="px-5 pt-14 pb-24">
      <h1 className="text-2xl font-light tracking-tight text-foreground mb-8">Профиль</h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
          <User size={24} className="text-muted-foreground" />
        </div>
        <div>
          <p className="text-base font-medium text-foreground">Гость</p>
          <p className="text-xs text-muted-foreground mt-0.5">Войдите для управления заказами</p>
        </div>
      </div>

      <div className="space-y-1">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 p-3.5 rounded-xl hover:bg-secondary transition-colors"
          >
            <Icon size={18} className="text-muted-foreground" />
            <span className="text-sm text-foreground flex-1 text-left">{label}</span>
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        ))}
      </div>

      <button className="w-full flex items-center gap-3 p-3.5 mt-4 rounded-xl hover:bg-secondary transition-colors text-destructive">
        <LogOut size={18} />
        <span className="text-sm flex-1 text-left">Выйти</span>
      </button>
    </div>
  );
}
