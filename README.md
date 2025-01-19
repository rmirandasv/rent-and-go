# Rent and Go (Frontend)

Frontend for the [Rent and Go](https://github.com/rmirandasv/rent-and-go-backend) car rental web application, built with [Next.js](https://nextjs.org).

Rent and Go is an open-source project that enables users to browse and rent cars, manage bookings, and explore car brands and models through a modern, user-friendly interface.

## Key Features

- **Server-Side Rendering (SSR)**: Optimized for SEO and performance.
- **Dynamic Components**: Built with a combination of server and client components for an efficient and dynamic user experience.
- **Modern UI**: Styled with [Tailwind CSS](https://tailwindcss.com) and extended using [shadcn/ui](https://ui.shadcn.dev).
- **TypeScript First**: Ensures type safety and reliability.
- **Integration with Strapi**: Powered by a Strapi backend for content management.

## Installation

To run the project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/rmirandasv/rent-and-go.git
cd rent-and-go
```

### 2. Install dependencies
Ensure you have [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) installed. Then, run:

```bash
npm install
# or
yarn install
```

### 3. Configure environment variables
Create a `.env` file in the root directory and configure the following environment variables:

```env
STRAPI_URL=http://localhost:1337
STRAPI_API_URL=http://localhost:1337/api
STRAPI_API_TOKEN=
```

### 4. Run the development server
Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

---

## Deployment

To build and deploy the application, use the following commands:

### Build the project
```bash
npm run build
# or
yarn build
```

### Start the production server
```bash
npm run start
# or
yarn start
```

---

## Technologies Used

- **[Next.js](https://nextjs.org)**: The React framework for production.
- **[TypeScript](https://www.typescriptlang.org)**: For static typing.
- **[Tailwind CSS](https://tailwindcss.com)**: Utility-first CSS framework.
- **[shadcn/ui](https://ui.shadcn.dev)**: Component library for modern and accessible UI.
- **[Strapi](https://strapi.io)**: Headless CMS powering the backend.

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.dev)
- [Strapi Documentation](https://docs.strapi.io)

---

If you have any questions or feedback, feel free to open an issue. Happy coding! 🚗✨

