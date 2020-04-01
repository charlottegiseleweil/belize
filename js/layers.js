//Layer Styling - these are independent, need separate styling for layers
	var currentAgStyle = {
		"color": "#F7B733",
		"fillOpacity":0.9,
		"weight": 0.5,
	};

	var roadStyle = {
		"color": "grey"

	};

	var allRoadsStyle = {
		"color": "#654321",
		"weight": 0.7,
	};

	var myStyle2 = {
		"color": "green"
	}

	var CMCCGeographicZoneStyle = {
		"color": "#FC4A1A",
		"fillOpacity":0.5,
		"weight": 0.9,		
	}

	var currentTimberStyle = {
		"color": "#013220",
		"fillOpacity":0.8,
		"weight": 0.5,		
	}

	var waterwaysStyle = {
		"color": "#4169E1",
		"fillOpacity":0.8,
		"weight": 0.5,		
	}

//Icon Declarations 
	var hotelLodgingIcon = L.icon({
    iconUrl: 'img/bed.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var tourismSitesIcon = L.icon({
    iconUrl: 'img/leaf.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var culturalSitesIcon = L.icon({
    iconUrl: 'img/monument.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var currentMiningIcon = L.icon({
    iconUrl: 'img/coal.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});



	var solarGoodIcon = L.icon({
    iconUrl: 'img/sun-2.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var solarBestIcon = L.icon({
    iconUrl: 'img/sun.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});


	var windGoodIcon = L.icon({
    iconUrl: 'img/wind-2.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var windBestIcon = L.icon({
    iconUrl: 'img/wind.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var tourismSitesIcon = L.icon({
    iconUrl: 'img/leaf.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var cmccCommunityIcon = L.icon({
    iconUrl: 'img/home-run.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	var damsIcon = L.icon({
    iconUrl: 'img/hydro-power.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

//Layer Data Load In
	var newRoad = new L.Shapefile("data/newRoad.zip", {style: roadStyle});

	//var allAgriculture = new L.layerGroup([agZones]); //add expanded ag when available to finish
	var agZones = new L.Shapefile("data/ag_defined_v1.zip", {style: currentAgStyle});


	var waterWays = new L.Shapefile("data/ALEX/WaterWays.zip", {style: waterwaysStyle});
	var waterBody = new L.Shapefile("data/ALEX/WaterBody.zip", {style: waterwaysStyle});
	var majorRivers = new L.Shapefile("data/ALEX/MajorRivers.zip", {style: waterwaysStyle});
	var water = L.layerGroup([waterWays, waterBody, majorRivers]);

	var hotelLodging = L.geoJSON.ajax("data/hotelsSitesTourism.geojson", {pointToLayer:returnHotelMarker});
	var tourismSites = L.geoJSON.ajax("data/tourismSites.geojson", {pointToLayer:returntourismSitesMarker});
	var culturalSites = L.geoJSON.ajax("data/culturalSitesTourism.geojson", {pointToLayer:returnCulturalSitesMarker}); //These were all over, maybe filter, talk to team about which ones they identified for the region?
	var allTourism = L.layerGroup([hotelLodging, tourismSites, culturalSites]);

	var arenal = new L.geoJSON.ajax("data/cmcc/arenal.geojson", {pointToLayer: returnCMCCCommunitiesMarker}); //NEED TO CHECK LAYER
	var benqueViejo = new L.geoJSON.ajax("data/cmcc/benqueViejo.geojson", {pointToLayer: returnCMCCCommunitiesMarker});
	var cristoRey = new L.geoJSON.ajax("data/cmcc/cristoRey.geojson", {pointToLayer: returnCMCCCommunitiesMarker});
	var elProgresso = new L.geoJSON.ajax("data/cmcc/elProgresso.geojson", {pointToLayer: returnCMCCCommunitiesMarker});
	var georgeville = new L.geoJSON.ajax("data/cmcc/georgeville.geojson", {pointToLayer: returnCMCCCommunitiesMarker});
	var lowerBartonCreek = new L.geoJSON.ajax("data/cmcc/lowerBartonCreek.geojson", {pointToLayer: returnCMCCCommunitiesMarker});
	var sanAntonio = new L.geoJSON.ajax("data/cmcc/sanAntonio.geojson", {pointToLayer: returnCMCCCommunitiesMarker});
	var sanIgnacio = new L.geoJSON.ajax("data/cmcc/sanIgnacio.geojson", {pointToLayer: returnCMCCCommunitiesMarker});
	var sanJoseSuccotz = new L.geoJSON.ajax("data/cmcc/sanJoseSuccotz.geojson", {pointToLayer: returnCMCCCommunitiesMarker});
	var santaElena = new L.geoJSON.ajax("data/cmcc/santaElena.geojson", {pointToLayer: returnCMCCCommunitiesMarker});
	var upperBartonCreek = new L.geoJSON.ajax("data/cmcc/upperBartonCreek.geojson", {pointToLayer: returnCMCCCommunitiesMarker});

	var cmccGeographicZone = new L.geoJSON.ajax("data/cmccGeographyCleaned.geojson", {style:CMCCGeographicZoneStyle });

	var bullRidgeCompartmentBoundry = new L.Shapefile("data/timberConcessions/BullRidgeCompartmentBoundry.zip", {style: currentTimberStyle});
	var CFR = new L.Shapefile("data/timberConcessions/CFR.zip", {style: currentTimberStyle});
	var fdPortionMPR = new L.Shapefile("data/timberConcessions/FD_Portion_MPR.zip", {style: currentTimberStyle});
	var plcArea = new L.Shapefile("data/timberConcessions/PLCArea.zip", {style: currentTimberStyle});
	var recinosMngtArea = new L.Shapefile("data/timberConcessions/RecinosMngtArea.zip", {style: currentTimberStyle});

	//var solarBest = new L.geoJSON.ajax("data/solarBestGJ.geojson", {pointToLayer:returnSolarBestMarker});
	var solarGood = new L.geoJSON.ajax("data/solarGoodGJ.geojson", {pointToLayer:returnSolarGoodMarker});
	var solarBest = new L.geoJSON.ajax("data/solarBestGJ.geojson", {pointToLayer:returnSolarBestMarker});
	//var windBest = new L.geoJSON.ajax("data/windBestGJ.geojson", {pointToLayer:returnWindBestMarker});
	var windGood = new L.geoJSON.ajax("data/windGoodGJ.geojson", {pointToLayer:returnWindGoodMarker});
	var windBest = new L.geoJSON.ajax("data/windBestGJ.geojson", {pointToLayer:returnWindBestMarker});


	var dams = new L.geoJSON.ajax("data/damsGJ.geojson", {pointToLayer:returnDamsMarker});

	var allRoads = new L.Shapefile("data/allRoads.zip", {style: allRoadsStyle});
	var currentMining = new L.geoJSON.ajax("data/miningRegionsGJ.geojson", {pointToLayer:returncurrentMiningMarker});

	var allEnergy = L.layerGroup([solarBest, solarGood, windBest, windGood, dams]);

	var agZone = L.layerGroup([agZones]);
		cmccCommPoints = L.layerGroup([arenal, benqueViejo, cristoRey, elProgresso, georgeville, lowerBartonCreek, sanAntonio, sanIgnacio, sanJoseSuccotz, santaElena, upperBartonCreek]);
		cmccZone = L.layerGroup([cmccGeographicZone]);
		timberConcessions = L.layerGroup([bullRidgeCompartmentBoundry, fdPortionMPR, plcArea, recinosMngtArea]);
		water = L.layerGroup([waterWays, waterBody, majorRivers]);
		energySites = L.layerGroup([solarBest, solarGood, windBest, windGood]);


//Additional Info Pop-ups

//CMCC Communitites
arenal.bindPopup(document.getElementById("arenalPopup"));
benqueViejo.bindPopup(document.getElementById("benqueViejoPopup"));
cristoRey.bindPopup(document.getElementById("cristoReyPopup"));
elProgresso.bindPopup(document.getElementById("elProgressoPopup"));
georgeville.bindPopup(document.getElementById("georgevillePopup"));
lowerBartonCreek.bindPopup(document.getElementById("lowerBartonCreekPopup"));
sanAntonio.bindPopup(document.getElementById("sanAntonioPopup"));
sanIgnacio.bindPopup(document.getElementById("sanIgnacioPopup"));
sanJoseSuccotz.bindPopup(document.getElementById("sanJoseSuccotzPopup"));
santaElena.bindPopup(document.getElementById("santaElenaPopup"));
upperBartonCreek.bindPopup(document.getElementById("upperBartonCreekPopup"));

//Timber
bullRidgeCompartmentBoundry.bindPopup("<b>Bull Ridge Compartment Boundry</b>");
fdPortionMPR.bindPopup("<b>FD Portion MPR</b>");
plcArea.bindPopup("<b>PLC Area</b>");
recinosMngtArea.bindPopup("<b>Recinos Management Area</b>");

//Tourism
//Hotels
hotelLodging.bindPopup("This is a hotel")
//Natural Sites
tourismSites.bindPopup("This is a tourist site with cool nature")
//Archeological/Cultural Sites
culturalSites.bindPopup("This is a tourist site with important archeological and cultural significance")



//Layer Toggling
	//half function set up
function toggleOn(layer, elementIL) { // this one works well above too
	layer.addTo(mymap);
	x = document.getElementById(elementIL);
	x.className = "ILImage";
}

function toggleOff(layer, elementIL) {
	mymap.removeLayer(layer); //toggle off()
	x = document.getElementById(elementIL);
	x.className = "close";
}

/*function layerToggle() {
	if (this.checked){
		newRoad.addTo(mymap);
		x = document.getElementById("newRoadIL");
		x.className = "ILImage";
	} else {
		mymap.removeLayer(newRoad);
		x = document.getElementById("newRoadIL");
		x.className= "close";
	}
}*/


newRoadIL = "newRoadIL"
//display on load event
$(document).ready(function(){
	$("#newRoadCheckBox").prop("checked", true);
			newRoad.addTo(mymap);
			x = document.getElementById(newRoadIL);
			x.className = "ILImage";
	});

//document.getElementById("newRoadCheckBox").onclick = function(){
//	layerToggle();
//}

document.getElementById("newRoadCheckBox").onclick = function(){
	if (this.checked){
		toggleOn(newRoad, newRoadIL);
	} else {
		toggleOff(newRoad, newRoadIL);
	}
}	


//Large layer clicks

/*//Tourism
$(document).ready(function(){
    $("#allTourismCheckBox").click(function(){
        $("#tourismArchKeyCheckBox").prop("checked", true);
        	if (this.checked){
				allTourism.addTo(mymap);
				x = document.getElementById("tourismArckKeyIL");
				x.className = "ILImage";



			}
        $("#tourismImpactedCheckBox").prop("checked", true);
        	if (this.checked){
				newRoad.addTo(mymap);
				x = document.getElementById("impactedTourismIL");
				x.className = "ILImage";

			}
        $("#tourismExpandedCheckBox").prop("checked", true);
    		if (this.checked){
				newRoad.addTo(mymap);
				x = document.getElementById("tourismExpansionIL");
				x.className = "ILImage";

			}
    });
    $("#tourismArchKeyCheckBox").click(function(){
        $("#allTourismCheckBox").prop("checked", false);
    });
    $("#tourismImpactedCheckBox").click(function(){
        $("#allTourismCheckBox").prop("checked", false);
    });
    $("#tourismExpandedCheckBox").click(function(){
        $("#allTourismCheckBox").prop("checked", false);
    });
}); //minor bugs with layer toggling, when road as placeholder is replaced with true layer won't be an issue*/



	tourismArchKeyIL = "tourismArckKeyIL"
	document.getElementById("tourismArchKeyCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(allTourism, tourismArchKeyIL);
		} else {
			toggleOff(allTourism, tourismArchKeyIL);
		}
	}	

	impactedTourismIL = "impactedTourismIL"
	document.getElementById("tourismImpactedCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(newRoad, impactedTourismIL);
		} else {
			toggleOff(newRoad, impactedTourismIL);

		}
	}	

	tourismExpansionIL = "tourismExpansionIL"
	document.getElementById("tourismExpandedCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(newRoad, tourismExpansionIL);
		} else {
			toggleOff(newRoad, tourismExpansionIL);
		}
	}			


	currentMiningIL = "currentMiningIL"
	document.getElementById("miningCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(currentMining, currentMiningIL);
		} else {
			toggleOff(currentMining, currentMiningIL);
		}
	}	

	miningExpansionIL = "miningExpansionIL"
	document.getElementById("miningExpansionCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(newRoad, miningExpansionIL);
		} else {
			toggleOff(newRoad, miningExpansionIL);
		}
	}			


	currentAgricultureIL = "currentAgricultureIL"
	document.getElementById("currentAgricultureCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(agZones, currentAgricultureIL);
		} else {
			toggleOff(agZones, currentAgricultureIL);
		}
	}	

	agExpansionIL = "agExpansionIL"
	document.getElementById("agExpansionCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(newRoad, agExpansionIL);
		} else {
			toggleOff(newRoad, agExpansionIL);
		}
	}	



	currentTimberIL = "currentTimberIL"
	document.getElementById("timberCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(timberConcessions, currentTimberIL);
		} else {
			toggleOff(timberConcessions, currentTimberIL);
		}
	}	

	timberExpansionIL = "timberExpansionIL"
	document.getElementById("timberExpansionCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(newRoad, timberExpansionIL);
		} else {
			toggleOff(newRoad, timberExpansionIL);
		}
	}	


	energyIL = "energyIL"
	document.getElementById("energyCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(dams, energyIL);
		} else {
			toggleOff(dams, energyIL);
		}
	}	

	potentialEnergyIL = "potentialEnergyIL"
	document.getElementById("energySitesCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(energySites, potentialEnergyIL);
		} else {
			toggleOff(energySites, potentialEnergyIL);
		}
	}			

	watershedsIL = "watershedsIL"
	document.getElementById("watershedsCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(water, watershedsIL);
		} else {
			toggleOff(water, watershedsIL);
		}
	}	

	CMCCAreasIL = "CMCCAreasIL"
	document.getElementById("CMCCAreasCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(cmccGeographicZone, CMCCAreasIL);
		} else {
			toggleOff(cmccGeographicZone, CMCCAreasIL);
		}
	}

	CMCCCommunitiesIL = "CMCCCommunitiesIL"
	document.getElementById("CMCCCommunitiesCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(cmccCommPoints, CMCCCommunitiesIL);
		} else {
			toggleOff(cmccCommPoints, CMCCCommunitiesIL);
		}
	}	

	roadsIL = "roadsIL"
	document.getElementById("roadsCheckBox").onclick = function(){
		if (this.checked){
			toggleOn(allRoads, roadsIL);
		} else {
			toggleOff(allRoads, roadsIL);
		}
	}	






