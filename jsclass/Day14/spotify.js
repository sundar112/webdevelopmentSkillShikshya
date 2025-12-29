/** @format */

const container = document.getElementById('albumContainer');
const template = document.getElementById('albumTemplate');

async function getAccessToken() {
	const clientId = '90fbbda2af0c4cd884309ca4695efd0f';
	const clientSecret = '78867a4914e84caa85c4fa5f556ed9ce';

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
		},
		body: 'grant_type=client_credentials',
	});

	const data = await response.json();
	return data.access_token;
}

async function fetchAlbums() {
	try {
		const token = await getAccessToken();

		const response = await fetch(
			'https://api.spotify.com/v1/browse/new-releases?limit=10',
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		const data = await response.json();
		console.log(data.albums.items);
		renderAlbums(data.albums.items);
	} catch (err) {
		console.error(err);
	}
}

fetchAlbums();

function renderAlbums(albums) {
	container.innerHTML = '';

	albums.forEach((album) => {
		const clone = template.content.cloneNode(true);

		const img = clone.querySelector('img');
		const title = clone.querySelector('h2');
		const artist = clone.querySelector('p');
		const type = clone.querySelector('span');

		img.src = album.images[0].url;
		title.textContent = album.name;
		artist.textContent = album.artists[0].name;
		type.textContent = album.album_type.toUpperCase();

		// Style based on album type
		if (album.album_type === 'single') {
			type.classList.add('bg-blue-600');
		}

		container.appendChild(clone);
	});
}
