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
		toArray(this.responseText);
    }
    xhttp.open("GET", "Data.txt", true);
    xhttp.send();
}

function toArray(text){
	const fullTable=[]; 
	
	const rows= text.split("\n"); 
	console.log(rows);
	
	for (i=0;i<=rows.length; i++){
		const temp= rows[i].split(","); 
		const obj= {"state": temp[0]};
		fullTable.push(obj);
	}
	
	document.getElementById("test").innerHTML = fullTable[0];

}


  
  