<script lang="ts">
	import { Heart, Smartphone } from 'lucide-svelte';
	import swishQr from '$lib/assets/swish-qr-code.png';
</script>

<section id="support" class="rounded-2xl bg-white py-8">
	<div class="px-8 lg:flex lg:flex-col">
		<div class="mb-8">
			<h2 class="mb-4 text-2xl font-bold text-gray-900">Stöd moskén</h2>
			<p class="text-sm leading-relaxed text-gray-600">
				Ditt bidrag hjälper oss att täcka hyran och fortsätta erbjuda våra tjänster till
				gemenskapen.
			</p>
		</div>

		<div class="space-y-3 lg:flex-1">
			<div
				class="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:shadow-md"
			>
				<div class="flex items-center gap-3">
					<div class="rounded-lg bg-emerald-100 p-2 text-emerald-600">
						<Smartphone class="h-3 w-3" />
					</div>
					<span class="text-sm font-semibold text-gray-900">Swish-nummer</span>
				</div>
				<div class="text-right">
					<div class="text-sm font-bold text-emerald-600">123 048 59 87</div>
					<div class="text-xs text-gray-500">För donationer</div>
				</div>
			</div>

			<div
				class="hidden flex-col items-center gap-4 rounded-xl border border-gray-100 bg-white px-4 py-8 transition-all duration-300 hover:shadow-md lg:flex lg:py-12"
			>
				<img src={swishQr} alt="Swish QR-kod för donationer" class="h-32 w-32 lg:h-48 lg:w-48" />
				<p class="text-center text-xs text-gray-500">Skanna QR-koden för att donera via Swish</p>
			</div>

			<div class="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4">
				<div class="flex items-start gap-3">
					<div class="rounded-lg bg-blue-100 p-2 text-blue-600">
						<Heart class="h-4 w-4" />
					</div>
					<div>
						<h3 class="mb-2 text-sm font-semibold text-gray-900">Andra sätt att stödja</h3>
						<p class="text-sm leading-relaxed text-gray-600">
							Vill du stödja moskén på andra sätt eller har du frågor?
							<a
								href="#contact"
								class="font-medium text-blue-600 transition-colors hover:text-blue-700"
							>
								Kontakta oss
							</a> så hjälper vi dig gärna.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
