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
		<a href="pokemonList.php" class="menuBtn" id="pokemonBtn">Pokemon</a>
		<a class="menuBtn" id="statisticsBtn">Stats</a>
		<a href="map.php" class="menuBtn" id="mapBtn">Map</a>
		
		<div class="whiteTextfield" id="mapWhiteText"></div>	
		
		<div class="greenTextfield">
			<p id="placeName"></p>
			<div id="mapInfo">
				Hier siehst du eine Karte der Kanto-Region<br>
				Klicke auf einen Ort, um zu erfahren, welche Pokemon dort leben!<br>
			</div>		
		</div>
	</div>
	<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"
   integrity="sha512-A7vV8IFfih/D732iSSKi20u/ooOfj/AGehOKq0f4vLT1Zr2Y+RX7C+w8A1gaSasGtRUZpF/NZgzSAu4/Gc41Lg=="
   crossorigin=""></script>
   <script type="text/javascript" src="../Javascript/jquery.js"></script>
   <script type="text/javascript" src="../Javascript/pokemon.js"></script>	
   <script type="text/javascript" src="../Javascript/map.js"></script>
</body>
</html>