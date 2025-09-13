# Nexa IT Solutions - Professional IT Website

A modern, responsive website for an IT solutions company built with React.js and Vite. This website showcases professional IT services, portfolio, and company information with a beautiful, modern design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Interactive Components**: Smooth scrolling, hover effects, and animations
- **Professional Content**: Complete IT services showcase with portfolio
- **Contact Form**: Functional contact form for client inquiries
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Icons** - Beautiful icon library
- **CSS3** - Modern styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

1. **Clone or download the project**
   ```bash
   # If you have git, you can clone
   git clone <repository-url>
   cd nexa-it-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
This will start the development server at `http://localhost:3000`

### Production Build
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
This serves the production build locally for testing.

## 📁 Project Structure

```
nexa-it-website/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section with animations
│   │   ├── Services.jsx        # Services showcase
│   │   ├── About.jsx           # About company section
│   │   ├── Portfolio.jsx       # Portfolio with filtering
│   │   ├── Contact.jsx         # Contact form and info
│   │   └── Footer.jsx          # Footer with links
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎨 Customization

### Colors
The website uses a blue color scheme. You can customize colors by modifying the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #3b82f6;
  --accent-color: #60a5fa;
}
```

### Content
- **Company Information**: Update company details in each component
- **Services**: Modify services in `src/components/Services.jsx`
- **Portfolio**: Add your projects in `src/components/Portfolio.jsx`
- **Contact Info**: Update contact details in `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Images
Replace placeholder images in the Portfolio component with your actual project screenshots.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Your site will be live!

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 📞 Support

If you need help with customization or have questions:
- Check the component files for detailed code structure
- Modify the content in each component as needed
- Update the styling in the CSS sections

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React.js and Vite**
