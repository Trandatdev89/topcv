export function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

export function getCookie (name) {
	let value = '; ' + document.cookie;
	let parts = value.split(`; ${name}=`);
	if (parts.length == 2) 
    return parts.pop().split(';').shift();
}
export function deleteCookie(cname){
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}