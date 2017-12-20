	var words = ['websites', 'web applications', 'applications', 'mobile applications'];
    element = document.querySelector("#wordactions");
    currentWord = -1; //3
window.setInterval(function(){ // 4
      currentWord++; // 5
   	  if (currentWord > words.length-1)
   		currentWord = 0; // 6
   element.textContent = words[currentWord]; 
}, 2000); // -- 4 


