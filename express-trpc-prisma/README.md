# Express Server com Lucia Auth, Prisma, e TRPC

O servidor backend é constrúido usando Express.js, Lucia Auth para autenticação, Prisma para banco de dados ORM, e TRPC para endpoints tipados da API. Usamos MySQL para banco de dados, que pode ser facilmente configurando usando Docker.

## Configurações

### Variáveis de Ambiente

Copie o `.env.example` para o `.env`:

```bash
cp .env.example .env
```

Então, preencha com as suas variáveis de ambiente.

### Instalação Docker

Para instalar o Docker, use o seguinte comando no seu terminal:

```bash
sudo snap install docker
```

### Configurando seu banco de dados

1. Vá até o diretório do seu projeto.
2. Rode o arquivo `start-database.sh` que irá iniciar seu container MySQL:

```bash
sudo ./start-database.sh
```

Esse script irá criar um container MySQL de acordo com as credencias que você colocou no seu `.env`.

### Instalando as dependências

Depois de já ter configurado seu banco de dados, instale agora as dependências usados no seu projeto com o pnpm:

```bash
pnpm install
```

## Uso

Para iniciar seu servidor Express:

```bash
pnpm dev
```

Você pode também rodar o outro script, que irá resetar o banco de dados, no momento não temos nada nele, dar push do schema no nosso container MySQL e então executar a `seed.ts` que irá popular o banco de dados, além de gerar o Prisma Client.

```bash
pnpm db:seed
```

Este comando pnpm irá executar o shell script `reset-db.sh`.
