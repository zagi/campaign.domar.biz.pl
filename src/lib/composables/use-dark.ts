// dependencies
import { writable, type Writable } from 'svelte/store';
import { onDestroy, onMount } from 'svelte';
////

// types
import { MediaQuery } from '$lib/enums/media';
import { EventName } from '$lib/enums/event';
////

export const useDark = () => {
	const isDark: Writable<boolean> = writable(false);
	let unSubscribe: () => void = () => {};

	const sync = (): (() => void) => {
		const darkModeQuery = window.matchMedia(MediaQuery.DARK_MODE);

		isDark.set(darkModeQuery.matches);

		const handleChange = (e: MediaQueryListEvent) => isDark.set(e.matches);
		darkModeQuery.addEventListener(EventName.CHANGE, handleChange);

		return () => darkModeQuery.removeEventListener(EventName.CHANGE, handleChange);
	};

	onMount(() => {
		unSubscribe = sync();
	});

	onDestroy(() => {
		unSubscribe();
	});

	return {
		isDark
	};
};
