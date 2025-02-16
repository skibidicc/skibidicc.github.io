// Array containing different titles to cycle through
var titles = [
  "$ Phobia.lua $", 
  "$ hobia.lua $", 
  "$ obia.lua $", 
  "$ bia.lua $", 
  "$ ia.lua $", 
  "$ a.lua $", 
  "$ .lua $", 
  "$ lua $", 
  "$ ua $", 
  "$ a $", 
  "$ $", 
  "$ N $", 
  "$ Ni $", 
  "$ Nig $", 
  "$ Nigg $", 
  "$ Nigga $", 
  "$ Niggah $", 
  "$ Niggaha $", 
  "$ Niggahac $", 
  "$ Niggahack $", 
  "$ Niggahack. $", 
  "$ Niggahack.n $", 
  "$ Niggahack.ne $", 
  "$ Niggahack.net $", 
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
