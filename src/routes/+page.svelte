<script lang="ts">
	// dependencies
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	import { fade } from 'svelte/transition';
	////
	// icons
	import MdiArrowUp from 'virtual:icons/mdi/arrow-up';
	////
	// components
	import MainContent from '$lib/components/content';
	import { Tooltip } from '@svelte-plugins/tooltips';
	////
	// others
	import { useCompanyName } from '$lib/composables/use-company-name';
	import { useCompanyCity } from '$lib/composables/use-company-city';
	import { useContactFormSchema } from '$lib/composables/use-contact-form-schema';
	////
	// stores
	import { loading } from '$lib/stores/loading';
	import { toast } from '$lib/stores/toast';
	////

	import { _ } from 'svelte-i18n';

	const companyName = useCompanyName();
	const city = useCompanyCity();

	const schema = useContactFormSchema();

	const { form, errors, isSubmitting } = createForm({
		onSubmit: async (values) => {
			loading.set(true);

			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values)
			});

			loading.set(false);

			if (response.ok) {
				toast.add({ message: $_('common.success'), type: 'success' });
			} else {
				const errorData = await response.json();
				toast.add({ message: $_('common.error'), type: 'error' });
			}
		},
		extend: validator({ schema })
	});

	const fields = [
		{
			name: 'name',
			type: 'text',
			labelKey: 'form.label.name',
			placeholder: '',
			required: true
		},
		{
			name: 'email',
			type: 'email',
			labelKey: 'form.label.e-mail',
			placeholder: '',
			required: true
		},
		{
			name: 'phone',
			type: 'tel',
			labelKey: 'form.label.phone-number',
			placeholder: ''
		},
		{
			name: 'message',
			type: 'textarea',
			labelKey: 'form.label.message',
			placeholder: '',
			rows: 4
		}
	];
</script>

<MainContent />

<div class="relative z-10 m-auto mb-5 mt-5 w-full px-6 lg:w-4/5">
	<form class="animate-fadeIn" use:form>
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
			{#each fields as field (field.name)}
			<label class="group block">
				<span
					class="text-md font-medium text-stone-950 transition duration-300 ease-in group-focus-within:text-stone-200 md:text-lg dark:text-stone-200 dark:group-focus-within:text-stone-950"
				>
					{$_(field.labelKey)}
				</span>
				{#if field.type === 'textarea'}
					<textarea
						name={field.name}
						rows={field.rows}
						class={`text-md mt-0 block w-full border-0 border-b-2 bg-transparent px-0.5 font-medium transition duration-300 ease-in focus:ring-0 md:text-lg ${$errors[field.name] ? 'border-red-500 text-red-500 focus:border-red-500' : 'border-stone-950 text-stone-950 focus:border-stone-200 focus:text-stone-200 dark:border-stone-200 dark:text-stone-200 dark:focus:border-stone-950 dark:focus:text-stone-200'}`}
						placeholder={field.placeholder}
					></textarea>
				{:else}
					<input
						name={field.name}
						type={field.type}
						required={field.required}
						class={`text-md mt-0 block w-full border-0 border-b-2 bg-transparent px-0.5 font-medium transition duration-300 ease-in focus:ring-0 md:text-lg ${$errors[field.name] ? 'border-red-500 text-red-500 focus:border-red-500' : 'border-stone-950 text-stone-950 focus:border-stone-200 focus:text-stone-200 dark:border-stone-200 dark:text-stone-200 dark:focus:border-stone-950 dark:focus:text-stone-200'}`}
						placeholder={field.placeholder}
					/>
				{/if}
				<!-- Errors -->
				{#if $errors[field.name]}
					{#each $errors[field.name] as error}
						<p class="italic text-red-500">{error}</p>
					{/each}
				{/if}
			</label>
		{/each}
		</div>

		<div class="mt-6">
			<label class="group block">
				<div class="inline-flex items-center">
					<input
						name="privacy"
						type="checkbox"
						class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 shadow transition-all checked:border-slate-800 checked:bg-slate-800 hover:shadow-md"
					/>
					<Tooltip
						content={$_('form.privacy', { values: { companyName, city } })}
						maxWidth="500"
						position="top"
					>
						<div class="text-md ml-2 font-medium text-stone-950 dark:text-stone-200">
							{$_('form.label.privacy')}
						</div>
						{#if $errors.privacy}
							<p class="ml-2 italic text-red-500">{$errors.privacy}</p>
						{/if}
					</Tooltip>
				</div>
			</label>
		</div>

		<!-- Submit Button -->
		<div class="mt-6">
			<button
				disabled={$isSubmitting}
				type="submit"
				class="text-md flex items-center justify-between rounded-2xl bg-stone-950 px-6 py-1 font-semibold text-stone-200 transition-colors duration-300 ease-in hover:bg-stone-800 hover:text-white disabled:cursor-not-allowed disabled:bg-stone-600 disabled:text-stone-200 md:text-lg dark:bg-stone-200 dark:text-stone-950 disabled:dark:bg-stone-400 disabled:dark:text-stone-800"
			>
				{$_('form.button.send')}
				<MdiArrowUp />
			</button>
		</div>
	</form>
</div>
