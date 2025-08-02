<script lang="ts">
	import { Calendar, Clock } from 'lucide-svelte';
	import eventFridayPrayer from './assets/event-friday-prayer.png';
	import eventQuranClasses from './assets/event-quran-classes.png';

	const events = [
		{
			title: 'Fredagsbön med khutbah',
			description: 'Veckans fredagsbön med khutbah på svenska och arabiska.',
			image: eventFridayPrayer,
			gradient: 'from-emerald-500 to-teal-500',
			date: 'Varje fredag',
			time: '13:00',
			location: 'Huvudbönesal'
		},
		{
			title: 'Koranklass för barn',
			description: 'Koranlektioner och islamisk utbildning för barn 6-14 år.',
			image: eventQuranClasses,
			gradient: 'from-amber-500 to-orange-500',
			date: 'Söndagar',
			time: '14:00',
			location: 'Klassrum'
		}
	];
</script>

<section id="upcoming" class="rounded-2xl bg-gradient-to-b from-gray-50 to-white py-8">
	<div class="px-8 lg:flex lg:flex-col">
		<div class="mb-8">
			<h2
				class="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent"
			>
				Vad händer härnäst
			</h2>
			<p class="text-sm leading-relaxed text-gray-600">
				Håll dig uppdaterad om kommande aktiviteter och evenemang i vår moské.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex-1 lg:grid-cols-3">
			{#each events as event, index}
				<div
					class="group card overflow-hidden border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl"
				>
					<figure class="relative h-48 overflow-hidden">
						<img
							src={event.image || '/placeholder.svg'}
							alt={event.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
						<div
							class="absolute top-4 left-4 space-y-1 rounded-lg bg-black/10 p-3 backdrop-blur-sm"
						>
							<div class="flex items-center gap-2 text-sm text-white">
								<Calendar class="h-4 w-4" />
								<span>{event.date}</span>
							</div>
							<div class="flex items-center gap-2 text-sm text-white">
								<Clock class="h-4 w-4" />
								<span>{event.time}</span>
							</div>
						</div>
					</figure>
					<div class="card-body">
						<h2
							class="card-title text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600"
						>
							{event.title}
						</h2>
						<p class="leading-relaxed text-gray-600">{event.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
