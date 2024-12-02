// dependencies
import { writable } from 'svelte/store';
////

// types
import type { Toast } from '$lib/stores/types';
////

export const useToastStore = () => {
	const { subscribe, update } = writable<Toast[]>([]);

	return {
		subscribe,
		add: (toastItem: Toast) => {
			update((toasts) => [...toasts, toastItem]);

			setTimeout(() => {
				update((toasts) => toasts.slice(1));
			}, 5000);
		}
	};
};

export const toast = useToastStore();
