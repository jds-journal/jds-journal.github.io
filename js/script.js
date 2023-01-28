let colors = ["#EAEBE4", "#008D4E", "#FFFFFF"]


function randomColor() {
	return colors[Math.floor(Math.random()*colors.length)]
}

function renderGraph(element) {

	let container = element.getBoundingClientRect()
	let xmax = Math.floor(container.width)
	let ymax = Math.floor(container.height)

	let xnum = Math.ceil(Math.sqrt(xmax))
	let ynum = Math.ceil(Math.sqrt(ymax))
	let xSize = xmax/xnum
	let ySize = ymax/ynum

	document.getElementById("image-main").innerHTML = "";
	
	for (let i=0; i<xnum; i++) {
		for (let j=0; j<ynum; j++) {
			if (Math.random() < 0) {
				let coords = [[i*xSize,j*ySize],[i*xSize,j*ySize+ySize], [i*xSize+xSize,j*ySize]]
				drawPolygon(coords,randomColor(), "image-main")			
			} else {
				drawCircle([xSize/2+i*xSize,ySize/2+j*ySize], Math.min(xSize,ySize)/2*Math.random(), randomColor(), "image-main")			
			}
		}
	}  	
}

document.addEventListener('DOMContentLoaded', function () {	

	if (document.getElementById("image-main")) {
		renderGraph(document.getElementById("image-main"));
		window.addEventListener('resize', function(event) {
			renderGraph(document.getElementById("image-main"));
		}, true);
	}

}, false);

