# React Components & Props - Blog Site

A simple blog application built with React and Vite to demonstrate component composition and props passing.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

  ```bash
  git clone <your-repo-url>
  cd react-components-props-vite-lab
  ```

1. Install dependencies:

  ```bash
  npm install
  ```

1. Start the development server:

```bash
npm run dev
```

1. Open your browser and navigate to:

```text
http://localhost:5173
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.jsx       # Blog header with title
│   ├── About.jsx        # About section with image and description
│   ├── ArticleList.jsx  # Container for article list
│   └── Article.jsx      # Individual article component
├── data/
│   └── blog.js          # Blog data (name, about, posts)
└── App.jsx              # Main app component
```

## 🧩 Component Hierarchy

```text
App
├── Header
├── About
└── ArticleList
    └── Article (multiple instances)
```

## 📸 Screenshots

### Full Blog View

![Blog Homepage](![alt text](image.png))
*The complete blog site showing header, about section, and article list*

### Header Component

![Header Section](![alt text](image-1.png))
*Blog title displayed in the header*

### About Section

![About Section](![alt text](image-2.png))
*About section with blog logo and description*

### Article List

![Article List](![alt text](image-3.png))
*List of blog articles with titles, dates, and previews*

## 🔑 Key Concepts Demonstrated

### Props Passing

- Parent components pass data to child components via props
- `App` → `Header`, `About`, `ArticleList`
- `ArticleList` → `Article`

### Default Props

- `About` component uses a placeholder image if none provided
- `Article` component defaults date to "January 1, 1970"

### List Rendering

- `ArticleList` maps over posts array to render multiple `Article` components
- Each `Article` has a unique `key` prop for React's reconciliation

## 📝 Component Documentation

### Header Components

Displays the blog's name in an h1 tag.

**Props:**

- `name` (string, required) - The blog's title

### About Component

Shows blog information with an image and description.

**Props:**

- `image` (string, optional) - URL for blog logo (defaults to placeholder)
- `about` (string, required) - Blog description text

### ArticleList Component

Container that renders a list of Article components.

**Props:**

- `posts` (array, required) - Array of post objects

### Article Component

Displays individual article information.

**Props:**

- `title` (string, required) - Article title
- `date` (string, optional) - Publication date (defaults to "January 1, 1970")
- `preview` (string, required) - Article preview text
- `minutes` (number, optional) - Reading time in minutes

## 🛠️ Built With

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and dev server
