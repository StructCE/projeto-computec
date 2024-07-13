FROM node:current

RUN npm install -g pnpm

WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .

RUN pnpm install -g prisma tsx
RUN chmod +x ./start.sh

CMD ["./start.sh"]