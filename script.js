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
       
		toArray(this.responseText);
    }
    xhttp.open("GET", "Data.txt", true);
    xhttp.send();
}

function toArray(text){
	const fullTable=[]; 
	
	const rows= text.split("\n"); 
	
	for (i=0;i<rows.length; i++){
		const temp= rows[i].split(",");	
		console.log(temp);		
		const obj= {"state": temp[0],"fips":temp[1],"id":temp[2],"name":temp[3],"totalPop":temp[4],"schoolAgedPop":temp[5],"schoolInPov":temp[6],"povRate":((temp[6]/temp[5])*100)};
		fullTable.push(obj);
	}
	
	toTable(fullTable);
	
}

function toTable(array)
{
	let html="<table> <td>State</td><td>FIPS Number</td><td>ID</td><td>Name</td><td>Total Population</td> <td>School aged population</td><td> School aged pop in poverty</td><td>Povrate</td>";
	for (i=0;i<array.length; i++){
		html+=("<tr><td>"+array[i].state+"</td><td>"+array[i].fips+"</td><td> "+array[i].id+" </td><td> "+array[i].name+" </td><td>"+array[i].totalPop+" </td> <td>"+array[i].schoolAgedPop+" </td><td> "+array[i].schoolInPov+" </td><td>"+array[i].povRate+" </td> ")
	}
	html+=("</table>");
	document.getElementById("table").innerHTML = html;

}



  
  