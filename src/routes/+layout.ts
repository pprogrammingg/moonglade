import log from '$lib/utils/log'

export async function load({ data }) {
	log.layout('+layout.ts (load)')
    console.log(`+layout.ts ${JSON.stringify(data, null, 2)}`);
	return {
	  ...data,
      b:2
	}
}
