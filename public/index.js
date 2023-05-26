var i = 0; 			
var images = [];	
var time = 3000;	
	 

images[0] = "img-01-1.jpg";
images[1] = "img-02-3.jpg";
images[2] = "img-03-2";



function changeImg(){
	document.slide.src = images[i];

	
	if(i < images.length - 1){
	  
	  i++; 
	} else { 
	
		i = 0;
	}


	setTimeout("changeImg()", time);
}

window.onload=changeImg;


<img name="slide" width="400" height="200" />