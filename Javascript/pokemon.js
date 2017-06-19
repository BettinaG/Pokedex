function loadTable()
{
	$.post("../HTML/database-request.php",{list: "all", abfrage: "liste"},function(data){
	
		var pObject;
		
		if(data!=null)
		{
			pObject=JSON.parse(data);
		}
		
		var div = document.getElementById("pokeList");
		var text = "";
		
			var icons = new Array(151);
			var ids = new Array(151);
			var names = new Array(151);
			var names2 = new Array(151);
			
			for(i=0;i<pObject.length;i++)
			{		
				icons[i] = "<td><img class=listImg alt=ic src=../Graphics/IconsNeu/"+pObject[i].ICON_DATEINAME+"></td>";
				
				ids[i] = pObject[i].PKMN_ID.toString();
				var idLength = ids[i].length;			
				if     (idLength==1)ids[i] = "<td>#00"+ids[i]+"</td>";
				else if(idLength==2)ids[i] = "<td>#0"+ids[i]+"</td>";
				else if(idLength==3)ids[i] = "<td>#"+ids[i]+"</td>";
				
				names2[i] = pObject[i].PKMN_NAME;
				
				names[i] = "<td><a href=../HTML/pokemon.php>&#160;&#160;&#160;&#160;&#160;&#160;"+pObject[i].PKMN_NAME+"</a></td>";
			
			text += "<tr>"+icons[i]+ids[i]+names[i]+"</tr>";
			}
			div.innerHTML = text;
	});
}


function setPokemonInfo(name)
{
	poke = 'Bisasam';
//	alert(poke);
	
	var pokemonIdDiv   = document.getElementById("pokemonID");
	var pokemonNameDiv = document.getElementById("pokemonName");
	var eintragDiv     = document.getElementById("eintrag");
	var typDiv	       = document.getElementById("typ");
	var ortDiv 	       = document.getElementById("ort");
	var basisDiv       = document.getElementById("basis");
	var ent1Div        = document.getElementById("ent1");
	var ent2Div        = document.getElementById("ent2");
		
	$.post("../HTML/database-request.php",{pokemon: poke, abfrage: "poke"},function(data){
		var pObject;
		var pkmn_id, pkmn_name, eintrag, basis, ent1, ent2;
		var typ = "Typ: &#160;&#160;&#160;&#160;";
		var ort = "Fundort: ";
//		alert(data);
		if(data!=null)
		{
			pObject=JSON.parse(data);
		}
		
		pkmn_id = pObject[0].PKMN_ID.toString();
		var idLength = pkmn_id.length;
		if(idLength==1)pkmn_id = "#00"+pkmn_id;
		else if(idLength==2)pkmn_id = "#0"+pkmn_id;
		
		pkmn_name = pObject[0].PKMN_NAME;
		eintrag = pObject[0].DEX_EINTRAG+"<br>";
		pokemonImg = "../Graphics/Bilder/"+pObject[0].BILD_DATEINAME;

		for(i=0;i<pObject.length;i++)
		{
			if(i==0)
			{
				typ += pObject[i].TYP_NAME;
				ort += pObject[i].ORT_NAME;
			}
			else if(i==1)
			{
				if(pObject[0].TYP_NAME != pObject[1].TYP_NAME)
				{
					typ += "/"+pObject[1].TYP_NAME;
				}
			}
			if(i>0)
			{
				if(pObject[i].ORT_NAME != pObject[i-1].ORT_NAME)
					{
						ort += ", "+pObject[i].ORT_NAME;
					}
			}
			
		}
		
		document.getElementById("pokemonImg").src = pokemonImg;
		pokemonIdDiv.innerHTML   = pkmn_id;
		pokemonNameDiv.innerHTML = pkmn_name;
		eintragDiv.innerHTML     = eintrag;
		typDiv.innerHTML	     = typ;
		ortDiv.innerHTML 	     = ort;
//		innerHTML.basisDiv       = 
//		innerHTML.ent1Div        = 
//		innerHTML.ent2Div        = 
//	
	});
	
}