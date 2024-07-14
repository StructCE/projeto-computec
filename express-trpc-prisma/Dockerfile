FROM node:current

RUN npm install -g pnpm prisma tsx

WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .

RUN chmod +x ./express-trpc-prisma/start.sh

CMD ["./express-trpc-prisma/start.sh"]
