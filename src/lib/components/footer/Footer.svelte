<script lang="ts">
	// icons
	import MdiBasket from 'virtual:icons/mdi/basket';
	import MdiMapMarker from 'virtual:icons/mdi/map-marker';
	////
	// other
	import { useCurrentYear } from '$lib/composables/use-current-year';
	import { useCompanyName } from '$lib/composables/use-company-name';
	////
	const currentYear = useCurrentYear();
	const companyName = useCompanyName();
</script>

<footer
	class="relative z-10 mb-0 w-full justify-end bg-stone-950 py-4 text-stone-200 sm:rounded-b-lg dark:bg-stone-200 dark:text-stone-950"
>
	<div class="flex flex-col items-center justify-between space-y-4 px-6 lg:flex-row lg:space-y-0">
		<p>© {currentYear} {companyName}</p>
		<div class="flex space-x-4 text-2xl">
			<a
				href="https://sklep-internet.pl"
				target="_blank"
				class="transition-colors hover:text-stone-200 dark:hover:text-stone-400"><MdiBasket /></a
			>
			<a
				href="https://maps.app.goo.gl/APuq4whCSAN15tsT9"
				class="transition-colors hover:text-stone-200 dark:hover:text-stone-400"><MdiMapMarker /></a
			>
		</div>
	</div>
</footer>
