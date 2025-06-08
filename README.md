# Portfolio Website - React + Vite + Tailwind CSS

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This project converts existing HTML pages into a clean, modular React application with excellent performance and maintainability.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Clean Architecture**: Modular component structure
- **Fast Performance**: Optimized with Vite build tool
- **Accessible**: Semantic HTML and proper ARIA labels
- **SEO Friendly**: Proper meta tags and structure

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer with social links
│   │   └── Layout.jsx          # Main layout wrapper
│   └── ui/
│       ├── Button.jsx          # Reusable button component
│       ├── SkillCard.jsx       # Skill display cards
│       ├── ExperienceCard.jsx  # Experience/education cards
│       └── Section.jsx         # Section wrapper component
├── data/
│   ├── skills.js              # Skills data
│   ├── experience.js          # Experience and personal info
│   └── projects.js            # Projects data
├── pages/
│   ├── Home.jsx               # Landing page
│   ├── About.jsx              # About page
│   ├── Skills.jsx             # Technical skills
│   ├── Projects.jsx           # Project showcase
│   └── Contact.jsx            # Contact form
├── utils/
│   └── icons.js               # Icon components
├── App.jsx                    # Main app with routing
├── main.jsx                   # React entry point
└── index.css                  # Global styles
```

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/experience.js`:
- Name, title, bio
- Profile image URL
- Education and work experience
- Personal interests

### Skills
Modify your technical skills in `src/data/skills.js`:
- Programming languages
- Frameworks and libraries
- Tools and technologies
- Databases

### Projects
Add your projects in `src/data/projects.js`:
- Project details
- Technologies used
- Images and links
- Featured status

### Styling
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Individual component files

## 📱 Pages

- **Home**: Hero section with profile and call-to-action
- **About**: Personal bio, education, experience, and highlights
- **Skills**: Technical skills organized by categories
- **Projects**: Portfolio projects with descriptions and links
- **Contact**: Contact form and information

## 🔧 Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Modern JavaScript**: ES6+ features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using React, Vite, and Tailwind CSS
