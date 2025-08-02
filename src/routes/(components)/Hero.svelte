<script lang="ts">
	import { MapPin, Clock, Sparkles } from 'lucide-svelte';
</script>

<section id="home" class="relative flex min-h-[80vh] items-center overflow-hidden py-24">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img
			src="/placeholder.svg?height=800&width=1200"
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
