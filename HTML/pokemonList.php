<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>Pokedex - Kanto</title>
<link rel= stylesheet href ="../CSS/stylesAll.css">
</head>

<body onload="loadTable()">
	<div class="wrapper">
		<a href="index.php" id="homeBtn">Home</a>
		<a href="pokemonList.php" class="menuBtn" id="pokemonBtn">Pokemon</a>
		<a href="pokemonRan.php" class="menuBtn" id="statisticsBtn">Stats</a>
		<a href="map.php" class="menuBtn" id="mapBtn">Map</a>
		
		<div class="whiteTextfield">
			<table>
				<tr>
					<td>
						<div id="tabHead" >
							<table>
								<tr>
									<th>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</th>
									<th>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;#</th>
									<th>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Name</th>
								</tr>
							</table>
						</div>	
					</td>
				</tr>	
				<tr>
					<td>
						<div id="tabBody">
							<table id="pokeList">
								
							</table>
						</div>
					</td>
				</tr>
			</table>
		</div>	
	
		<div class="greenTextfield" id="pokemonListGreen">
			Hier siehst du eine Liste aller Pokemon die es in Kanto zu finden gibt.<br>
			W�hle eins von ihnen aus, um n�here Informationen dazu zu erhalten.
		</div>
	</div>
	
	<script type="text/javascript" src="../Javascript/jquery.js"></script>
	<script type="text/javascript" src="../Javascript/pokemon.js"></script>
</body>
</html>