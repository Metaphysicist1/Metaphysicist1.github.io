# Edgar Abasov - Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- Modern and responsive design
- Interactive timeline for experience
- Skills showcase
- Project portfolio
- Contact form with validation
- Smooth scrolling navigation
- Mobile-friendly menu
- Animations and transitions

## Customization Instructions

### 1. Personal Information

Update your personal information in the `index.html` file:

- Name and title in the header section
- About Me text in the about section
- Experience details in the timeline
- Skills in the skills section
- Project descriptions and images
- Contact information

### 2. Images

Replace the placeholder images with your own:

- `profile-image.jpg` - Your profile picture
- `header-bg.jpg` - Background for the header section
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project screenshots

### 3. Colors and Styling

Customize the color scheme in the `styles.css` file by modifying the root variables:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --dark-color: #1f2937;
  --light-color: #f3f4f6;
  /* other variables */
}
```

### 4. Social Links

Update your social media links in the HTML file:

```html
<div class="social-links">
  <a href="https://www.linkedin.com/in/edgar-abasov/" target="_blank"
    ><i class="fab fa-linkedin"></i
  ></a>
  <a href="https://github.com/Metaphysicist1" target="_blank"
    ><i class="fab fa-github"></i
  ></a>
  <!-- Add or remove social links as needed -->
</div>
```

## Deployment Instructions

### GitHub Pages Deployment

1. Push your code to your GitHub repository (username.github.io)
2. Go to repository Settings > Pages
3. Select the main branch as the source
4. Your website will be published at https://username.github.io

### Alternative Hosting Options

#### Netlify

1. Sign up for a free Netlify account
2. Click "New site from Git"
3. Connect your GitHub repository
4. Follow the deployment instructions

#### Vercel

1. Sign up for a free Vercel account
2. Import your GitHub repository
3. Configure the deployment settings
4. Deploy

## Local Development

1. Clone the repository
2. Open the project folder in your code editor
3. Use a local development server like Live Server (VS Code extension) to preview the site

## Contact Form Setup

To make the contact form functional, you need to add backend functionality:

1. **Using Formspree:**

   - Sign up at [formspree.io](https://formspree.io)
   - Update the form action in `index.html`:

   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST"></form>
   ```

2. **Using Netlify Forms:**
   - Add the `netlify` attribute to your form tag:
   ```html
   <form name="contact" netlify></form>
   ```

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images (if used)

## License

This project is available as open source under the terms of the MIT License.
