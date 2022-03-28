
let length=0;  
let mode=0; 
const fullTable=[];  
let searchvalue;
let incolumn;
let searchtype; 



function myFunction(value) {
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


function searchColumn()
{
	searchvalue= Document.getElementById("searchfor").value;
	incolumn = Document.getElementById("search-column").value;
	searchtype = Document.getElementById("search-Scope").value; 

  let search;
	if(incolumn == "state"){
		search = fullTable.filter(searchstate())
	}
	else if( incolumn == "fips"){
		search = fullTable.filter(searchfips())
	}
	else if( incolumn == "dist-id"){
		search = fullTable.filter(searchid())
	}
	else if( incolumn == "name"){
		search = fullTable.filter(searchname())
	}
	else if( incolumn == "totalpop"){
		search = fullTable.filter(searchpop())
	}
	else if( incolumn == "sap"){
		search = fullTable.filter(searchsap())
	}
	
	else if( incolumn == "scap"){
		search = fullTable.filter(searchsap())
	}
	else if( incolumn == "povertyrate"){
		search = fullTable.filter(searchpverty())
	}
  toTable(search);
}

function searchstate(state){
	
if(searchtype == "exact" ){
		return state.state == searchvalue;
	}
if(searchtype == "contains"){
 
	return state.state.indexOf(searchvalue) >= 0; 
	
}	
if(searchtype == "not-contains"){
	return state.state.indexOf(searchvalue) == -1;
}

}

function searchfips(fips){
	
	if(searchtype == "exact" ){
			return fips.fips == searchvalue;
		}
	if(searchtype == "contains"){
	 
		return fips.fips.indexOf(searchvalue) >= 0; 
		
	}	
	if(searchtype == "not-contains"){
		return fips.fips.indexOf(searchvalue) == -1;
	}
	
	}

	function searchid(id){
	
		if(searchtype == "exact" ){
				return id.id == searchvalue;
			}
		if(searchtype == "contains"){
		 
			return id.id.indexOf(searchvalue) >= 0; 
			
		}	
		if(searchtype == "not-contains"){
			return id.id.indexOf(searchvalue) == -1;
		}
		
		}

		function searchname(name){
	
			if(searchtype == "exact" ){
					return name.name == searchvalue;
				}
			if(searchtype == "contains"){
			 
				return name.name.indexOf(searchvalue) >= 0; 
				
			}	
			if(searchtype == "not-contains"){
				return name.name.indexOf(searchvalue) == -1;
			}
			
			}

		function searchpop(totalpop){
	
				if(searchtype == "exact" ){
						return totalpop.totalpop == searchvalue;
					}
				if(searchtype == "contains"){
				 
					return totalpop.totalpop.indexOf(searchvalue) >= 0; 
					
				}	
				if(searchtype == "not-contains"){
					return totalpop.totalpop.indexOf(searchvalue) == -1;
				}
				
				}
	
		function searchsap(sap){
	
			if(searchtype == "exact" ){
				return sap.sap == searchvalue;
			}
			if(searchtype == "contains"){
					 
				return sap.sap.indexOf(searchvalue) >= 0; 
						
			}	
			if(searchtype == "not-contains"){
				return sap.sap.indexOf(searchvalue) == -1;
			}
					
		}

		function searchscap(scap){
	
			if(searchtype == "exact" ){
				return scap.scap == searchvalue;
			}
			if(searchtype == "contains"){
					 
				return scap.scap.indexOf(searchvalue) >= 0; 
						
			}	
			if(searchtype == "not-contains"){
				return scap.scap.indexOf(searchvalue) == -1;
			}
					
		}

		function searchpoverty(poverty){
	
			if(searchtype == "exact" ){
				return poverty.poverty == searchvalue;
			}
			if(searchtype == "contains"){
					 
				return poverty.poverty.indexOf(searchvalue) >= 0; 
						
			}	
			if(searchtype == "not-contains"){
				return poverty.poverty.indexOf(searchvalue) == -1;
			}
					
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

loadDoc();

  
  