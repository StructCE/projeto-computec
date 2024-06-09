import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma"
import { db } from "../db";
import { GitHub } from "arctic"

export const adapter = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: process.env.NODE_ENV === "production"
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			id: attributes.id,
			name: attributes.name,
			email: attributes.email
		};
	}
});

export const github = new GitHub(process.env.GITHUB_CLIENT_ID!, process.env.GITHUB_CLIENT_SECRET!);

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	id: string;
	name: string;
	email: string;
}