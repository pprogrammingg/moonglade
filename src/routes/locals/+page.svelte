<script lang="ts">
	import Pre from '$lib/pre.svelte'

	export let data
    console.log(`/locals/+page.svelte ${JSON.stringify(data, null, 2)}`);
</script>

<h1>Adding custom data to a request</h1>

<Pre name="export let data" value={data} />
