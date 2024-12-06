// Array containing different titles to cycle through
var titles = [
  "$ Illusions.xyz", 
  "$ llusions.xyz", 
  "$ lusions.xyz", 
  "$ usions.xyz", 
  "$ sions.xyz", 
  "$ ions.xyz", 
  "$ ons.xyz", 
  "$ ns.xyz", 
  "$ s.xyz", 
  "$ xyz", 
  "$ yz", 
  "$ z", 
  "$ yz", 
  "$ xyz", 
  "$ .xyz", 
  "$ s.xyz", 
  "$ ns.xyz", 
  "$ ons.xyz", 
  "$ ions.xyz", 
  "$ sions.xyz", 
  "$ usions.xyz", 
  "$ lusions.xyz", 
  "$ llusions.xyz", 
  "$ Illusions.xyz", 
];

function changeTitle() {
  var index = 0; 
  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  },
  200); 
}

changeTitle();
