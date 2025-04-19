# Cyborg IT Website

A modern, performant website built with Next.js and React.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [lang]/            # Language routes
│   ├── about-us/          # About Us page
│   ├── contact-us/        # Contact page
│   ├── it-consulting/     # IT Consulting page
│   ├── legal/             # Legal page
│   └── zoho-consulting/   # Zoho Consulting page
├── components/            # Reusable components
│   ├── optimized/         # Optimized components
│   ├── Header/           # Header component
│   ├── Footer/           # Footer component
│   └── ...              # Other components
├── utils/                # Utility functions and hooks
├── locales/              # Translation files
├── i18n/                 # i18n configuration
└── public/               # Static assets
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file with the following variables:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

3. Run the development server:
```bash
npm run dev
```

## Development Guidelines

### Components
- Place all components in `src/components`
- Use functional components with hooks
- Follow the naming convention: PascalCase for components
- Include PropTypes for all props
- Add JSDoc comments for complex components

### Styling
- Use CSS modules for component-specific styles
- Follow BEM naming convention
- Use Tailwind CSS for utility classes
- Keep styles close to components

### Testing
- Write tests for all components
- Use Jest and React Testing Library
- Follow the test file naming convention: `ComponentName.test.jsx`
- Run tests: `npm test`
- Run tests with coverage: `npm test -- --coverage`

### Internationalization
- All text should be in translation files
- Use the `useTranslation` hook
- Follow the translation key structure: `component.section.element`

### Performance
- Use `next/image` for images
- Implement proper loading states
- Use Suspense for code splitting
- Optimize bundle size

### Error Handling
- Use error boundaries for component errors
- Implement proper error states
- Log errors appropriately

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run lint` - Run linter
- `npm run test:coverage` - Run tests with coverage

## Contributing

1. Create a feature branch
2. Make your changes
3. Write tests
4. Submit a pull request

## License

MIT
