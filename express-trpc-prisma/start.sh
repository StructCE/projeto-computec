# !/bin/sh
# prisma db push --skip-generate
prisma db push --skip-generate --force-reset
tsx prisma/seed.ts
tsx src/server.ts