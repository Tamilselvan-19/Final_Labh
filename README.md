# 🛒 Final Labh — E-Commerce Web Application

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-00C853?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![No Framework](https://img.shields.io/badge/Framework-None%20Required-blueviolet?style=for-the-badge)

**A fully static, multi-page e-commerce website featuring product listings, cart, payment UI, and company pages — built with pure HTML, CSS, and JavaScript.**

[Features](#-features) · [Structure](#-project-structure) · [Quick Start](#-quick-start) · [Pages](#-pages-overview) · [Future Work](#-future-improvements)

</div>

--- <a href=https://super-choux-46de5b.netlify.app/></a>Live link

## 📌 Overview

**Final Labh** is a clean, responsive e-commerce web application built entirely with frontend technologies — no frameworks, no dependencies, no build tools. It includes:

- **Product Catalog** — Browse and view products with images and details
- **Multi-Page Layout** — Dedicated pages for home, products, about, contact, careers, and payment
- **Modular Components** — Shared header and footer across all pages
- **Payment UI** — Checkout and payment page interface
- **Pure Static** — Runs directly in any browser with zero setup

---

## ✨ Features

| Feature | Details |
|---|---|
| 🏠 **Homepage** | Hero section, featured products, and navigation |
| 🛍️ **Product Listings** | Category-wise product catalog with images and pricing |
| 📄 **Product Detail Pages** | Individual pages for each product with full details |
| 💳 **Payment Page** | Checkout UI with order summary and payment form |
| 🏢 **About Page** | Brand story and company information |
| 📞 **Contact Page** | Contact form with name, email, and message fields |
| 💼 **Careers Page** | Job listings and application section |
| 📱 **Responsive Design** | Mobile-friendly layout across all screen sizes |
| 🔗 **Shared Components** | Reusable header and footer across all pages |

---

## 🏗️ Site Architecture

```
Final Labh Website
         │
         ▼
   index.html  (Homepage)
   │
   ├──► products/          (Product Listing Pages)
   │       └── [category].html
   │
   ├──► product/           (Individual Product Detail Pages)
   │       └── [product].html
   │
   ├──► about.html         (About Us)
   ├──► contact.html       (Contact Form)
   ├──► career.html        (Careers)
   ├──► payment.html       (Checkout & Payment)
   │
   ├──► header.html        (Shared Navigation Header)
   └──► footer.html        (Shared Footer)

Assets
   ├──► css/               (All Stylesheets)
   ├──► js/                (JavaScript Files)
   ├──► images/            (Site Images)
   └──► newimage/          (Additional Product Images)
```

---

## ⚡ Quick Start

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No build tools, Node.js, or server required

### 1. Clone the repository

```bash
git clone https://github.com/Tamilselvan-19/Final_Labh.git
cd Final_Labh
```

### 2. Open in browser

**Option A — Direct open (simplest):**
```bash
# Just double-click index.html, or:
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

**Option B — Local server (recommended for full functionality):**

<details>
<summary>Using Python</summary>

```bash
# Python 3
python -m http.server 8000

# Then open:
http://localhost:8000
```

</details>

<details>
<summary>Using VS Code Live Server</summary>

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Browser opens automatically at `http://127.0.0.1:5500`

</details>

<details>
<summary>Using Node.js (npx serve)</summary>

```bash
npx serve .
# Then open the URL shown in the terminal
```

</details>

---

## 📁 Project Structure

```
Final_Labh/
├── index.html          # Homepage
├── about.html          # About Us page
├── contact.html        # Contact page
├── career.html         # Careers page
├── payment.html        # Payment / Checkout page
├── header.html         # Shared header component
├── footer.html         # Shared footer component
│
├── products/           # Product listing / category pages
├── product/            # Individual product detail pages
│
├── css/                # Stylesheets
│   └── style.css
├── js/                 # JavaScript files
│   └── main.js
├── images/             # Primary image assets
└── newimage/           # Additional image assets
```

---

## 📊 Pages Overview

| Page | URL | Description |
|---|---|---|
| **Home** | `index.html` | Landing page with hero banner and featured products |
| **Products** | `products/` | Category-wise product grid listing |
| **Product Detail** | `product/` | Full details page for individual products |
| **About** | `about.html` | Brand story, mission, and team section |
| **Contact** | `contact.html` | Contact form and location details |
| **Careers** | `career.html` | Open positions and application section |
| **Payment** | `payment.html` | Checkout form with order summary |

---

## 🎨 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | Latest | Page structure and semantic markup |
| CSS3 | Latest | Styling, layout, and responsive design |
| JavaScript | ES6+ | Interactivity, DOM manipulation |

> No external libraries or frameworks — 100% vanilla web technologies.

---

## 🔮 Future Improvements

- 🛒 Shopping cart with add/remove functionality and local storage
- 🔍 Product search and filter by category/price
- 🔐 User authentication (login / register)
- 💳 Payment gateway integration (Razorpay / Stripe)
- 📦 Order tracking and history page
- 🌐 Backend integration (Node.js / Django / Firebase)
- 📊 Admin panel for product and order management

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push and open a Pull Request

---

## 👤 Author

**Tamilselvan** — [@Tamilselvan-19](https://github.com/Tamilselvan-19)

---

<div align="center">
  <sub>Built with ❤️ using HTML5 · CSS3 · JavaScript</sub>
</div>
