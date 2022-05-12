const postData = async (url, someData) => {
	const res = await fetch(url, {
		method: "POST",
		headers: {'Content-type':'application/json; charset=utf-8'},
		body: someData
	});
	return await res.json();
};

async function getResource(url) {
	let res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status ${res.status}`);
	}

	return await res.json();
}

export {postData};
export {getResource};