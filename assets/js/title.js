// Array containing different titles to cycle through
var titles = [
  "$ Niggahack.online $", 
  "$ iggahack.online $", 
  "$ ggahack.online $", 
  "$ gahack.online $", 
  "$ ahack.online $", 
  "$ hack.online $", 
  "$ ack.online $", 
  "$ ck.online $", 
  "$ k.online $", 
  "$ .online $", 
  "$ online $", 
  "$ nline $", 
  "$ line $", 
  "$ ine $", 
  "$ ne $", 
  "$ e $", 
  "$ $", 
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
  "$ Niggahack.o $", 
  "$ Niggahack.on $", 
  "$ Niggahack.onl $", 
  "$ Niggahack.onli $", 
  "$ Niggahack.onlin $", 
  "$ Niggahack.online $", 

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
