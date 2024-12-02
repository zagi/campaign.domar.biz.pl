// dependencies
import { json, error } from '@sveltejs/kit';
import * as z from 'zod';
import { db } from '$lib/server/db';
import { contactTable } from '$lib/server/db/schema';

////

// types
import type { RequestHandler } from './$types';
////

// others
import { useContactFormSchema } from '$lib/composables/use-contact-form-schema';
////

export const POST: RequestHandler = async ({ request }) => {
	try {
		const schema = useContactFormSchema();

		const formData = await request.json();

		const parsedData = schema.parse(formData);

		await db.insert(contactTable).values({
			id: crypto.randomUUID(),
			name: parsedData.name,
			email: parsedData.email,
			phone: parsedData.phone,
			message: parsedData.message,
			privacy: parsedData.privacy
		});

		return json({ success: true });
	} catch (err) {
		if (err instanceof z.ZodError) {
			return json({ success: false, errors: err.flatten() }, { status: 400 });
		}

		throw error(500, 'API ERROR');
	}
};
