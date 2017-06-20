<?php
	require 'Database.php';

	/*
	 * MAP SQL-ABFRAGE
	 */
	if($_POST['abfrage']==="ort"){
		$mapInfo="SELECT
					ORT.ORT_ID,ORT.ORT_NAME,POKEMON.PKMN_NAME,POKEMON.PKMN_ID
				FROM
					ORT,POKEMON,ORT_PKMN
				WHERE
					ORT_PKMN.ORT_ID=ORT.ORT_ID AND
					ORT_PKMN.PKMN_ID=POKEMON.PKMN_ID AND
					ORT.ORT_NAME='".$_POST['place']."'
				ORDER BY
	            	PKMN_ID;";
		$result=$conn->query($mapInfo);
		$json_array=null;
		
		if($result->num_rows>0){
			$results=array();
			while($row=$result->fetch_assoc()){
				$results[]=$row;
			}
			$json_array=json_encode($results);
		}else{
			
		}
		if($json_array!=null)
		{echo $json_array;}
	}
	/*
	 * POKEMON SQL-ABFRAGE
	 */
	
	if($_POST['abfrage']==="poke"){
		$pokemonInfo="SELECT
							POKEMON.PKMN_ID, POKEMON.PKMN_NAME, POKEMON.DEX_EINTRAG,POKEMON.BASIS, POKEMON.ENTW_EINS, POKEMON.ENTW_ZWEI,
						    ORT.ORT_NAME, 
						    TYP.TYP_NAME, 
						    BILD.BILD_DATEINAME, ICON.ICON_DATEINAME, SOUND.SOUND_DATEINAME
						FROM
							POKEMON,
							ORT,ORT_PKMN,
							TYP,TYP_PKMN, BILD, ICON, SOUND
						WHERE
							POKEMON.PKMN_NAME = '".$_POST['pokemon']."' AND
							ORT.ORT_ID		 = ORT_PKMN.ORT_ID AND
							POKEMON.PKMN_ID  = ORT_PKMN.PKMN_ID AND
						    TYP.TYP_ID		 = TYP_PKMN.TYP_ID AND
						    POKEMON.PKMN_ID  = TYP_PKMN.PKMN_ID AND
							POKEMON.PKMN_ID  = BILD.BILD_ID AND
						    POKEMON.PKMN_ID  = ICON.ICON_ID AND
						    POKEMON.PKMN_ID  = SOUND.SOUND_ID";
	$result=$conn->query($pokemonInfo);
		$json_array=null;
		
		if($result->num_rows>0){
			$results=array();
			while($row=$result->fetch_assoc()){
				$results[]=$row;
			}
			$json_array=json_encode($results);
		}else{
			
		}
		if($json_array!=null)
		{echo $json_array;}
	}
	
	
	if($_POST['abfrage']==="liste"){
		$liste="SELECT
					PKMN_NAME, PKMN_ID, ICON_DATEINAME
				FROM
					POKEMON, ICON
				WHERE
					PKMN_ID = ICON.ICON_ID";
	$result=$conn->query($liste);
		$json_array=null;
		
		if($result->num_rows>0){
			$results=array();
			while($row=$result->fetch_assoc()){
				$results[]=$row;
			}
			$json_array=json_encode($results);
		}else{
			
		}
		if($json_array!=null)
		{echo $json_array;}
	}
	
	if($_POST['abfrage']==="random"){
		$random="SELECT
					PKMN_NAME
				FROM
					POKEMON
				WHERE
					PKMN_ID = '".$_POST['ranNum']."'";
	$result=$conn->query($random);
		$json_array=null;
		
		if($result->num_rows>0){
			$results=array();
			while($row=$result->fetch_assoc()){
				$results[]=$row;
			}
			$json_array=json_encode($results);
		}else{
			
		}
		if($json_array!=null)
		{echo $json_array;}
	}
	

?>