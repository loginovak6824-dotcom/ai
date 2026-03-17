import type { Product } from './store';
import tshirtWhite from '@/assets/product-tshirt-white.jpg';
import hoodieBlack from '@/assets/product-hoodie-black.jpg';
import pantsBeige from '@/assets/product-pants-beige.jpg';
import sweatshirtGrey from '@/assets/product-sweatshirt-grey.jpg';
import joggersBlack from '@/assets/product-joggers-black.jpg';
import longsleeveWhite from '@/assets/product-longsleeve-white.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: 'Oversized T-shirt',
    nameRu: 'Оверсайз футболка',
    price: 3490,
    image: tshirtWhite,
    images: [tshirtWhite],
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: {
      fabric: '100% органический хлопок, плотность 220 г/м²',
      fit: 'Свободная посадка oversize, удлинённый крой',
      care: 'Машинная стирка при 30°C, не отбеливать',
    },
  },
  {
    id: 2,
    name: 'Essential Hoodie',
    nameRu: 'Худи Essential',
    price: 6990,
    image: hoodieBlack,
    images: [hoodieBlack],
    category: 'tops',
    sizes: ['S', 'M', 'L', 'XL'],
    description: {
      fabric: '80% хлопок, 20% полиэстер, начёс внутри',
      fit: 'Классическая посадка, регулируемый капюшон',
      care: 'Машинная стирка при 30°C, сушить в расправленном виде',
    },
  },
  {
    id: 3,
    name: 'Relaxed Pants',
    nameRu: 'Брюки свободного кроя',
    price: 5490,
    image: pantsBeige,
    images: [pantsBeige],
    category: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: {
      fabric: '98% хлопок, 2% эластан',
      fit: 'Свободная посадка, высокая талия',
      care: 'Машинная стирка при 40°C, гладить при средней температуре',
    },
  },
  {
    id: 4,
    name: 'Crewneck Sweatshirt',
    nameRu: 'Свитшот с круглым вырезом',
    price: 5990,
    image: sweatshirtGrey,
    images: [sweatshirtGrey],
    category: 'tops',
    sizes: ['S', 'M', 'L', 'XL'],
    description: {
      fabric: '85% хлопок, 15% полиэстер, мягкий начёс',
      fit: 'Прямая посадка, рубчик на манжетах',
      care: 'Машинная стирка при 30°C',
    },
  },
  {
    id: 5,
    name: 'Slim Joggers',
    nameRu: 'Джоггеры Slim',
    price: 4990,
    image: joggersBlack,
    images: [joggersBlack],
    category: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: {
      fabric: '78% хлопок, 22% полиэстер',
      fit: 'Зауженный крой, эластичный пояс',
      care: 'Машинная стирка при 30°C',
    },
  },
  {
    id: 6,
    name: 'Long Sleeve Tee',
    nameRu: 'Лонгслив',
    price: 3990,
    image: longsleeveWhite,
    images: [longsleeveWhite],
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: {
      fabric: '100% хлопок, плотность 200 г/м²',
      fit: 'Прямая посадка, удлинённые рукава',
      care: 'Машинная стирка при 30°C, не отбеливать',
    },
  },
];
