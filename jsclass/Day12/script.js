/** @format */

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	//debugger;
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = 'expires=' + d.toUTCString();
	console.log('setting cookee', cname, cvalue, exdays);

	//debugger;
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
	let name = cname + '=';
	debugger;
	console.log('getcookee', cname);
    let decodedCookie = decodeURIComponent(document.cookie);
    console.log('decoded cookie', decodedCookie);
   
    
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

function checkCookie() {
	let user = getCookie('username');
	debugger;
	if (user != '') {
		alert('Welcome again ' + user);
	} else {
		user = prompt('Please enter your name:', '');
		if (user != '' && user != null) {
			setCookie('username', user, 365);
		}
	}
}
setCookie('testcookee', 'helloworld', 1);
getCookie('testcookee');
checkCookie();
