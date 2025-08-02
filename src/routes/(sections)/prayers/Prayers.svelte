<script lang="ts">
	import { Sun, Sunset, Moon } from 'lucide-svelte';

	const prayerTimes = [
		{ name: 'Fajr', adhan: '05:30', prayer: '05:40', icon: Moon },
		{ name: 'Dhuhr', adhan: '12:15', prayer: '12:25', icon: Sun },
		{ name: 'Asr', adhan: '15:45', prayer: '15:55', icon: Sun },
		{ name: 'Maghrib', adhan: '18:20', prayer: '18:30', icon: Sunset },
		{ name: 'Isha', adhan: '20:00', prayer: '20:10', icon: Moon }
	];
</script>

<section id="prayer-times" class="rounded-2xl bg-white py-8">
	<div class="px-8 lg:flex lg:flex-col">
		<div class="mb-8">
			<h2 class="mb-4 text-2xl font-bold text-gray-900">Dagens bönetider</h2>
			<p class="text-sm leading-relaxed text-gray-600">
				Knivsta moské följer samma schema som Uppsala moské.
			</p>
		</div>

		<div class="space-y-3 lg:flex-1">
			{#each prayerTimes as prayer}
				<div
					class="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:shadow-md"
				>
					<div class="flex items-center gap-3">
						<div class="rounded-lg bg-emerald-100 p-2 text-emerald-600">
							<svelte:component this={prayer.icon} class="h-3 w-3" />
						</div>
						<span class="text-sm font-semibold text-gray-900">{prayer.name}</span>
					</div>
					<div class="text-right">
						<div class="text-sm font-bold text-emerald-600">
							{prayer.adhan}
						</div>
						<div class="text-xs text-gray-500">Iqamath: {prayer.prayer}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
