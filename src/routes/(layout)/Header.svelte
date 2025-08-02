<script lang="ts">
	import logoImage from '$lib/assets/logo-256.png';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60"
>
	<div class="container flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
		<div class="flex items-center space-x-3">
			<div class="h-10 w-10 overflow-hidden rounded shadow-lg">
				<img src={logoImage} alt="Knivsta Moske Logo" class="h-full w-full object-cover" />
			</div>
			<div>
				<span
					class="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-bold text-transparent"
				>
					Islamiska Kulturcenter
				</span>
				<div class="text-sm font-medium text-gray-500">Knivsta</div>
			</div>
		</div>
	</div>
</header>
