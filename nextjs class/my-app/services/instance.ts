const baseurl = `https://base.skillshikshya.com/api/`;
const token = 'BQC5yO7nmLsnM06edm7msVouA3wyIPjdrtsOt7g__WXWKFR_5TeUM63VOLFJoiLZdHd4QGBhBJSvzugmZfGOaDw31XIC5bo84oD2sJDXRxrXXH5TeMYdd35F3DrxLVNEo8Dz81N2ZtnupBrsxc8-I_vh0uWKfU-bMBduI6WgpzoH8wtaCQFgUuf9RJGn_zQeuGJqpRCYWd358vFF6hpUHfxjL6kq2nHp_RxRpmZkqOteA6MYFpvRhCPnIT1o_R9_o7UhZ2NwCEJay4IawldSajvYb4NzFAdmpiwDT9KCxno1aq3Ss4E7L52gdonwxiVV';


export async function fetchAlbums(url: string) {
    try {
        const response = await fetch(
            `${baseurl + url}`,
            {

                method: 'GET'
            }
        );
        const data = await response.json();
        console.log("data in fetch", data);
        return data;
    } catch (err) {
        console.error(err);
    }
}
