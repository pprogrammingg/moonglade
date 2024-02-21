<script>
	import { page } from '$app/stores'
	import Pre from '$lib/pre.svelte'
	import log from '$lib/utils/log'
	
	export let data

	log.page('+page.svelte')
	console.log(`+page.svelte ${JSON.stringify(data, null, 2)}`);
</script>

<svelte:head>
	<title>Trade</title>
	<meta name="description" content="NFT Trading Page" />
</svelte:head>

<h1> Data Flow Home </h1>
<Pre name="export let data" value={data} />
<Pre name="$page.data" value={$page.data} />


<section id="hero">
	<div>
		Hero
	</div>
</section>

<section id="collection">
	<div>
	</div>
</section>


<style>


</style>
