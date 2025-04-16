# Edgar Abasov - Data Science Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript, specifically designed for Data Scientists and AI Engineers to showcase their skills and projects.

## Features

- **Modern Design** - Clean, professional aesthetics with a focus on data science presentation
- **Interactive Elements** - Animated skill bars, project filtering, and scroll effects
- **Responsive Layout** - Looks great on all devices from mobile to desktop
- **Project Showcase** - Categorized project display with filtering by type
- **Skills Visualization** - Visual representation of technical proficiencies
- **Experience Timeline** - Interactive timeline for professional experience
- **Education Section** - Display academic background and qualifications
- **Contact Form** - Integrated with Formspree for easy setup
- **SEO Optimized** - Meta tags and structure designed for better search visibility

## Customization Guide

### 1. Personal Information

Update your personal information in the `index.html` file:

- **Header Section**: Update your name, title, and short description
- **About Section**: Modify your bio, location, and statistics
- **Experience Section**: Update your work history with relevant skills
- **Skills Section**: Adjust skill levels to match your expertise
- **Projects Section**: Add your own projects with descriptions and links
- **Education Section**: Update with your educational background
- **Contact Section**: Change email and location

### 2. Images

The portfolio requires several images for a professional appearance:

- `profile-image.jpg` - Your professional headshot (ideally 400×400px with a 1:1 ratio)
- `header-bg.jpg` - Background for the header section (high-resolution, dark image recommended)
- Project images (named based on project, e.g., `project-diamond.jpg`):
  - `project-diamond.jpg`
  - `project-churn.jpg`
  - `project-credit.jpg`
  - `project-coverbot.jpg`
  - `project-food.jpg`
  - `project-dogcat.jpg`
  - `project-ner.jpg`
  - `project-stamo.jpg`

All project images should be 16:9 ratio (e.g., 800×450px) for consistent layout.

### 3. Colors and Styling

The portfolio uses a color scheme that's suitable for data science. You can customize it by modifying the root variables in the `styles.css` file:

```css
:root {
  --primary-color: #4361ee; /* Primary brand color */
  --secondary-color: #3a0ca3; /* Secondary brand color */
  --accent-color: #7209b7; /* Accent color for highlights */
  --light-accent: #4cc9f0; /* Light accent for contrast */
  --dark-color: #0f172a; /* Dark backgrounds */
  --dark-secondary: #1e293b; /* Secondary dark shade */
  --light-color: #f8fafc; /* Light backgrounds */
  --gray-color: #64748b; /* Text in lighter gray */
  /* Other variables... */
}
```

### 4. Projects and Filtering

The portfolio includes a filtering system for projects. Each project card has a `data-category` attribute:

```html
<div class="project-card" data-category="ml">
  <!-- Project content -->
</div>
```

Possible categories in the default setup are:

- `ml` - Machine Learning
- `nlp` - NLP & LLMs
- `viz` - Data Visualization
- `cv` - Computer Vision

You can modify these categories in both the filter buttons and project cards to match your own specialties.

### 5. Social Links

Update your social media links in the HTML file:

```html
<div class="social-links">
  <a
    href="https://www.linkedin.com/in/edgar-abasov/"
    target="_blank"
    class="social-link"
    ><i class="fab fa-linkedin"></i
  ></a>
  <a
    href="https://github.com/Metaphysicist1"
    target="_blank"
    class="social-link"
    ><i class="fab fa-github"></i
  ></a>
  <!-- More social links -->
</div>
```

### 6. Contact Form Setup

The contact form is set up to use Formspree:

1. Sign up for a free account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace the form action in `index.html`:

```html
<form action="https://formspree.io/f/your-form-id" method="POST"></form>
```

### 7. CV/Resume

Add your CV/resume as a PDF file named `Edgar_Abasov_DataScientist_CV.pdf` in the root folder for the "Download CV" button to work.

## Advanced Customization

### Custom Animations

The website uses several CSS and JavaScript animations. You can adjust these in:

1. The CSS file under various section styles
2. The JavaScript file in the animation functions
3. The CSS code block at the end of the JavaScript file

### Project Cards Structure

Each project card follows this structure:

```html
<div class="project-card" data-category="category">
  <div class="project-image">
    <img src="project-image.jpg" alt="Project Name" />
  </div>
  <div class="project-info">
    <h3>Project Title</h3>
    <p>
      Project description that explains what you built and its key features.
    </p>
    <div class="project-tags">
      <span>Technology 1</span>
      <span>Technology 2</span>
      <!-- More technologies -->
    </div>
    <div class="project-links">
      <a
        href="https://github.com/yourusername/project"
        class="btn project-btn"
        target="_blank"
      >
        <i class="fab fa-github"></i> View Code
      </a>
      <a href="https://demo-link.com" class="btn project-btn" target="_blank">
        <i class="fas fa-external-link-alt"></i> Live Demo
      </a>
    </div>
  </div>
</div>
```

### Adding Custom Sections

To add a new section:

1. Create the HTML structure in `index.html`
2. Add the corresponding CSS in `styles.css`
3. Add any required JavaScript functionality in `script.js`
4. Update the navigation menu with the new section link

## Deployment

### GitHub Pages

1. Make sure your repository is named `yourusername.github.io`
2. Push all files to this repository
3. GitHub will automatically deploy your website to `https://yourusername.github.io`

### Alternative Hosting

The website is static and can be deployed on any static hosting service:

- **Netlify**: Upload directly or connect to your GitHub repository
- **Vercel**: Import from GitHub for automatic deployment
- **Amazon S3**: Upload files for static website hosting
- **CloudFlare Pages**: Connect to your GitHub repository

## Customization Tips for Data Scientists

1. **Focus on Data Visualization**: If you have interactive visualizations, consider embedding them or linking to Observable notebooks
2. **Jupyter Notebooks**: For data science projects, link to GitHub repositories with Jupyter notebooks
3. **Technical Details**: Include more technical details in your project descriptions to showcase your expertise
4. **Research Papers**: If you've published papers, consider adding a publications section
5. **Certifications**: Add a section for data science certifications (AWS, Google Cloud, etc.)

## Optimization

- Compress all images using a tool like [TinyPNG](https://tinypng.com/)
- Consider using WebP format for images for better performance
- Minify the CSS and JavaScript files for production using a tool like [MinifyCode](https://www.minifycode.com/)

## Browser Compatibility

The portfolio is designed to work on modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Formspree](https://formspree.io/) for form handling

## License

This project is available as open source under the terms of the MIT License.

---

Created with 💙 for Data Scientists and AI Engineers
