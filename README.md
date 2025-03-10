# Link-a-thon

🚀 **Link-a-thon** is a platform that connects developers by allowing them to view, search, and create project pitches to recruit talent. Users can log in seamlessly using GitHub OAuth, eliminating the need for manual account creation.

## ✨ Features

- 🔍 **Discover Projects** – Browse projects posted by other users.
- 📝 **Create a Project Pitch** – Recruit talent for your own project.
- 🔑 **GitHub OAuth Authentication** – No need to create an account, just log in with GitHub.
- 🔎 **Advanced Search** – Find projects by name, creator, or category.
- ⚡ **Modern Tech Stack** – Built with Next.js 15, Tailwind CSS, TypeScript, and Sanity CMS.

## 🛠 Tech Stack

- **Frontend**: Next.js 15, Tailwind CSS, TypeScript
- **Backend & CMS**: Sanity
- **Authentication**: GitHub OAuth

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/RBLucky/link-a-thon.git
cd link-a-thon
```

### 2️⃣ Install Dependencies

```sh
npm install  # or yarn install
```

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following:

```sh
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id
NEXT_PUBLIC_GITHUB_CLIENT_SECRET=your_github_client_secret
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
AUTH_SECRET=your_auth_secret # Added by `npx auth`. Read more: https://cli.authjs.dev
AUTH_GITHUB_ID=your_auth_github_id # Found on GitHub OAuth2
AUTH_GITHUB_SECRET=your_github_secret
```

Replace the placeholders with your actual credentials.

### 4️⃣ Run the Development Server

```sh
npm run dev  # or yarn dev
```

The app will be available at **http://localhost:3000**.

---

## 📜 License

This project is open-source and available under the **MIT License**.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo, create a branch, and submit a PR.

---

💡 *Happy coding and welcome to Link-a-thon!*
