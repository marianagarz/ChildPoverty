
let length=0;  
let mode=0; 
const fullTable=[];  

function myFunction() {
		window.alert("Fill in this code please!");
	}
	

function nextPage(){
		length=length+mode;
		window.alert("you have scrolled,"+mode+" length is now "+length);
		
		const temp= [];
		let x=0;
		for (i=(length-mode);i<length;i++)
		{
		  temp[x]=fullTable[i];
		  x++;
		}
	
	    toTable(temp);
		
	}

 
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
       
		toArray(this.responseText);
    }
    xhttp.open("GET", "Data.txt", true);
    xhttp.send();
}

function toArray(text){
	
	
	const rows= text.split("\n"); 
	
	for (i=0;i<rows.length; i++){
		const temp= rows[i].split(",");	
		console.log(temp);		
		const obj= {"state": temp[0],"fips":temp[1],"id":temp[2],"name":temp[3],"totalPop":temp[4],"schoolAgedPop":temp[5],"schoolInPov":temp[6],"povRate":((temp[6]/temp[5])*100)};
		fullTable.push(obj);
	}
	
	changeDisplay(10); 
	
	
	
}

function changeDisplay(num)
{
	length=num; 
	mode=num;
	const temp= [];
	for (i=0;i<num;i++)
		temp[i]=fullTable[i];
	
	toTable(temp);
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


function search()
{
	let column =document.getElementById("search-column").getValue();
	let mode =document.getElementById("search-scope").getValue();
	//iffy on this tbh (c below);
	let ident =document.getElementById("searchfor").getValue();
	
	toTable(fullTable.filter(getSearchCallBack(column,mode.ident))); 
}

	//NOTE: might be a problem here... do i need to make a temp 
	//array to sort by the collumn because rn its rows of objects 
	//not sorted by collumns, or can i use a dot opperator 
	// and make the opperator a variable??? thats how i have it rn, 
	//other alternative would be to make a loop in search.
function getSearchCallBack(column, mode,ident){
	const seachModes= [ (currentValue) => (currentValue.column)==ident, 
						(currentValue) => (currentValue.column).includes(ident),
						(currentValue) => !(currentValue.column).includes(ident)];
	return searchModes[mode];
}

  
loadDoc();
