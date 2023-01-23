String.prototype.hashCode = function() {
  var hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; 
  }
  return hash;
}

function digitAt(number, n){
   r = number.toString().split('')[n-1]*1;
   return r;
}

function getDice(title, offset) {
	let hash = Math.abs(title.hashCode()).toString()
	let dice = parseInt(hash.charAt(offset%hash.length))/10
	return dice
}

function renderAvatar(element, name, title, abstract) {

	let container = element.getBoundingClientRect()
	let xmax = Math.floor(container.width)
	let ymax = Math.floor(container.height)

	let num = 6
	let dim = xmax/4
	let size = dim
	let cols=4
	let rows=3

	element.innerHTML = "";

	for (let i=0; i<cols; i++) {
		for (let j=0; j<rows; j++) {
			let offset = i*num/2+j
			let dice = getDice(title, offset)
			let color = (getDice(abstract, offset) < 0.5) ? colors[0] : colors[1]
			let scale = 0.15+getDice(title+abstract, offset)
			if (dice < .2) {
				let coords = [[i*size,j*size],[i*size+size,j*size], [i*size+size,j*size+size]]
				drawPolygon(coords,color, name)			
			} else {
				drawCircle([size/2+i*size,size/2+j*size], size/2*scale, color, name)			
			}
		}
	}  	

}

render = function(el, name, articles) {

	for (let i=0; i<articles.length; i++) {

		let article = articles[i]

		let container = document.createElement("div");
		container.className = "PaperHiglight";

		let avatar = document.createElementNS('http://www.w3.org/2000/svg', "svg");
		avatar.setAttribute("height", "250px")
		avatar.setAttribute("width", "300px")

		avatar.className = "paper-avatar";
		avatar.id = "paper-avatar-" + i;

		container.appendChild(avatar)

		let details = document.createElement("div");
		details.className = "PaperDetails";

		let title = document.createElement("h2")
		title.appendChild(document.createTextNode(article.title))
		details.appendChild(title)


		let r1 = document.createElement("div");
		r1.className = "Row";
		details.appendChild(r1)

		for (let j=0; j<article.authors.length; j++) {
			let author = article.authors[j]

			let a = document.createElement("h3")
			a.appendChild(document.createTextNode(author.name))
			details.appendChild(a)

			let f = document.createElement("div")
			f.className = "Affiliation"
			f.appendChild(document.createTextNode(author.affiliation))
			details.appendChild(f)

		}

		let r2 = document.createElement("div");
		r2.className = "Row";
		details.appendChild(r2)

		let abstract = document.createElement("p");
		abstract.appendChild(document.createTextNode(article.abstract))
		details.appendChild(abstract)


		let download = document.createElement("div");
		download.className = "Download";

		let downloadImage = document.createElement("img");
		downloadImage.setAttribute("src", "./img/download.svg")
		download.appendChild(downloadImage)

		let downloadCTA = document.createElement("h3")
		downloadCTA.appendChild(document.createTextNode("Download paper"))
		download.appendChild(downloadCTA)

		details.appendChild(download)

		let r3 = document.createElement("div");
		r3.className = "DoubleRow";
		details.appendChild(r3)

		container.appendChild(details)
		el.appendChild(container)

		renderAvatar(document.getElementById("paper-avatar-" + i), "paper-avatar-" + i, article.title, article.abstract)

	}

}

document.addEventListener('DOMContentLoaded', function () {	

	if (document.getElementById("IssueContent")) {
		for (issue in issues) {
			render(document.getElementById("IssueContent"), issue, issues[issue])
		}
	}

}, false);
