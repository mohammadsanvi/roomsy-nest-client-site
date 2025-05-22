# 🏠 Roomsynest - Client Side

Roomsynest is a modern roommate listing web application built using **React**. It helps users find roommates and manage listings easily with a smooth and interactive UI.

🔗 **Live Client URL:** [https://roomsy-nest.web.appi](https://roomsy-nest.web.app)

---

🔗 **Live Server URL:** [https://roomsy-nest-server-site.vercel.app](https://roomsy-nest-server-site.vercel.app)

---

## ✨ Key Features

- 🔐 **Private Route Protection**  
  Routes like `Add to Find Roommate` and `My Listings` are protected and accessible only to authenticated users.

- 💬 **Interactive UI & Animations**  
  Using `react-awesome-reveal`, `framer-motion`, and `react-tooltip` for animated and user-friendly interactions.

- 🔍 **Browse All Listings**  
  Users can browse all available roommate listings with filtering and detail view support.

- 📝 **Create & Manage Posts**  
  Authenticated users can create new roommate listings, update them, or delete their own.

- ❤️ **Like System & Contact Reveal**  
  Users can like other users' listings to reveal the contact number — encouraging genuine engagement.

---

## 🔐 Routes Overview

| Route                | Access         | Description                                         |
|---------------------|----------------|-----------------------------------------------------|
| `/` (Home)          | Public         | Landing page with featured roommates and events     |
| `/add-roommate`     | Private        | Add a new roommate listing                          |
| `/browse-listing`   | Public         | Browse all public listings                          |
| `/my-listings`      | Private        | View and manage your own listings                   |
| `/login` / `/signup`| Public         | Authentication pages                                |

---

## 🛠️ Tech Stack

- **React** with **React Router DOM** for routing
- **Framer Motion** for smooth animations
- **React Awesome Reveal** for reveal effects
- **React Tooltip** for hover tooltips
- **React Simple Typewriter** for animated text effects
- **React Helmet Async** for SEO-friendly metadata management
- **SweetAlert2** for stylish alerts and confirmations
