# knivstamoske.se

This repository contains the source code for the knivstamoske.se website.

## Tech Stack

This project is built with:

- **[SvelteKit](https://kit.svelte.dev/)** - Full-stack web framework with server-side rendering
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Inlang Paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)** - Internationalization (i18n) library
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Deployment platform

## Features

- 🌍 **Multilingual support** - Available in Swedish (sv), English (en), and Arabic (ar)
- 📱 **Mobile friendly design** - Mobile-first approach with TailwindCSS
- 📝 **Markdown support** - MDsveX for rich content authoring
- 🚀 **Automated deployment** - CI/CD with GitHub Actions to Cloudflare

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later)
- [Yarn](https://yarnpkg.com/) (version 4.9.2 or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/knivstamoske/knivstamoske.se.git
   cd knivstamoske.se
   ```

2. Install dependencies:

   ```sh
   yarn install
   ```

3. Start the development server:
   ```sh
   yarn dev
   ```

The application will be available at `http://localhost:5173`

## Development

### Project Structure

```
├── src/
│   ├── lib/
│   │   └── i18n/           # Internationalization setup
│   ├── routes/             # SvelteKit routes
│   ├── app.html           # HTML template
│   └── app.css            # Global styles
├── i18n/
│   ├── messages/          # Translation files (sv, en, ar)
│   └── project.inlang/    # Inlang configuration
├── static/                # Static assets
└── ...config files
```

### Internationalization

The project supports three languages:

- **Swedish (sv)** - Base locale
- **English (en)**
- **Arabic (ar)**

Translation files are located in `i18n/messages/` and managed with Inlang.

## Building

To create a production version of the app:

```sh
yarn build
```

The build artifacts will be generated in the `build/` directory, optimized for Cloudflare Pages deployment.

## Deployment

This project is configured for automatic deployment to Cloudflare Pages using GitHub Actions:

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`yarn check && yarn lint`)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

This project is private and proprietary to Islamiska Kulturcenter Knivsta.

## Support

For questions or support, please open an issue in this repository.
