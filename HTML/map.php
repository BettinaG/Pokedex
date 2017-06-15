<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>Pokedex - Kanto</title>
<link rel= stylesheet href ="../CSS/stylesAll.css">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"
   integrity="sha512-07I2e+7D8p6he1SIM+1twR5TIrhUQn9+I6yjqD53JQjFiMf8EtC93ty0/5vJTZGF8aAocvHYNEDJajGdNx1IsQ=="
   crossorigin=""/>
</head>
<body>
	<div class="wrapper">
		<a href="index.php" id="homeBtn">Home</a>
		<a href="pokemon.php" class="menuBtn" id="pokemonBtn">Pokemon</a>
		<a class="menuBtn" id="statisticsBtn">Stats</a>
		<a href="map.php" class="menuBtn" id="mapBtn">Map</a>
		
		<div class="whiteTextfield" id="mapWhiteText"></div>	
		
		<div class="greenTextfield">
		Links siehst du 4 Knöpfe zur Navigation:<br><br>
		Blau: Damit gelangst du jederzeit zu dieser Startseite zurück<br><br>
		Rot:  Hier siehst du eine Liste aller 151 Pokemon und findest viele Informationen zu allen von ihnen!<br><br>
		Gelb: Hier gibt es einige Interessante Statistiken zu entdecken.<br><br>
		Grün: Hier findest du eine Karte der gesamten Kantoregion mit Informationen zu allen Routen und Orten!
		</div>
	</div>
	<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"
   integrity="sha512-A7vV8IFfih/D732iSSKi20u/ooOfj/AGehOKq0f4vLT1Zr2Y+RX7C+w8A1gaSasGtRUZpF/NZgzSAu4/Gc41Lg=="
   crossorigin=""></script>
   <script type="text/javascript" src="../Javascript/map.js"></script>
</body>
</html>