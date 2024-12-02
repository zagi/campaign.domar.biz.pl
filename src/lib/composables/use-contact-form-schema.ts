import { z } from 'zod';
import { unwrapFunctionStore, format } from 'svelte-i18n';

export const useContactFormSchema = (extend = {}) => {
	const $format = unwrapFunctionStore(format);

	const baseSchema = z.object({
		name: z.string().min(1, { message: $format('form.errors.required') }),
		email: z
			.string()
			.email({ message: $format('form.errors.invalid-email') })
			.min(1, {
				message: $format('form.errors.required')
			}),
		phone: z
			.string()
			.regex(/^\+?[1-9]\d{1,14}$/, { message: $format('form.errors.invalid-phone') }),
		message: z.string().min(1, { message: $format('form.errors.required') }),
		privacy: z.literal(true, {
			errorMap: () => ({ message: $format('form.errors.privacy-required') })
		})
	});

	return baseSchema.extend(extend);
};
