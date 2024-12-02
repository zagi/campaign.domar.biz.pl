<script lang="ts">
	// styles
	import '../app.css';
	////
	// images
	import bg from '$lib/assets/bg.jpg';
	////
	// components
	import BgOverlay from '$lib/components/bg-overlay';
	import Header from '$lib/components/header';
	import Footer from '$lib/components/footer';
	import Toast from '$lib/components/toast';
	import LoadingOverlay from '$lib/components/loading-overlay';
	////
	let { children } = $props();
</script>

<div
	class="flex items-center justify-center bg-gradient-to-b from-gray-400 via-gray-600 to-gray-900 p-0 sm:h-screen sm:p-4"
>
	<LoadingOverlay />
	<div
		style="background-image: url('{bg}')"
		class="animate-fadeIn relative flex flex-col items-start justify-between bg-cover bg-right bg-no-repeat shadow-xl sm:rounded-lg lg:h-full lg:w-full"
	>
		<BgOverlay />

		<Header />
		{@render children()}

		<Toast />

		<Footer />
	</div>
</div>
