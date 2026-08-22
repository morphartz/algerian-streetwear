import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const products = [
    { name: "Oversized Tee 001", slug: "oversized-tee-001", price: 3900, featured: true },
    { name: "Football Culture Tee", slug: "football-culture-tee", price: 4500, featured: true },
    { name: "Heavyweight Hoodie", slug: "heavyweight-hoodie", price: 6900, featured: true },
    { name: "Utility Cargo", slug: "utility-cargo", price: 7900, featured: false },
  ]

  for (const product of products) {
    const record = await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: { ...product, description: "Algerian streetwear / unisex.", variants: {
        create: [
          { color: "Black", size: "M", sku: `${product.slug}-black-m`, stock: 10 },
          { color: "Black", size: "L", sku: `${product.slug}-black-l`, stock: 8 },
          { color: "White", size: "M", sku: `${product.slug}-white-m`, stock: 6 },
        ],
      } },
    })
    console.log(`Seeded ${record.name}`)
  }
}

main().finally(() => prisma.$disconnect())
