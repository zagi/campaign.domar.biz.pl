<script lang="ts">
	// utils
	import { useLogo } from '$lib/composables/use-logo';
	////

	const { logoUrl } = useLogo();
</script>

<img src={$logoUrl} alt="Logo" class="animate-slideDown h-14 lg:h-16" />
