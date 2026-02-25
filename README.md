# Olamilekan Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- **Contact Form**: Integrated with Formspree for email notifications
- **Newsletter Signup**: Connected to ConvertKit for subscriber management
- **Responsive Design**: Optimized for all devices
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Fast Performance**: Powered by Vite

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Email Services**: Formspree (contact), ConvertKit (newsletter)
- **Deployment**: Netlify

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Deployment

This project is configured for deployment on Netlify. Connect your GitHub repository to Netlify for automatic deployments.

## Environment Variables

Create a `.env` file in the root directory with your API keys:

```
# Formspree endpoint for contact form
# Replace with your Formspree form URL
```

Note: Newsletter is handled by ConvertKit embed, no API key needed in env.

## License

This project is open source and available under the [MIT License](LICENSE).
