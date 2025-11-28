# 🚗 RentalCar — Car Rental Platform

RentalCar is a modern and fully responsive car rental web application built using **Next.js 14**, **TypeScript**, and **Zustand** for global state management.  
Users can browse available cars, filter them by parameters, open detailed pages, and submit a booking form.

---

## ✨ Features

### 🔍 Car Catalog
- Pagination with “Load more”
- Real API integration
- Instant filtering by:
  - Brand
  - Hourly price
  - Mileage range

### 🚘 Car Details Page
- Large full-width image
- Car specifications
- Accessories and functionalities list
- Rental conditions
- Booking form with:
  - Custom floating placeholders
  - Hybrid date picker
  - Success notification popup

### ❤️ Favorites
- Add/remove cars from favorites
- Stored in Zustand

### 🎨 Pixel-perfect UI
- Based on Figma design:
  - Manrope font
  - Colors, spacing, shadows
  - Fully responsive layout

### 🧭 Navigation
- Home
- Catalog
- Dynamic route `/catalog/[id]`

### 🔧 Technologies
- **Next.js App Router**
- **React Server Components**
- **Zustand**
- **TypeScript**
- **CSS Modules**
- **API fetching**
- **Next/Image optimization**

---

## 📸 Screenshots

### 🏠 Home Page
![Home](./public/screens/home.png)

### 📚 Catalog Page
![Catalog](./public/screens/catalog.png)

### 🚘 Car Details + Booking Form
![Details](./public/screens/details.png)

> ℹ️ Screens should be placed in:  
> `/public/screens/home.png`, `/catalog.png`, `/details.png`

---

## 🛠 Installation & Setup

```bash
git clone https://github.com/YOUR_USERNAME/rental-car.git
cd rental-car
npm install
npm run dev
App will run at:
http://localhost:3000

🧱 Project Structure
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
🚀 Deployment
Production build:

bash
npm run build
npm run start
Deploy easily to Vercel.

📄 License
MIT License.

👩‍💻 Author
Liliana Toiunda
Modern React / Next.js developer
GitHub: https://github.com/lilianantw