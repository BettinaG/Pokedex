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
								
				names[i] = "<td><a onClick=getName(this) style=text-decoration:none; href=../HTML/pokemon.php>"+pObject[i].PKMN_NAME+"</a></td>";
			
			text += "<tr>"+icons[i]+ids[i]+names[i]+"</tr>";
			}
			div.innerHTML = text;
	});
}

function getName(obj)
{
	var aktName = $(obj).text();
//    alert(aktName);
    
    var namePass = {
    	     Name: aktName
    	   };
    	   //converts to JSON string the Object
    	   namePass = JSON.stringify(namePass);
    	   //creates a base-64 encoded ASCII string
    	   namePass = btoa(namePass);
    	   //save the encoded accout to web storage
    	   localStorage.setItem('_namePass', namePass);
}

function loadName(){
	   var namePass = localStorage.getItem('_namePass');
	   if (!namePass) return "undefined";
	   localStorage.removeItem('_namePass');
	   //decodes a string data encoded using base-64
	   namePass = atob(namePass);
	   //parses to Object the JSON string
	   namePass = JSON.parse(namePass);
	   //do what you need with the Object
	   aktName = namePass.Name;
	   return aktName;
}



function setRandomPoke(){
	var ranName;
	var ran = Math.floor((Math.random() * 151) + 1);
	var pObject;
	$.post("../HTML/database-request.php",{ranNum: ran , abfrage: "random"},function(data){
		if(data!=null)
		{
			pObject=JSON.parse(data);
		}
//		alert(data);
		for(i=0; i<pObject.length; i++){
			ranName = pObject[i].PKMN_NAME;
		}
		setPokemonInfo(ranName);
	});		
}

function setPokemonInfo(name)
{
	var poke = name;

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
		else if(idLength==3)pkmn_id = "#"+pkmn_id;
		
		pkmn_name = pObject[0].PKMN_NAME;
		pokemonImg = "../Graphics/Bilder/"+pObject[0].BILD_DATEINAME;
		
		eintrag = pObject[0].DEX_EINTRAG+"<br><br>";
		basis = "Basis: " + pObject[0].BASIS;
		ent1  = "1.Entwicklung: " + pObject[0].ENTW_EINS;
		ent2  = "2.ENtwicklung: " + pObject[0].ENTW_ZWEI;

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
		basisDiv.innerHTML       = basis;
		ent1Div.innerHTML        = ent1;
		ent2Div.innerHTML        = ent2;
	
	});
	
}

function playAudio(){
	
	var poke = $('#pokemonName').html();
	var soundName;
//	var id = document.getElementById("pokemonID").html();
//	alert(poke);
	
	$.post("../HTML/database-request.php",{pokemon: poke , abfrage: "audio"},function(data){
		if(data!=null)
		{
			pObject=JSON.parse(data);
		}
//		alert(data);
		for(i=0; i<pObject.length; i++){
			soundName = pObject[i].SOUND_DATEINAME;
		}
		
		 var source = document.getElementById('audioSource');
		 source.src = "../Graphics/Sounds/"+soundName;
		 
		 var audio = document.getElementById('audio');
		 audio.load();
		 audio.play();
		
	});		
	
}
