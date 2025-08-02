<script lang="ts">
	import { getPrayerTimes } from '@thani-sh/prayer-time-se';
	import Hero from './(components)/Hero.svelte';
	import Prayers from './(sections)/prayers/Prayers.svelte';
	import Services from './(sections)/services/Services.svelte';
	import Upcoming from './(sections)/upcoming/Upcoming.svelte';
	import Support from './(sections)/support/Support.svelte';
	import Contact from './(sections)/contact/Contact.svelte';
</script>

<svelte:head>
	<title>Islamiska Kulturcenter Knivsta</title>
	<meta
		name="description"
		content="En plats för bön, lärande och gemenskap där alla är välkomna i Knivsta"
	/>
</svelte:head>

<main>
	<!-- Hero section -->
	<Hero />

	<!-- Mobile only -->
	<div class="container mx-auto flex flex-col gap-4 px-4 py-8 lg:hidden">
		{#await getPrayerTimes() then prayerTimes}
			<Prayers prayerTimesData={prayerTimes} />
		{/await}
		<Services />
		<Upcoming />
		<Support />
		<Contact />
	</div>

	<!-- Medium to large displays -->
	<div class="container mx-auto hidden py-12 lg:block">
		<div class="flex flex-row gap-8">
			<div class="flex-1 space-y-8">
				<Services />
				<Upcoming />
			</div>
			<aside class="w-96 space-y-8">
				{#await getPrayerTimes() then prayerTimes}
					<Prayers prayerTimesData={prayerTimes} />
				{/await}
				<Support />
				<Contact />
			</aside>
		</div>
	</div>
</main>
