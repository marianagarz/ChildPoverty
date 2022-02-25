//let pointer=0;
   /*function myFunction() {
		window.alert("Fill in this code please!");
	}
	
	function nextPage(){
		pointer= pointer+10;
		window.alert("you have scrolled, now looking at "+pointer+" to "+(pointer+10));
	}

  window.onload= function(){
   let state= "MD";
   document.getElementById("state").innerHTML=state;
 };*/

 
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "Data.txt", true);
    xhttp.send();
}
  
  /*const povertStats= []
  for (let n=0; n<= docLength; n++) {
	povertStats[n]= new Object(); 
	povertStats[n].State= 'PUT STATE HERE';
	povertStats[n].FIPPS= 000;
	povertStats[n].ID= 0000; 
	povertStats[n].Name='name';
	povertStats[n].Population= 000;
	povertStats[n].SchoolPopulation=000;
	povertStats[n].inPoverty=000;
	povertStats[n].rate=000;
  }*/
  
  