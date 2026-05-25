// Shared content for all three variants — keep one source of truth.
window.FOKOV_CONTENT = {
  name: 'Fokov Yehor',
  nameRu: 'Егор Фоков',
  tagline: 'Массажист.Тренер по плаванию и фитнесу. Создатель GymBro.',
  taglineShort: 'Тренер. Массажист. Автор GymBro.',
  city: 'Днепр',
  years: '23',

  career: [
    { tag: 'MS', label: 'Мастер спорта', sub: 'плавание' },
    { tag: 'KMS', label: 'Кандидат в мастера', sub: 'триатлон' },
    { tag: 'MA', label: 'Магистр', sub: 'физвоспитание и спорт' },
    { tag: '17+', label: 'Лет в спорте', sub: 'действующая практика' },
  ],

  massage: [
    { ru: 'Спортивный', en: 'Sport', desc: 'Восстановление мышц после нагрузок, ускорение регенерации.', price: '800грн', dur: 'от 80 мин' },
    { ru: 'Лимфодренаж', en: 'Lymph drain', desc: 'Снятие отёков, лёгкость, детокс. Ручная техника.', price: '700', dur: '80 мин' },
    { ru: 'Блейды (IASTM)', en: 'Blades', desc: 'Инструментальная мобилизация фасций. Триггерные точки.', price: '700', dur: '75 мин' },
    { ru: 'Классический', en: 'Classic', desc: 'Тонус, расслабление, профилактика. База для всех.', price: '700', dur: 'до 90 мин' },
    { ru: 'Массаж стоп', en: 'Foot', desc: 'Рефлексогенные зоны. Снимает усталость и стресс.', price: '350', dur: '30 мин' },
  ],

  training: [
    {
      place: 'Бассейн',
      en: 'Pool',
      bullets: ['Постановка техники с нуля', 'Скорость и выносливость', 'Работа дыхания и старта', 'Подготовка к соревнованиям'],
      img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80&auto=format&fit=crop',
    },
    {
      place: 'Зал',
      en: 'Gym',
      bullets: ['Силовые программы и рельеф', 'Реабилитация после травм', 'Функциональный тренинг', 'Контроль через GymBro'],
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop',
    },
  ],

  app: {
    name: 'GymBro',
    role: 'Приложение для тренера и клиента',
    pitch: 'Удобно для тренера. Просто для клиента.',
    bullets: [
      'Программы и подходы в один тап',
      'История тренировок и прогресса',
    ],
    status: 'BETA · iOS ',
  },

  reviews: [
    { name: 'Анна К.', tag: 'Триатлон', text: 'За полгода с Егором проплыла свой первый бассейн. Техника стала экономичной, в ноги ушло то, что забирала вода.' },
    { name: 'Денис М.', tag: 'Зал + массаж', text: 'Тренировки и восстановление в одной паре рук. GymBro помогает не сливать недели — всё видно.' },
    { name: 'Мария В.', tag: 'Лимфодренаж', text: 'После курса ушли отёки и хроническая усталость в ногах. Возвращаюсь раз в месяц на профилактику.' },
  ],

  links: {
    telegram: '#',
    instagram: '#',
    phone: '#',
    app: '#',
  },

  // Royalty-free images via Unsplash CDN (verified IDs)
  images: {
    portrait: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop',
    pool: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80&auto=format&fit=crop',
    pool2: 'https://images.unsplash.com/photo-1622629797619-c100e3e67e2e?w=1200&q=80&auto=format&fit=crop',
    gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop',
    gym2: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80&auto=format&fit=crop',
    massage: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=80&auto=format&fit=crop',
    massage2: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop',
    water: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200&q=80&auto=format&fit=crop',
    coach: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80&auto=format&fit=crop',
  },
};
