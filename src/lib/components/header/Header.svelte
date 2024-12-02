<script lang="ts">
	// components
	import Logo from '../logo';
	////
	// others
	import { usePhoneNumber } from '$lib/composables/use-phone-number';
	////

	const phoneNumber = usePhoneNumber();
</script>

<div class="relative z-10 flex w-full items-center justify-between px-6 py-6 md:p-6">
	<!-- Logo -->
	<Logo />

	<!-- Phone Button -->
	<a
		href="tel:{phoneNumber}"
		class="text-md rounded-3xl bg-stone-950 px-6 py-1 font-semibold text-stone-200 shadow-xl transition-colors duration-300 ease-in hover:bg-stone-800 hover:text-white md:text-lg dark:bg-stone-200 dark:text-stone-950"
	>
		{phoneNumber}
	</a>
</div>
