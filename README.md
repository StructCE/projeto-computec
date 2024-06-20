# Projeto Computec - Consulta de eventos e recebimento de notícias

Este projeto foi desenvolvido pela { Struct } para o evento CSBC 2024 e tem como foco a consulta de eventos e recebimento de notícias. É utilizado uma aplicação mobile desenvolvida com Expo estilizada com o auxílio de Tamagui, e um back-end com Express com tRPC, Prisma (MySQL) e Lucia-Auth. O gerenciador de pacotes usado é PNPM.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- mobile: Contém a aplicação front-end desenvolvida com Expo e estilizada com Tamagui.
- express-trpc-prisma: Contém o servidor back-end desenvolvido com Express, tRPC, Prisma e Lucia-Auth.

## Sobre as Tecnologias Utilizadas

### Front-End (mobile)

- Expo: Plataforma para desenvolvimento de aplicativos móveis usando React Native.
- Tamagui: Biblioteca para design de UI no React Native.

### Back-End (express-trpc-prisma)

- Express: Framework web para Node.js.
- tRPC: RPC Framework para TypeScript.
- Prisma: ORM para Node.js e TypeScript com suporte a MySQL.
- Lucia-Auth: Biblioteca de autenticação para Node.JS.

## Instalação

### Clone o repositório

```
git clone https://github.com/StructCE/projeto-computec.git
cd projeto-computec
```

### Instale as dependências

```
cd mobile
pnpm i
cd ../express-trpc-prisma
pnpm i
```

Assim, você terá instalado todos os pacotes usados em ambos projetos (Expo + Express).

## Configurações

No README de cada projeto, há os esclarecimentos necessários para configurações dos projetos.
