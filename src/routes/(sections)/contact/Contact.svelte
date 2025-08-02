<script lang="ts">
	import { Mail, Phone, Clock, MapPin } from 'lucide-svelte';
</script>

<section id="contact" class="rounded-2xl bg-white py-8">
	<div class="px-8">
		<div class="mb-8">
			<h2 class="mb-4 text-2xl font-bold text-gray-900">Kontakta oss</h2>
			<p class="text-sm leading-relaxed text-gray-600">
				Har du frågor eller vill veta mer? Tveka inte att höra av dig till oss.
			</p>
		</div>

		<div class="space-y-3">
			<div
				class="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:shadow-md"
			>
				<div class="flex items-center gap-3">
					<div class="rounded-lg bg-emerald-100 p-2 text-emerald-600">
						<MapPin class="h-3 w-3" />
					</div>
					<span class="text-sm font-semibold text-gray-900">Adress</span>
				</div>
				<div class="text-right">
					<a
						href="https://maps.google.com/?q=Forsbyvägen+6g,+741+40+Knivsta,+Sverige"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700 hover:underline"
					>
						Forsbyvägen 6g
					</a>
				</div>
			</div>

			<div
				class="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:shadow-md"
			>
				<div class="flex items-center gap-3">
					<div class="rounded-lg bg-emerald-100 p-2 text-emerald-600">
						<Phone class="h-3 w-3" />
					</div>
					<span class="text-sm font-semibold text-gray-900">Telefon</span>
				</div>
				<div class="text-right">
					<div class="text-sm font-bold text-emerald-600">018-123 45 67</div>
				</div>
			</div>

			<div
				class="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:shadow-md"
			>
				<div class="flex items-center gap-3">
					<div class="rounded-lg bg-emerald-100 p-2 text-emerald-600">
						<Mail class="h-3 w-3" />
					</div>
					<span class="text-sm font-semibold text-gray-900">E-post</span>
				</div>
				<div class="text-right">
					<div class="text-sm font-bold text-emerald-600">info@knivstamoske.se</div>
				</div>
			</div>

			<div
				class="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:shadow-md"
			>
				<div class="flex items-center gap-3">
					<div class="rounded-lg bg-emerald-100 p-2 text-emerald-600">
						<Clock class="h-3 w-3" />
					</div>
					<span class="text-sm font-semibold text-gray-900">Öppettider</span>
				</div>
				<div class="text-right">
					<div class="text-sm font-bold text-emerald-600">Enligt bönetider</div>
					<div class="text-xs text-gray-500">Kontakta för aktiviteter</div>
				</div>
			</div>
		</div>
	</div>
</section>
