# Express Server with Lucia Auth, Prisma, and TRPC

This backend server is built using Express.js, Lucia Auth for authentication, Prisma for database ORM, and TRPC for type-safe API endpoints. It uses a MySQL database, which can be easily set up using Docker. 

## Configurations

### Environment Variables

Copy the `.env.example` file to a `.env` file:

```bash
cp .env.example .env
```

Then, set up the environment variables according to your credentials.

### Docker Installation 

To install Docker, use the following command on your terminal:

```bash
sudo snap install docker
```

### Setting up the Database

1. Navigate to the project directory.
2. Run the `start-database.sh` script to initialize the MySQL database container:

```bash
sudo ./start-database.sh
```

This script will start a Docker container with a MySQL database instance configured according to the settings in the `.env.example` file.

### Installing Dependencies

After setting up the database, install the project dependencies using `pnpm`:

```bash
pnpm install
```

## Usage

To start the Express server:

```bash
pnpm dev
```
