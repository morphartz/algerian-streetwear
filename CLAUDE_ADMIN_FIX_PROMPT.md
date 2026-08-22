Use the following task to repair and complete the Algerian Streetwear project.

PROJECT
Repository: https://github.com/morphartz/algerian-streetwear
Deployment: https://algerian-streetwear-ltxp.vercel.app

PRIMARY OBJECTIVE
Make the admin authentication actually work in production and make the admin dashboard genuinely control the storefront. Do not create mock buttons, fake data-only screens, or placeholder login behavior.

CURRENT KNOWN ISSUE
The previous implementation used Vercel environment variables ADMIN_EMAIL, ADMIN_PASSWORD_HASH and AUTH_SECRET. The user does not want to upgrade Vercel just to use this setup. Replace this with a proper database-backed authentication solution that works on the current Vercel plan, preferably Supabase Auth + PostgreSQL, while preserving the existing Prisma architecture where practical.

ADMIN LOGIN REQUIREMENTS
1. Route: /admin/login
2. Real authentication, not a GET form that simply redirects.
3. Use Supabase Auth or another production-grade managed auth provider available on the free tier.
4. Owner account must be created/configurable without putting a plaintext password in source control.
5. Initial intended owner email: admin@morphzy.store
6. Initial intended password: MorphzyAdmin#2026!
7. Never commit plaintext credentials, hashes, service-role keys, or secrets to Git.
8. Login must create a secure authenticated session.
9. Protected /admin route must reject unauthenticated users and redirect to /admin/login.
10. Add logout.
11. Add server-side authorization checks.
12. Add RBAC roles: OWNER, ADMIN, DESIGNER, PRODUCTION, ORDER_MANAGER.
13. OWNER must have full access.
14. Use secure cookies/session handling through the auth provider.
15. Do not trust client-side authorization.
16. Validate login input and show customer-safe errors.
17. Add loading, success and failure states.

ADMIN FUNCTIONAL REQUIREMENTS
The admin must control the website without source-code edits:
- Products: create/edit/delete/publish/unpublish
- Categories: create/edit/delete/hide/reorder/nested categories
- Collections
- Product variants, colors, sizes, SKUs, stock
- Color-specific product images
- Homepage sections: add/remove/edit/duplicate/hide/reorder/publish
- Theme: logo, favicon, colors, fonts, header, footer, buttons
- Orders: list/search/filter/view/update status/add notes/change delivery details
- Customers
- Inventory + low stock
- Promotions and coupon codes
- Delivery rates for Algeria
- Customization requests
- Design library
- Lookbooks
- Basic analytics
- Site settings

DATABASE
Use PostgreSQL/Supabase. Keep schema normalized and maintainable.
Required core tables/entities should include at minimum:
AdminUser or auth-linked profile, roles/permissions, Products, ProductVariants, ProductImages, Categories, Collections, Customers, Orders, OrderItems, Inventory, Promotions, DiscountCodes, HomepageSections, Themes, ShippingZones, ShippingRates, CustomizationOrders, Designs, SiteSettings.

STORE CHECKLIST
The storefront must support:
- French + Arabic-ready localization
- RTL
- Algeria-first COD checkout
- Guest checkout
- Wilaya + commune + address
- Delivery fee calculation
- Order tracking by order number + phone
- Product gallery
- Color switching with correct image set
- Size availability
- Cart
- Wishlist
- Recently viewed
- Search and filtering
- Customization route
- Responsive mobile-first UI

SECURITY
- No secrets in source control.
- No service-role key on the client.
- Validate uploads and inputs server-side.
- Protect admin APIs and routes server-side.
- Use proper Supabase RLS policies when Supabase is used.
- Never expose customer artwork publicly unless intentionally configured.

DEPLOYMENT
The project deploys on Vercel. Do not require Vercel Pro solely for authentication.
Use environment variables only for legitimate public/config and private server secrets.
Add/update .env.example with placeholders only.
Make sure the app can build in Vercel with no database generation error.

TESTING / QA
Before declaring done:
1. Run TypeScript checks.
2. Run lint/build.
3. Verify Prisma/Supabase generation does not break Vercel.
4. Verify /admin/login works.
5. Verify invalid credentials fail.
6. Verify correct credentials authenticate.
7. Verify /admin is protected.
8. Verify logout works.
9. Verify OWNER access.
10. Verify at least one real admin CRUD workflow, e.g. create product -> publish -> appears on storefront.
11. Verify order creation and visibility in admin.
12. Verify deployment build succeeds.

IMPORTANT
Do not claim completion if anything is mocked or placeholder. Fix actual errors. Keep the existing project structure where sensible. Make reasonable technical decisions without asking unnecessary questions.

DELIVERABLE
After making changes:
- Commit all fixes.
- Ensure main is deployable.
- Provide a concise summary of what was changed.
- State exactly what environment variables the user must set in Supabase/Vercel, without exposing secrets.
- Provide the final admin URL: https://algerian-streetwear-ltxp.vercel.app/admin/login
