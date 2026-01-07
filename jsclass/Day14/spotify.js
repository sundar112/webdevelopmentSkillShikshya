/** @format */

const container = document.getElementById('albumContainer');
const container2 = document.getElementById('albumContainer2');
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
			'https://api.spotify.com/v1/browse/new-releases?limit=8',
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
	container2.innerHTML = '';

	albums.forEach((album) => {
		// Clone for container 1
		const clone1 = template.content.cloneNode(true);
		fillCard(clone1, album);
		container.appendChild(clone1);

		// Clone for container 2
		const clone2 = template.content.cloneNode(true);
		fillCard(clone2, album);
		container2.appendChild(clone2);
	});
}

function fillCard(clone, album) {
	const img = clone.querySelector('img');
	const title = clone.querySelector('h2');
	const artist = clone.querySelector('p');

	img.src = album.images[0].url;
	title.textContent = album.name;
	artist.textContent = album.artists[0].name;
}
