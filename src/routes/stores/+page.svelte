<script>
	import { getContext } from 'svelte';
    import Pre from '$lib/pre.svelte';
    import { page } from '$app/stores';
    import log from '$lib/utils/log';

    export let data

	const user = getContext('user');
    log.page(`/stores/+page.svelte`)
	console.log(`/stores/+page.svelte ${JSON.stringify(data, null, 2)}`);
</script>

<Pre name="export let data" value={data} />
<Pre name="$page.data" value={$page.data} />
<h1>Stores with context</h1>
<p>Welcome {$user.name}!</p>
