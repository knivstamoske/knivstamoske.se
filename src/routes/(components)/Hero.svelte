<script lang="ts">
	import { Sparkles } from 'lucide-svelte';
	import { getPrayerTimes } from '@thani-sh/prayer-time-se';
	import Prayers from './Prayers.svelte';
	import placeholderImage from './assets/placeholder.jpg';
</script>

<section class="relative flex min-h-[80vh] items-center overflow-hidden py-24 lg:hidden">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img
			src={placeholderImage}
			alt="Islamiska Kulturcenter Knivsta interior"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
		></div>
	</div>

	<div class="relative z-10 container mx-auto px-4">
		<div class="mx-auto max-w-5xl text-center">
			<div
				class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm"
			>
				<Sparkles class="h-4 w-4 text-white" />
				<span class="font-medium text-white">Välkommen till vår gemenskap</span>
			</div>

			<h1 class="mb-6 text-4xl leading-tight font-bold text-white drop-shadow-lg md:text-6xl">
				Islamiska Kulturcenter Knivsta
			</h1>
		</div>
	</div>
</section>

<section id="home" class="relative hidden items-center overflow-hidden py-24 lg:flex">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img
			src={placeholderImage}
			alt="Islamiska Kulturcenter Knivsta interior"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
		></div>
	</div>

	<div class="relative z-10 container mx-auto h-full px-4">
		<div class="flex h-full flex-row gap-8">
			<!-- Left side - Text content -->
			<div class="flex flex-1 flex-col justify-start pt-16">
				<div
					class="mb-8 inline-flex items-center gap-2 self-start rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm"
				>
					<Sparkles class="h-4 w-4 text-white" />
					<span class="font-medium text-white">Välkommen till vår gemenskap</span>
				</div>

				<h1 class="mb-6 text-4xl leading-tight font-bold text-white drop-shadow-lg md:text-6xl">
					Islamiska Kulturcenter Knivsta
				</h1>
			</div>

			<!-- Right side - Prayer times -->
			<aside class="flex w-96 items-center">
				{#await getPrayerTimes() then prayerTimes}
					<Prayers prayerTimesData={prayerTimes} />
				{/await}
			</aside>
		</div>
	</div>
</section>
