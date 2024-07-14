FROM node:current

RUN npm install -g pnpm prisma tsx

WORKDIR /usr/src/app
COPY ./express-trpc-prisma/package.json ./express-trpc-prisma/pnpm-lock.yaml ./
RUN pnpm install
COPY ./express-trpc-prisma .

RUN chmod +x ./start.sh

CMD ["./start.sh"]
