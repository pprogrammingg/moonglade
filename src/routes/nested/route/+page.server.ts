export async function load({ parent }) {
	// parent `+layout.server.ts` data
	const data = await parent()
	console.log(`/nested/route/+page.server.ts ${JSON.stringify(data, null, 2)}`);
}
