<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>Pokedex - Kanto</title>
<link rel= stylesheet href ="../CSS/stylesAll.css">
</head>

<body onload="setPokemonInfo(loadName())">
	<div class="wrapper">
		<a href="index.php" id="homeBtn">Home</a>
		<a href="pokemonList.php" class="menuBtn" id="pokemonBtn">Pokemon</a>
		<a href="pokemonRan.php" class="menuBtn" id="statisticsBtn">Stats</a>
		<a href="map.php" class="menuBtn" id="mapBtn">Map</a>
		
		<div class="whiteTextfield">
			<img class="pokemonImg" id="pokemonImg" alt="pokemon">
			<div class="pokemonWhiteText" id="pokemonID"></div><div class="pokemonWhiteText" id="pokemonName"></div>
		</div>	
	
		<div id="audioBtn" onClick="playAudio();">
			<audio id="audio" controls="controls">
	  			<source id="audioSource" src=""></source>
	  			Your browser does not support the audio format.
			</audio>
		</div>
	
		<div class="greenTextfield">
			<div class="pokemonInfo" id="eintrag">Eintrag</div>
			<div class="pokemonInfo" id="typ">Typ</div>
			<div class="pokemonInfo" id="filler">aaa</div>
			<div class="pokemonInfo" id="ort">Ort</div>
			<div class="pokemonInfo" id="filler">aaa</div>
			<div class="pokemonInfo" id="basis"> Basis</div>
			<div class="pokemonInfo" id="ent1">Stufe 1</div>
			<div class="pokemonInfo" id="ent2">Stufe 2</div>
		</div>
	</div>
	
	<script type="text/javascript" src="../Javascript/pokemon.js"></script>
	<script type="text/javascript" src="../Javascript/jquery.js"></script>
</body>
</html>