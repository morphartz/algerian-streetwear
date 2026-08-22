# Admin Setup

The application requires a real admin authentication provider before production admin credentials can be activated.

Planned initial account:

- Email: admin@morphzy.store
- Password: MorphzyAdmin#2026!

Do not hard-code these credentials into client-side code or source control. Store the initial password as a secure deployment secret and create the account through the authentication provider.

Admin URL: /admin/login
