<script lang="ts">
	import '../app.css';
	import Header from './(layout)/Header.svelte';
	import Footer from './(layout)/Footer.svelte';

	let { children } = $props();
</script>

<div class="bg-background min-h-screen">
	<Header />

	{@render children?.()}

	<Footer />
</div>
