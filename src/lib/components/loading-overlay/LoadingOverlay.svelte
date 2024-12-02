<script>
	import { loading } from '$lib/stores/loading';
	import { _ } from 'svelte-i18n';
</script>

{#if $loading}
	<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
		<p class="text-lg text-white">{$_('common.loading')}</p>
	</div>
{/if}
