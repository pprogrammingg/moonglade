import log from '$lib/utils/log'

export async function load() {
	log.page('meow /forms/+page.server.ts (load)')
}

export const actions = {
	async login({ url }) {
		log.page(`BLAH LOGIN ACTION: ${url.href}`)
	},
	async register({ url }) {
		log.page(`REGISTER ACTION: ${url.href}`)
	},
}
