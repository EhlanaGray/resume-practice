<!--
closetime = 15;


pict1 = new Image()
pict1.src = "../img/main1.jpg"
alert(pict1.src);
pict2 = new Image()
pict2.src = "../img/main2.jpg"
pict3 = new Image()
pict3.src = "../img/main3.jpg"
pict4 = new Image()
pict4.src = "../img/main4.jpg"

slides = 4              // <--number of slides-->
rotations =75           // <--number of times the show is run-->
speed = 1300            // <--time between changes-->

function runit() 
{

	for (x=1, y=0 ; x < (slides*rotations); x=x+slides, y=0)
	{
		alert(pict1.src);
	     source1= "assets/"+pict1.src;
	     alert(source1);
	     source2= "assets/"+pict2.src;
		y++; setTimeout("document.slideshow.src = source1",((x + y) * speed)) 
		y++; setTimeout("document.slideshow.src = source2",((x + y) * speed))
		y++; setTimeout("document.slideshow.src = pict3.src",((x + y) * speed))
		y++; setTimeout("document.slideshow.src = pict4.src",((x + y) * speed))
	}// end of for loop
}// end of function runit
-->