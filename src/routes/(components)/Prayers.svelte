<script lang="ts">
	import { Sun, Sunset, Moon } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	export let prayerTimesData: any = null;

	interface PrayerTime {
		name: string;
		adhan: string;
		prayer: string;
		icon: ComponentType;
	}

	let prayerTimes: PrayerTime[] = [
		{ name: 'Fajr', adhan: '—:—', prayer: '—:—', icon: Moon },
		{ name: 'Dhuhr', adhan: '—:—', prayer: '—:—', icon: Sun },
		{ name: 'Asr', adhan: '—:—', prayer: '—:—', icon: Sun },
		{ name: 'Maghrib', adhan: '—:—', prayer: '—:—', icon: Sunset },
		{ name: 'Isha', adhan: '—:—', prayer: '—:—', icon: Moon }
	];

	function formatTime(hour: number, minute: number): string {
		return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
	}

	function addMinutes(hour: number, minute: number, minutesToAdd: number): string {
		const totalMinutes = hour * 60 + minute + minutesToAdd;
		const newHour = Math.floor(totalMinutes / 60) % 24;
		const newMinute = totalMinutes % 60;
		return formatTime(newHour, newMinute);
	}

	// Process prayer times data when component receives it
	$: if (prayerTimesData) {
		prayerTimes = [
			{
				name: 'Fajr',
				adhan: formatTime(prayerTimesData.fajr.hour, prayerTimesData.fajr.minute),
				prayer: addMinutes(prayerTimesData.fajr.hour, prayerTimesData.fajr.minute, 30),
				icon: Moon
			},
			{
				name: 'Dhuhr',
				adhan: formatTime(prayerTimesData.dhuhr.hour, prayerTimesData.dhuhr.minute),
				prayer: addMinutes(prayerTimesData.dhuhr.hour, prayerTimesData.dhuhr.minute, 10),
				icon: Sun
			},
			{
				name: 'Asr',
				adhan: formatTime(prayerTimesData.asr.hour, prayerTimesData.asr.minute),
				prayer: addMinutes(prayerTimesData.asr.hour, prayerTimesData.asr.minute, 10),
				icon: Sun
			},
			{
				name: 'Maghrib',
				adhan: formatTime(prayerTimesData.maghrib.hour, prayerTimesData.maghrib.minute),
				prayer: addMinutes(prayerTimesData.maghrib.hour, prayerTimesData.maghrib.minute, 10),
				icon: Sunset
			},
			{
				name: 'Isha',
				adhan: formatTime(prayerTimesData.isha.hour, prayerTimesData.isha.minute),
				prayer: addMinutes(prayerTimesData.isha.hour, prayerTimesData.isha.minute, 10),
				icon: Moon
			}
		];
	}
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
