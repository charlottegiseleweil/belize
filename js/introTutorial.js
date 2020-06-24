//layer checks
   function LULC1Check(){
      lulc1Check = document.getElementById("LULCPanel1");
      if (lulc1Check.className == "LULCpanel"){
         lulc1Check.className="close";
      }
   }
   function LULC2Check(){
      lulc2Check = document.getElementById("LULCPanel2");
      if (lulc2Check.className == "LULCpanel"){
         lulc2Check.className="close";
      }
   }
   function LULC3Check(){
      lulc3Check = document.getElementById("LULCPanel3");
      if (lulc3Check.className == "LULCpanel"){
         lulc3Check.className="close";
      }
   }
   function aboutPanelCheck(){
      aboutCheck = document.getElementById("AboutPanel");
      if (aboutCheck.className == "AboutPanel"){
         aboutCheck.className = "close";
      }
   }

//introTutorial Functions
// document.getElementById("aboutTutorialButton").addEventListener("click", function(){
// 	x = document.getElementById("introPanel1");
// 	x.className = "introPanel";
// });

document.getElementById("skipTutorialButton").addEventListener("click", function(){
  x = document.getElementById("introPanel1");
  x.className = "close";
});

document.getElementById("next1Button").addEventListener("click", function(){
	x = document.getElementById("introPanel1");
	x.className = "close";
	y = document.getElementById("introPanel2");
	y.className = "introPanel";
});

document.getElementById("close2TutorialButton").addEventListener("click", function(){
  x = document.getElementById("introPanel2");
  x.className = "close";
});

document.getElementById("next2Button").addEventListener("click", function(){
	x = document.getElementById("introPanel2");
	x.className = "close";
	y = document.getElementById("introPanel3");
	y.className = "introPanel";
});

document.getElementById("prev2Button").addEventListener("click", function(){
	x = document.getElementById("introPanel2");
	x.className = "close";
	y = document.getElementById("introPanel1");
	y.className = "introPanel";
});

document.getElementById("prev3Button").addEventListener("click", function(){
	x = document.getElementById("introPanel3");
	x.className = "close";
	y = document.getElementById("introPanel2");
	y.className = "introPanel";
});

document.getElementById("finishTutorialButton").addEventListener("click", function(){
  x = document.getElementById("introPanel3");
  x.className = "close";
});

document.getElementById("next3Button").addEventListener("click", function(){
  x = document.getElementById("introPanel3");
  x.className = "close";
});