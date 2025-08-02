<script lang="ts">
	import { Heart, GraduationCap, Users } from 'lucide-svelte';

	const services = [
		{
			icon: Users,
			title: 'Dagliga böner',
			description: 'Alla fem dagliga böner hålls i moskén enligt islamisk religion.',
			gradient: 'from-blue-500 to-cyan-500',
			image: '/placeholder.svg?height=200&width=300'
		},
		{
			icon: GraduationCap,
			title: 'Koranlektioner',
			description: 'Koranundervisning för barn på ett roligt och engagerande sätt.',
			gradient: 'from-orange-500 to-red-500',
			image: '/placeholder.svg?height=200&width=300'
		},
		{
			icon: Heart,
			title: 'Sammankomster',
			description: 'Gemenskapsaktiviteter och sociala evenemang för hela familjen.',
			gradient: 'from-pink-500 to-rose-500',
			image: '/placeholder.svg?height=200&width=300'
		}
	];
</script>

<section id="services" class="rounded-2xl bg-gradient-to-b from-gray-50 to-white py-8">
	<div class="px-8 lg:flex lg:flex-col">
		<div class="mb-8">
			<h2
				class="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent"
			>
				Våra tjänster
			</h2>
			<p class="text-sm leading-relaxed text-gray-600">
				Vi erbjuder ett brett utbud av religiösa och sociala tjänster för vår gemenskap.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex-1 lg:grid-cols-3">
			{#each services as service, index}
				<div
					class="group card overflow-hidden border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl"
				>
					<figure class="relative h-48 overflow-hidden">
						<img
							src={service.image || '/placeholder.svg'}
							alt={service.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
						<div
							class="absolute top-4 left-4 rounded-2xl bg-gradient-to-br p-3 {service.gradient} text-white shadow-lg"
						>
							<svelte:component this={service.icon} class="h-8 w-8" />
						</div>
					</figure>
					<div class="card-body">
						<h2
							class="card-title text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600"
						>
							{service.title}
						</h2>
						<p class="leading-relaxed text-gray-600">{service.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
