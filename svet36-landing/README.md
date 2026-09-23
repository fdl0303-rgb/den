# СВЕТ 36 — лендинг интернет-магазина освещения (Воронеж)

Премиальный одностраничный сайт для подбора и покупки подвесных люстр.
Технологии: **React + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide**.

## Запуск

```bash
cd app
npm install
npm run dev
```

Dev-сервер: http://localhost:5173/den/svet36-landing/

## Сборка

```bash
npm run build          # обычная сборка в app/dist
npm run build:pages    # сборка для GitHub Pages в корень проекта svet36-landing/
```

## Структура

```
svet36-landing/
├── app/                    # исходник Vite-приложения
│   ├── index.html          # SEO-аппел и подключение шрифтов
│   ├── public/logo.svg     # ЗАМЕНИТЕ на свой логотип с svet-36.ru
│   ├── scripts/build-pages.mjs
│   └── src/
│       ├── index.css       # дизайн-система (палитра, шрифты, анимации)
│       ├── lib/data.ts     # ВСЕ тексты, товары, фото, телефоны — здесь
│       └── components/     # Header, Hero, Categories, Why, Featured,
│                           # PhotoFit, Steps, Testimonials, Faq, Footer
└── README.md
```

## Что заменить перед публикацией

- `app/public/logo.svg` — ваш логотип (путь в коде: `/public/logo.svg`).
- `app/public/hero.jpg` — фотореалистичная заставка главного экрана (по умолчанию используется картинка из `svet36-b2b`).
- `src/lib/data.ts` — адреса фото категорий/товаров, телефон, email, адрес, цены. Фото-слоты на случай
  недоступности внешних картинок показывают тёплый стилизованный фон с силуэтом люстры.

## Деплой на GitHub Pages

Сайт публикуется с корня репозитория через GitHub Actions (workflow в `.github/`).
Публичная ссылка: `https://fdl0303-rgb.github.io/den/svet36-landing/`

После правок:

```bash
npm run build:pages
git add -A
git commit -m "Обновление svet36-landing"
git push
```

## Примечания

- Форма подбора — демо: данные никуда не отправляются, показывается сообщение об успехе.
- Контакты, цены и товары — заглушки, чтобы нельзя было принять их за реальные предложения.
- Все анимации уважают `prefers-reduced-motion`.