//Icon setups 
//function below should replace all others in this list, json and latlng values do not translate well when moved up top
function returnIconMarker (json, latlng, iconName){
	return L.marker(latlng, {
		icon: iconName
	});
}

function returnHotelMarker(json, latlng){
	return L.marker(latlng, {
		icon: hotelLodgingIcon
	});
}

function returntourismSitesMarker(json, latlng){
	return L.marker(latlng, {
		icon: tourismSitesIcon
	});
}

function returnCulturalSitesMarker(json, latlng){
	return L.marker(latlng, {
		icon: culturalSitesIcon
	});
}

function returncurrentMiningMarker(json, latlng){
	return L.marker(latlng, {
		icon: currentMiningIcon
	});
}

function returnCMCCCommunitiesMarker(json, latlng){
	return L.marker(latlng, {
		icon: cmccCommunityIcon //update icon - add pop-up with info
	});
}

function returnSolarBestMarker(json, latlng){
	return L.marker(latlng, {
		icon: solarBestIcon
	});
}

function returnSolarGoodMarker(json, latlng){
	return L.marker(latlng, {
		icon: solarGoodIcon
	});
}

function returnWindBestMarker(json, latlng){
	return L.marker(latlng, {
		icon: windBestIcon
	});
}

function returnWindGoodMarker(json, latlng){
	return L.marker(latlng, {
		icon: windGoodIcon
	});
}

function returnDamsMarker(json, latlng){
	return L.marker(latlng, {
		icon: damsIcon
	});
}
