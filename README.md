# Tesfay Hagos - Portfolio Website

A modern, responsive portfolio website showcasing my expertise as a Senior Backend Developer specializing in Golang, microservices architecture, and cloud technologies.

## 🚀 Live Demo

Visit my portfolio: [https://tesfayhagos.vercel.app](https://tesfayhagos.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Firebase (Contact Form)
- **Icons**: React Icons
- **Deployment**: Vercel

## 🎯 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark Mode**: Automatic dark mode support
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **Performance Optimized**: Fast loading times and optimal user experience
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Contact Form**: Functional contact form with Firebase integration
- **Professional Showcase**: Detailed project portfolios with metrics and testimonials

## 🏗️ Project Structure

```
src/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── projects/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Dynamic project details
│   │   └── page.tsx          # Projects listing
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── Footer.tsx            # Footer component
│   ├── MotionWrapper.tsx     # Framer Motion wrapper
│   ├── Navbar.tsx            # Navigation bar
│   └── Skills.tsx            # Skills showcase
├── lib/
│   └── firebase.ts           # Firebase configuration
└── middleware.ts             # Next.js middleware
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Tesfay-Hagos/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Add your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Sections

### Hero Section
- Professional introduction with animated elements
- Call-to-action buttons
- Professional profile image with badges

### Technical Expertise
- Comprehensive skills showcase
- Interactive skill cards with hover effects
- Technology stack visualization

### About Me
- Professional background and experience
- Interactive skill metrics
- Social media links

### Projects Portfolio
- Detailed project showcase with real metrics
- Professional project cards with status indicators
- Technology stack for each project
- Performance metrics and achievements

### Client Testimonials
- Real client feedback from international projects
- Professional references with country flags
- Credibility indicators

### Companies Worked With
- Logo showcase of companies I've collaborated with
- Interactive company cards with website links
- Geographic diversity representation

## 🎨 Design Philosophy

- **Clean & Professional**: Minimalist design focusing on content
- **User-Centric**: Intuitive navigation and user experience
- **Performance First**: Optimized for speed and accessibility
- **Mobile-First**: Responsive design for all screen sizes
- **Accessibility**: WCAG compliant design principles

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: All green scores
- **SEO Score**: 100/100
- **Accessibility**: WCAG AA compliant

## 🔧 Customization

### Adding New Projects
1. Update the projects array in `src/app/projects/page.tsx`
2. Add corresponding project details in `src/app/projects/[slug]/page.tsx`
3. Add project images to `public/images/`

### Updating Content
- Personal information: Update in `src/app/page.tsx`
- Contact details: Update in `src/app/contact/page.tsx`
- Skills: Update in `src/components/Skills.tsx`

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Contact

**Tesfay Hagos**
- Email: tesfay.hagos1421@gmail.com
- Phone: +251 915 297 421
- LinkedIn: [linkedin.com/in/tesfayhagos](https://www.linkedin.com/in/tesfayhagos/)
- GitHub: [github.com/Tesfay-Hagos](https://github.com/Tesfay-Hagos)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this is a personal portfolio, I'm open to suggestions and improvements. Feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by Framer Motion
- Deployed on Vercel

---

**Built with ❤️ by Tesfay Hagos**

*Last updated: January 2025*
