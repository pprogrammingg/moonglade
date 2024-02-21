import log from '$lib/utils/log'

export async function handle({ event, resolve }) {
    
    log.bold(`🥨 New request is being made from ${event.url.pathname}`);
    log.hooks('hooks.server.ts');
    log.hooks('*****');

    event.locals.secret = '🍌'

	const response = await resolve(event)
	log.bold(`🔥 THE PAGE IS READY, I'M SENDING THE RESPONSE ${JSON.stringify(response, null , 2)}`)
	return response
}