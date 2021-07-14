const putLinksToObject = (doc) => {
	console.log(doc)
    let urls = doc.querySelectorAll('a'); 
	for (let url in urls) console.log(`${urls[url].text} : ${urls[url].href} : ${urls[url].title}`);
}

const getHTML = (url) => {
    // console.log('getHTML is working')
    const pageURL = url;
    console.log(JSON.stringify({pageURL}))
  	const parser = new DOMParser();
  	return fetch("http://localhost:8000/",{
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({pageURL}),
	})
	.then(res => res.json())
	.then(res => res.res)
    .then(res=>parser.parseFromString(res, 'text/html'))
	.then(res => res)
}

export { putLinksToObject, getHTML}