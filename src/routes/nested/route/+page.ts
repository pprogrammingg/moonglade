export async function load({ parent }) {
	// parent `+layout.ts` data
	const data = await parent()
	console.log(`/nested/route/+page.ts ${JSON.stringify(data, null, 2)}`);
}
