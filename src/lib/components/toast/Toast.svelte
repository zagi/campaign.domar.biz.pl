<script lang="ts">
	import { toast } from '$lib/stores/toast';
	import { fade } from 'svelte/transition';
</script>

<div class="fixed right-0 top-0 z-50 m-4 space-y-4">
	{#each $toast as { message, type }, index (message)}
		<div class="rounded p-4 shadow-lg {type}" transition:fade={{ duration: 300 }} key={message}>
			{message}
		</div>
	{/each}
</div>

<style>
	.success {
		background-color: #4caf50;
		color: white;
	}
	.error {
		background-color: #f44336;
		color: white;
	}
	.info {
		background-color: #2196f3;
		color: white;
	}
</style>
