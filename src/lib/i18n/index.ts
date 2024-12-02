import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'pl';

register('pl', () => import('./locales/pl.json'));
register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale
});
