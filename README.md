# 🚗 RentalCar — Car Rental Platform / Платформа оренди авто

Below you will find **English** and **Ukrainian** versions of the README.

---

# 🌍 English Version

## ✨ Features

### 🔍 Car Catalog
- Pagination with “Load more”
- Real API integration
- Instant filtering by brand, hourly price, mileage range

### 🚘 Car Details Page
- Full-width image
- Car specifications
- Accessories & functionality
- Rental conditions
- Booking form with floating placeholders, hybrid date picker, success popup

### ❤️ Favorites
- Add/remove favorites  
- Stored in Zustand

### 🎨 UI
- Desktop-only layout (1440px)

### 🧭 Navigation
- Home
- Catalog
- Dynamic route `/catalog/[id]`

### 🔧 Technologies
- Next.js App Router  
- React Server Components  
- TypeScript  
- Zustand  
- Axios  
- CSS Modules  
- Next/Image  

---

## 📸 Screenshots

Stored in:  
`public/screens/home.png`  
`public/screens/catalog.png`  
`public/screens/details.png`

---

## 🧱 Project Structure

```
src/
 ├── app/
 │    ├── page.tsx
 │    ├── catalog/
 │    │      ├── page.tsx
 │    │      └── [id]/page.tsx
 │    └── globals.css
 ├── components/
 │    ├── layout/Header/
 │    ├── home/Hero/
 │    ├── catalog/
 │    ├── car-details/
 │    └── car/RentForm/
 ├── store/
 │    ├── useCarsStore.ts
 │    └── useFavoritesStore.ts
 ├── services/
 │    └── api/
 ├── utils/
 │    └── formatMileage.ts
public/
 └── screens/
```

---

## 🛠 Installation

```bash
git clone https://github.com/YOUR_USERNAME/rental-car.git
cd rental-car
npm install
npm run dev
```

App available at: http://localhost:3000/

---

## 🚀 Deployment

```bash
npm run build
npm run start
```

Ready for deployment on Vercel.

---

# 🇺🇦 Українська версія

## ✨ Можливості

### 🔍 Каталог авто
- Пагінація “Load more”
- Реальне API
- Миттєва фільтрація за брендом, ціною, пробігом

### 🚘 Сторінка авто
- Повноширинне фото
- Характеристики авто
- Аксесуари та функціональність
- Умови оренди
- Форма бронювання з плаваючими плейсхолдерами, date picker і попапом успіху

### ❤️ Обране
- Додавання/видалення улюблених авто  
- Зберігається в Zustand

### 🎨 UI
- Лише десктоп-версія (1440px)

### 🧭 Навігація
- Home  
- Catalog  
- Динамічний маршрут `/catalog/[id]`

### 🔧 Технології
- Next.js App Router  
- React Server Components  
- TypeScript  
- Zustand  
- Axios  
- CSS Modules  
- Next/Image  

---

## 📸 Скриншоти

Зберігаються у:  
`public/screens/home.png`  
`public/screens/catalog.png`  
`public/screens/details.png`

---

## 🧱 Структура проєкту

```
src/
 ├── app/
 │    ├── page.tsx
 │    ├── catalog/
 │    │      ├── page.tsx
 │    │      └── [id]/page.tsx
 │    └── globals.css
 ├── components/
 │    ├── layout/Header/
 │    ├── home/Hero/
 │    ├── catalog/
 │    ├── car-details/
 │    └── car/RentForm/
 ├── store/
 │    ├── useCarsStore.ts
 │    └── useFavoritesStore.ts
 ├── services/
 │    └── api/
 ├── utils/
 │    └── formatMileage.ts
public/
 └── screens/
```

---

## 🛠 Встановлення

```bash
git clone https://github.com/YOUR_USERNAME/rental-car.git
cd rental-car
npm install
npm run dev
```

Додаток доступний на: http://localhost:3000/

---

## 🚀 Деплой

```bash
npm run build
npm run start
```

Готовий до деплою на Vercel.

---

# 👩‍💻 Author / Автор
**Ліліана тоюнда**  
GitHub: https://github.com/lilianantw
