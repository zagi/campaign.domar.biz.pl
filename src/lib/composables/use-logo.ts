import { derived } from 'svelte/store';
import { useDark } from '$lib/composables/use-dark';

import logoInverted from '$lib/assets/logo_inverted.png';
import logo from '$lib/assets/logo.png';

export const useLogo = () => {
	const { isDark } = useDark();

	const logoUrl = derived(isDark, ($isDark: boolean) => ($isDark ? logoInverted : logo));

	return { logoUrl };
};
