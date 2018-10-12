document.getElementsByClassName('button')[0].onclick = function() {
  if(this.innerHTML === 'CLICK THE BUTTON MY BOI') 
  { 
    this.innerHTML = 'YEAHHHHH';
  	document.body.style.backgroundColor = "#fffa73";
  	document.getElementsByClassName('ray')[0].style.visibility='visible';
  	document.getElementsByClassName('gaben')[0].style.opacity='1';
  	var x = document.getElementById("miracle"); 
    x.play(); 
  } else {
  }  
}