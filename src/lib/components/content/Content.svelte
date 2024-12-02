<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="animate-fadeIn relative z-10 m-auto mb-5 mt-5 w-full px-6 text-left lg:w-4/5">
	<h1 class="text-4xl font-bold leading-tight text-stone-950 md:text-6xl dark:text-stone-200">
		{$_('content.main.title')}
	</h1>
	<p class="mt-4 text-lg font-medium leading-tight text-stone-950 md:text-2xl dark:text-stone-200">
		{$_('content.main.sub-title')}
	</p>
</div>
