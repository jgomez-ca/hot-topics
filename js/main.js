// GET THE REFERENCES
const container = document.querySelector('.container');
const links = document.querySelectorAll('header nav a');
let url = './partials/home.html';

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
function selectContent(e) {
  // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
	e.preventDefault();
  // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
	let currentPageURL = e.target.href;
   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
    loadContent(currentPageURL);
}

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (i=0;i<links.length;i++) {
    links[i].addEventListener('click', selectContent);
}


// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
function loadContent (requestedPage) {
	fetch(requestedPage).then(function (rsp) {
		return rsp.text();
	}).then(function (data) {
		container.innerHTML = data;
	});
}

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);
