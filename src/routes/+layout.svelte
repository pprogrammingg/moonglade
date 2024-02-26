<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	import log from '$lib/utils/log'

	export let data
	// log.layout('+layout.svelte')
	console.log(`+layout.svelte ${JSON.stringify(data, null, 2)}`);
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<section id="sidebar">
		sidebar
	</section>

	<footer>
		My footer
	</footer>
</div>

<style>

</style>
