var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
$(function () { 
  showText("h1", "Anda Akan Diarahkan Dalam 3 Detik.", 0, 80);    
}); 
