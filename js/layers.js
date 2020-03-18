	var myStyle = {
		"color": "red"
	};

	var roadStyle = {
		"color": "grey"

	};

	var myStyle2 = {
		"color": "green"
	}

	var CMCCGeographicZoneStyle = {
		
	}

	var greenIcon = L.icon({
    iconUrl: 'imgs/solar-panel.png',

    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	//L.marker([16.872890378907783, -88.87390136718749], {icon: greenIcon}).addTo(mymap).bindPopup("Hi <img src= 'leafletpractice/imgs/placeholder.png'>");


	var newRoad = new L.Shapefile("data/newRoad.zip", {style: roadStyle});
	var agZones = new L.Shapefile("data/ag_defined_v1.zip", {style: myStyle});


	var waterWays = new L.Shapefile("data/ALEX/WaterWays.zip");
	var waterBody = new L.Shapefile("data/ALEX/WaterBody.zip");
	var majorRivers = new L.Shapefile("data/ALEX/MajorRivers.zip");

	var water = L.layerGroup([waterWays, waterBody, majorRivers]);

	var hotelLodging = L.geoJSON.ajax("data/hotelsSitesTourism.geojson", {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
   		}	//where does feature parameter go?
}).addTo(mymap);

	var tourismSites = L.geoJSON.ajax("data/tourismSites.geojson");
	var culturalSites = L.geoJSON.ajax("data/culturalSitesTourism.geojson"); //These were all over, maybe filter, talk to team about which ones they identified for the region?


	var cmccCommunities = new L.Shapefile("data/CMCCCommunitiesPoints.zip");
	var cmccGeographicZone = new L.Shapefile("data/CMCCGeographicScope2.zip", {style: CMCCGeographicZoneStyle});
	var bullRidgeCompartmentBoundry = new L.Shapefile("data/timberConcessions/BullRidgeCompartmentBoundry.zip");
	var CFR = new L.Shapefile("data/timberConcessions/CFR.zip");
	var FDPortionMPR = new L.Shapefile("data/timberConcessions/FD_Portion_MPR.zip");
	var PLCArea = new L.Shapefile("data/timberConcessions/PLCArea.zip");
	var RecinosMngtArea = new L.Shapefile("data/timberConcessions/RecinosMngtArea.zip");
	var waterWays = new L.Shapefile("data/ALEX/WaterWays.zip");
	var waterBody = new L.Shapefile("data/ALEX/WaterBody.zip");
	var majorRivers = new L.Shapefile("data/ALEX/MajorRivers.zip");
	var solarBest = new L.Shapefile("data/solarBest.zip");
	var solarGood = new L.Shapefile("data/solarGood.zip");
	var windBest = new L.Shapefile("data/windBest.zip");
	var windGood = new L.Shapefile("data/windGood.zip");
	var dams = new L.Shapefile("data/servicesheds_hydro_CMCC/dams.zip");
	var allRoads = new L.Shapefile("data/allRoads.zip");

	var roads4 = L.layerGroup([newRoad]);
		agZone = L.layerGroup([agZones]);
		cmccCommPoints = L.layerGroup([cmccCommunities]);
		cmccZone = L.layerGroup([cmccGeographicZone]);
		timberConcessions = L.layerGroup([bullRidgeCompartmentBoundry, CFR, FDPortionMPR, PLCArea, RecinosMngtArea]);
		water = L.layerGroup([waterWays, waterBody, majorRivers]);
		energySites = L.layerGroup([solarBest, solarGood, windBest, windGood]);
		allRoads = L.layerGroup([allRoads]);

	//document.getElementById("newRoad").onclick = function() {newRoadLayerToggle(newRoad)};
	
	document.getElementById("newRoadCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("newRoadIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("newRoadIL");
			x.className = "close";
		}
	}

	document.getElementById("allTourismCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("allTourismIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("allTourismIL");
			x.className = "close";
		}
	}	

	document.getElementById("tourismArchKeyCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("tourismArckKeyIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("tourismArckKeyIL");
			x.className = "close";
		}
	}	

	document.getElementById("tourismImpactedCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("impactedTourismIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("impactedTourismIL");
			x.className = "close";
		}
	}	

	document.getElementById("tourismExpandedCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("tourismExpansionIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("tourismExpansionIL");
			x.className = "close";
		}
	}			

	document.getElementById("allMiningCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("allMiningIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("allMiningIL");
			x.className = "close";
		}
	}	

	document.getElementById("miningCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("currentMiningIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("currentMiningIL");
			x.className = "close";
		}
	}	

	document.getElementById("miningExpansionCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("miningExpansionIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("miningExpansionIL");
			x.className = "close";
		}
	}			

		document.getElementById("allAgricultureCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("allAgricultureIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("allAgricultureIL");
			x.className = "close";
		}
	}	

	document.getElementById("currentAgricultureCheckBox").onclick = function(){
		if (this.checked){
			agZones.addTo(mymap);
			x = document.getElementById("currentAgricultureIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(agZones);
			x = document.getElementById("currentAgricultureIL");
			x.className = "close";
		}
	}	

	document.getElementById("agExpansionCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("agExpansionIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("agExpansionIL");
			x.className = "close";
		}
	}	

	document.getElementById("allTimberCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("allTimberIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("allTimberIL");
			x.className = "close";
		}
	}	

	document.getElementById("timberCheckBox").onclick = function(){
		if (this.checked){
			timberConcessions.addTo(mymap);
			x = document.getElementById("currentTimberIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(timberConcessions);
			x = document.getElementById("currentTimberIL");
			x.className = "close";
		}
	}	

	document.getElementById("timberExpansionCheckBox").onclick = function(){
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("timberExpansionIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("timberExpansionIL");
			x.className = "close";
		}
	}	

	document.getElementById("energyCheckBox").onclick = function(){
		if (this.checked){
			dams.addTo(mymap);
			x = document.getElementById("energyIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(dams);
			x = document.getElementById("energyIL");
			x.className = "close";
		}
	}	

	document.getElementById("energySitesCheckBox").onclick = function(){
		if (this.checked){
			energySites.addTo(mymap);
			x = document.getElementById("potentialEnergyIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(energySites);
			x = document.getElementById("potentialEnergyIL");
			x.className = "close";
		}
	}			

	document.getElementById("watershedsCheckBox").onclick = function(){
		if (this.checked){
			water.addTo(mymap);
			x = document.getElementById("currentAgricultureIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(water);
			x = document.getElementById("currentAgricultureIL");
			x.className = "close";
		}
	}	

	document.getElementById("CMCCAreasCheckBox").onclick = function(){
		if (this.checked){
			cmccGeographicZone.addTo(mymap);
			x = document.getElementById("CMCCAreasIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(cmccGeographicZone);
			x = document.getElementById("CMCCAreasIL");
			x.className = "close";
		}
	}

	document.getElementById("CMCCCommunitiesCheckBox").onclick = function(){
		if (this.checked){
			cmccCommunities.addTo(mymap);
			x = document.getElementById("CMCCCommunitiesIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(cmccCommunities);
			x = document.getElementById("CMCCCommunitiesIL");
			x.className = "close";
		}
	}	

	document.getElementById("roadsCheckBox").onclick = function(){
		if (this.checked){
			allRoads.addTo(mymap);
			x = document.getElementById("roadsIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(allRoads);
			x = document.getElementById("roadsIL");
			x.className = "close";
		}
	}		

	/*function newRoadLayerToggle(layer) {
		if (this.checked){
			newRoad.addTo(mymap);
			x = document.getElementById("newRoadIL");
			x.className = "ILImage";
		} else {
			mymap.removeLayer(newRoad);
			x = document.getElementById("newRoadIL");
			x.className = "close";
		}
	}


	}*/

	
	/*function layerOnOff(layer, shouldAddLayer, legendDiv){
   if (shouldAddLayer) {
      setTimeout(() => layer.addTo(mymap), 0);
      $(legendDiv).removeClass('hide');
   } else {
      map.removeLayer(layer);
      $(legendDiv).addClass('hide');
   }
}

function createCheckboxForLayer (cssSelector, layer, ledendDiv) {
   $(cssSelector).change(function(){
      layerOnOff(layer, this.checked, ledendDiv);
   });
}*/

//Marker Functions
function returnHotelMarker(json, latlng){
	return L.circleMarker(latlng, {radius:10, color:'deeppink'});
}

