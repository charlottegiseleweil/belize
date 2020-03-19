
//About Panel 
function aboutPanelClose(){
	x = document.getElementById("AboutPanel");
	x.className="close";
}

function aboutPanelOpen(){
   dataDownCheck = document.getElementById("dataDownloadPanel");
   if (dataDownCheck.className == "dataDownload"){
      alert("it checks!");
   }
	x = document.getElementById("AboutPanel");
	x.className="AboutPanel";
}

//LULC Panels

function LULCPanelClose1(){ //can probably do a get element by class for all panels for this later
   x = document.getElementById("LULCPanel1");
   x.className="LULCclose";
}

function LULCPanelClose2(){
   x = document.getElementById("LULCPanel2");
   x.className="LULCclose";
}

function LULCPanelClose3(){
   x = document.getElementById("LULCPanel3");
   x.className="LULCclose";
}
//class name changes to .close when closed, LULCclose
function LULCPanelOpen(){
   x =document.getElementById("LULCPanel1");
   x.className="LULCpanel";
   y =document.getElementById("LULCPanel2");
   y.className="LULCpanel";
   z =document.getElementById("LULCPanel3");
   z.className="LULCpanel";
}

//Data Download Panel
function dataPanelClose(){
   x = document.getElementById("dataDownloadPanel");
   x.className="close";
}

function dataPanelOpen(){
   x = document.getElementById("dataDownloadPanel");
   x.className="dataDownload";
}

