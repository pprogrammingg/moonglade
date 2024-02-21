<script lang='ts'>
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import log from '$lib/utils/log';

    export let data;
    log.page(`/stores/+page.svelte`)
	console.log(`/stores/+page.svelte ${JSON.stringify(data, null, 2)}`);

    const user = writable();
    $: user.set(data.user);

    setContext('user', user);
</script>

<slot />