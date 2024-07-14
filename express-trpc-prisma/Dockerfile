FROM node:current

RUN npm install -g pnpm prisma tsx

WORKDIR /usr/src/app
COPY ./express-trpc-prisma .
RUN pnpm install

RUN chmod +x ./start.sh

CMD ["./start.sh"]
