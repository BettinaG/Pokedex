var bounds = [[0,0], [1017,1597]];

var map = L.map('mapWhiteText', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 0.5,
    maxBounds: bounds,
});

var image = L.imageOverlay('../Graphics/Kanto.png', bounds).addTo(map);

map.fitBounds(bounds);

//////////////////////////////////////////////////



var yx = L.latLng;

var xy = function(x, y) {			// zum Arbeiten mit Koordinaten statt LatLng
    if (L.Util.isArray(x)) {    
        return yx(x[1], x[0]);
    }
    return yx(y, x); 
};

var polygons = new Array(55);
var orte = new Array(55);			// ort[x] = name,x,y,höhe,breite
for(i=0;i<orte.length;i++)
	{
		orte[i]=new Array();
	}
orte[0]  = ["Alabastia",625, 310, 60, 60];
orte[1]  = ["Vertania City", 585, 500, 105, 110];
orte[2]  = ["Mamoria City", 625, 810, 115, 110];
orte[3]  = ["Azuria City", 1135, 750, 80, 100];
orte[4]  = ["Orania City", 1130, 390, 100, 90];
orte[5]  = ["Lavandia City", 1360, 550, 60, 44];
orte[6]  = ["Lavandia City", 1405, 550, 45, 15];
orte[7]  = ["Prismania City", 940, 515, 105, 115];
orte[8]  = ["Fuchsania City", 930, 150, 104, 120];
orte[9]  = ["Saffronia City", 1110, 550, 125, 125];
orte[10] = ["Zinnoberinsel", 610, 75, 45, 95];
orte[11] = ["Indigo Plateau", 375, 670, 40, 45];
orte[12] = ["Geheimdungeon", 1130, 831, 15, 20];
orte[13] = ["Digdas Höhle", 670, 780, 20, 20];
orte[14] = ["Digdas Höhle", 1250, 465, 15, 25];
orte[15] = ["Felstunnel", 1370, 730, 15, 20];
orte[16] = ["Felstunnel", 1370, 635, 35, 60];
orte[17] = ["Kraftwerk", 1380, 690, 20, 30];
orte[18] = ["Mondberg", 875, 830, 50, 90];
orte[19] = ["M.S. Anne", 1150, 360, 29, 50];
orte[20] = ["Pokémon-Haus", 640, 60, 14, 20];
orte[21] = ["Pokémon-Turm", 1405, 596, 25, 25];
orte[22] = ["Safari-Zone", 950, 255, 60, 95];
orte[23] = ["Seeschauminseln", 765, 55, 50, 80];
orte[24] = ["Siegesstraße", 360, 635, 34, 80];
orte[25] = ["Vertania Wald", 620, 680, 99, 85];
orte[26] = ["Route 1", 620, 371, 128, 70];
orte[27] = ["Route 2", 610, 611, 68, 90];
orte[28] = ["Route 3", 736, 795, 70, 134];
orte[29] = ["Route 3", 871, 800, 29, 59];
orte[30] = ["Route 4", 940, 790, 60, 194];
orte[31] = ["Route 5", 1125, 676, 74, 65];
orte[32] = ["Route 6", 1130, 491, 58, 60];
orte[33] = ["Route 7", 1056, 555, 60, 53];
orte[34] = ["Route 8", 1236, 555, 50, 123];
orte[35] = ["Route 9", 1236, 746, 49, 194];
orte[36] = ["Route 9", 1391, 711, 64, 39];
orte[37] = ["Route 10", 1365, 611, 23, 39];
orte[38] = ["Route 11", 1221, 440, 24, 139];
orte[39] = ["Route 11", 1276, 465, 25, 84];
orte[40] = ["Route 12", 1385, 310, 239, 40];
orte[41] = ["Route 13", 1235, 300, 35, 149];
orte[42] = ["Route 14", 1250, 190, 109, 35];
orte[43] = ["Route 15", 1051, 185, 40, 198];
orte[44] = ["Route 16", 825, 500, 70, 114];
orte[45] = ["Route 17", 820, 200, 299, 64];
orte[46] = ["Route 18", 885, 180, 40, 44];
orte[47] = ["Route 19", 950, 96, 53, 45];
orte[48] = ["Route 20", 846, 50, 45, 149];
orte[49] = ["Route 20", 706, 50, 45, 58];
orte[50] = ["Route 21", 620, 121, 188, 65];
orte[51] = ["Route 22", 441, 490, 55, 144];
orte[52] = ["Route 23", 360, 530, 104, 80];
orte[53] = ["Route 24", 1180, 831, 144, 55];
orte[54] = ["Route 25", 1236, 940, 40, 174];

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: 'lawnGreen',
        fillOpacity: 0.2
    });
}

function resetHighlight(e) {
	var layer = e.target;
	
	layer.setStyle({
		color: 'transparent'
	})
}

for(i=0;i<orte.length;i++){
	polygons[i] = L.polygon([
	                    xy(orte[i][1],			 orte[i][2]),
	                    xy(orte[i][1]+orte[i][4],orte[i][2]),
	                    xy(orte[i][1]+orte[i][4],orte[i][2]+orte[i][3]),
	                    xy(orte[i][1],			 orte[i][2]+orte[i][3])
	                    ],{
							color: 'transparent',
							}).addTo(map);	
	polygons[i].bindPopup(orte[i][0]).addTo(map);
	polygons[i].on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
        });
}
