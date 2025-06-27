# 🏠 RoomsyNest - Dashboard Enhanced Roommate Finder

RoomsyNest is a modern, responsive roommate listing and management web application built with **React**. Now enhanced with a powerful **Dashboard System**, it offers better user control, listing management, and profile settings — all in one place.

## 🔗 Live URLs

* 🌐 **Client:** [https://roomsy-nest.web.app/](https://roomsy-nest.web.app/)
* 🌐 **Server:** [https://roomsy-nest-server-site.vercel.app](https://roomsy-nest-server-site.vercel.app)

---

## ✨ Updated Features

* ✅ **Dashboard System** with sidebar navigation and role-based views
* 📊 **Overview Page** showing stats like total listings, user’s own listings, and quick access to features
* 📝 **Add Listing** page to post new roommate opportunities
* 📂 **My Listing** section to manage user-specific listings
* 🔍 **Browse Listing** page in responsive **Card View** with **sorting**, **filtering**, and **AOS scroll animation**
* 👤 **Profile Settings** integrated into dashboard allowing users to update name and profile picture (with file upload)
* 🌗 **Dark & Light Mode** support across all pages
* 📱 **Fully Responsive** UI design compatible with all device sizes
* 🔐 **Authentication** and **Private Routes** via Firebase Auth

---

## 🔐 Routes Overview

| Route                         | Access  | Description                               |
| ----------------------------- | ------- | ----------------------------------------- |
| `/`                           | Public  | Landing page with hero content            |
| `/login`, `/signup`           | Public  | Auth pages with validation                |
| `/browse-listing`             | Public  | View all roommate listings in card format |
| `/dashboard`                  | Private | Main dashboard layout with sidebar        |
| `/dashboard/overview`         | Private | Stats and user info overview              |
| `/dashboard/my-listing`       | Private | View/manage user-posted listings          |
| `/dashboard/find-rommate`     | Private | Add new roommate listing                  |
| `/dashboard/browse-listing`   | Private | Full browse view inside dashboard         |
| `/dashboard/profile-settings` | Private | Update name and profile image             |

---

## 🖼️ Dashboard Screenshots

> ✅ Include these screenshots in the repository or as deployment preview links:

Dashboard Overview

Browse Listing Cards

Profile Settings Page

## 📸 UI Screenshot

![Romsy Nest Ui](https://i.ibb.co/DP5bKCxN/image.pngg)
![Romsy Nest Ui](https://i.ibb.co/qMC92mT0/image.png)
![Romsy Nest Ui](https://i.ibb.co/KcnSMzdC/image.png)

---

---

## ⚙️ Tech Stack

* **React** + **React Router DOM** – Routing
* **Firebase** – Auth & Storage
* **Tailwind CSS** – Styling
* **AOS (Animate On Scroll)** – Scroll animations
* **Framer Motion** – Animations
* **SweetAlert2** – Alert system
* **React Helmet Async** – SEO meta management
* **React Simple Typewriter** – Typing animation

---

## 📁 Environment Setup

You must provide a `.env` file at the root of the project for Firebase to function properly:

```
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_project.firebaseapp.com
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_project.appspot.com
VITE_MESSAGINGSENDERID=your_sender_id
VITE_APPID=your_app_id
```

> ⚠️ Do not share this file publicly — keep it private.

---

## 🧑‍💻 Developer Notes

* Responsive tested with Chrome DevTools (iPhone SE → Desktop)
* Sidebar is fixed and behaves properly on scroll
* Firebase Storage supports image uploads (up to 1GB free tier)
* All major logic separated into components for scalability

---

## 📌 Contribution & License

Contributions are welcome! Please create a PR or submit an issue. This project is open-source and free to use.

---

> Built with ❤️ by \[Mohammad Sanvi] for modern student living
