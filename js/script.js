let colors = ["#EAEBE4", "#008D4E", "#FFFFFF"]


function randomColor() {
	return colors[Math.floor(Math.random()*colors.length)]
}

function renderGraph(element) {

	const container = element.getBoundingClientRect()
	const xmax = Math.floor(container.width)
	const ymax = Math.floor(container.height)

	const maxCircleSize = 25

	const xnum = Math.ceil(xmax / maxCircleSize)
	const ynum = Math.ceil(ymax / maxCircleSize)
	const xSize = xmax/xnum
	const ySize = ymax/ynum

	document.getElementById("image-main").innerHTML = "";
	
	for (let i=0; i<xnum; i++) {
		for (let j=0; j<ynum; j++) {
			if (Math.random() < 0) {
				const coords = [[i*xSize,j*ySize],[i*xSize,j*ySize+ySize], [i*xSize+xSize,j*ySize]]
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

