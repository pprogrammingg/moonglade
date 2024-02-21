import log from '$lib/utils/log'

export async function load({ data }) {
	log.page('+page.ts (load)');
    console.log(`+page.ts ${JSON.stringify(data, null, 2)}`);

    return {
          ...data,
          d:4
        }                                     
}
