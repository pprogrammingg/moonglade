<script>
	import Header from './Header.svelte';
	import './styles.css';
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
