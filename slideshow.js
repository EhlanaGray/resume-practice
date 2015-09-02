<!--
closetime = 15;


pict1 = new Image()
pict1.src = "soccer1.jpg"
pict2 = new Image()
pict2.src = "soccer2.jpg"
pict3 = new Image()
pict3.src = "soccer3.jpg"
pict4 = new Image()
pict4.src = "soccer4.jpg"

slides = 4              // <--number of slides-->
rotations =75           // <--number of times the show is run-->
speed = 1300            // <--time between changes-->

function runit() 
{

	for (x=1, y=0 ; x < (slides*rotations); x=x+slides, y=0)
	{
		
		y++; setTimeout("document.slideshow.src = pict1.src",((x + y) * speed)) 
		y++; setTimeout("document.slideshow.src = pict2.src",((x + y) * speed))
		y++; setTimeout("document.slideshow.src = pict3.src",((x + y) * speed))
		y++; setTimeout("document.slideshow.src = pict4.src",((x + y) * speed))
	}// end of for loop
}// end of function runit
-->