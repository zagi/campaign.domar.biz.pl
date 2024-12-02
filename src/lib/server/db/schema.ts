import { mysqlTable, varchar, text, boolean } from 'drizzle-orm/mysql-core';

export const contactTable = mysqlTable('contacts', {
	id: varchar('id', { length: 36 }).primaryKey(), // UUID or any unique identifier
	name: text('name').notNull(),
	email: text('email').notNull(),
	phone: varchar('phone', { length: 15 }), // Adjust length as needed
	message: text('message').notNull(),
	privacy: boolean('privacy').notNull()
});
