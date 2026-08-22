# Algerian Streetwear

Production-ready foundation for an Algeria-first streetwear commerce platform.

## Stack

- Next.js + TypeScript
- PostgreSQL / Prisma
- Tailwind CSS
- Zod validation
- Guest COD checkout
- French + Arabic-ready i18n
- Modular storefront/admin architecture

## Development

```bash
npm install
cp .env.example .env
npm run dev
```

## Database

```bash
npx prisma generate
npx prisma migrate dev
npm run db:seed
```

## Production

Set all variables from `.env.example` in the deployment environment before starting the application.
