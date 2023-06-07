var vid1 = document.getElementById("mavideo");
vid1.onended = function() {
alert('Fin de la lecture.');
};
vid1.onpause = function() {
alert('Pause...');
};
vid1.onplay = function() {
alert('Lecture !');
};
var vid1 = document.getElementById('mavideo');
vid1.addEventListener("play", function() {
alert("C’est parti !");
},true);
vid1.addEventListener("ended", function() {
alert("C'est déjà la fin...");
},true);
vid1.addEventListener("pause", function() {
alert("En pause.");
},true);
var audio = document.getElementById("monaudio");
audio.removeAttribute("controls"); 
audio.style.display='none'; // Pour Chrome
var player = document.getElementById("player");
player.style.display='block';
var info = player.getElementsByClassName("info")[0];
var track = player.getElementsByClassName("track")[0];
var seeker = track.childNodes[0];
player.getElementsByClassName("play")[0].onclick = function() {
audio.play();
};
player.getElementsByClassName("pause")[0].onclick = function() {
audio.pause();
};
player.getElementsByClassName("audible")[0].onclick = function() {
audio.volume = 0;
this.style.display='none';
player.getElementsByClassName("muted")[0].style.display='block';
};
player.getElementsByClassName("muted")[0].onclick = function() {
audio.volume = 1;
this.style.display='none';
player.getElementsByClassName("audible")[0].style.display='block';
};
audio.addEventListener('timeupdate', function(){
var total = audio.duration;
var position = audio.currentTime;
var progression = (position/total)*100;
var min = parseInt(position/60);
var sec = parseInt(position-(min*60));
seeker.style.width=parseFloat(progression)+'%';
if(sec<10) sec = '0'+sec;
info.innerHTML = min+':'+sec;
}, false);
audio.addEventListener('ended', function() {
info.innerHTML = '0:00';
seeker.style.width=0;
}, false);
track.addEventListener('click',function(event) {
var pos = event.offsetX/event.target.clientWidth;
audio.currentTime = pos*100/audio.duration;
}); 
document.getElementById("mavideo").onerror = function(event) {
switch(event.target.error.code) {
case event.target.error.MEDIA_ERR_ABORTED:
alert('La lecture du média a été annulée.');
break;
case event.target.error.MEDIA_ERR_NETWORK:
alert('Une erreur ou une indisponibilité réseau n\'a pas permis le bon déroulement du téléchargement.');
break;
case event.target.error.MEDIA_ERR_DECODE:
alert('La lecture a été annulée suite à une erreur de corruption du fichier, ou parce que le média utilise des fonctionnalités que ce navigateur ne peut supporter.');
break;
case event.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
alert('Le fichier ne peut être chargé, soit parce que le serveur distant ou le réseau sont indisponibles, soit parce que le format n\'est pas supporté.');
break;
default:
alert('Erreur inconnue.');
break;
}
};
// Cette fonction supprime tous les nodes <source>
// et le parent <video> lui-même pour ne conserver
// que le contenu alternatif
function fallback(element_video) {
video = document.getElementById(element_video);
while(video.firstChild) {
if(video.firstChild instanceof HTMLSourceElement) {
video.removeChild(video.firstChild);
} else {
video.parentNode.insertBefore(video.firstChild, video);
}
}
video.parentNode.removeChild(video);
}
var elvideo = document.createElement('video');
if(!!elvideo.canPlayType) {
alert('HTML5 Video semble accepté');
if(!elvideo.canPlayType('video/mp4')) {
alert('Pas de support natif video/mp4 : repli Flash');
fallback('mavideo');
}
} else {
fallback('mavideo');
}
var value1 = encodeURIComponent(value1),
value2 = encodeURIComponent(value2);
xhr.open('GET', 'http://mon_site_web.com/ajax.php?param1=' + value1 + '&param2=' + value2);
xhr.open('POST', 'http://mon_site_web.com/ajax.php');
xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
xhr.send('param1=' + value1 + '&param2=' + value2);
xhr.onreadystatechange = function() {
if (xhr.readyState == xhr.DONE) { // La constante DONE appartient à l'objet XMLHttpRequest, elle n'est pas globale
// Votre code…
}
};
var xhr = new XMLHttpRequest();
xhr.open('HEAD', 'http://mon_site_web.com/', false);
xhr.send(null);
alert(xhr.getResponseHeader('Content-type')); // Affiche : « text/html; charset=utf-8 »
function sendForm() {
var nick =
document.getElementById("nick").value;
if (nick) { // Si c'est OK
document.getElementById("myForm").submit(
); // On envoie le formulaire
} 
}
function receiveData(data) {
alert('Votre pseudo est "' + data + '"');
}
document.querySelector('#file').onchange = function() {
alert(this.files[0].name);
};
var fileInput = document.querySelector('#file');
fileInput.onchange = function() {
var reader = new FileReader();
reader.onload = function() {
alert('Contenu du fichier "' + fileInput.files[0].name + '":\n\n' + reader.result);
};
reader.readAsText(fileInput.files[0]);
};
(function() {
function createThumbnail(file) {
var reader = new FileReader();
reader.onload = function() {
var imgElement = document.createElement('img');
imgElement.style.maxWidth = '150px';
imgElement.style.maxHeight = '150px';
imgElement.src = this.result;
prev.appendChild(imgElement);
};
reader.readAsDataURL(file);
}
var allowedTypes = ['png', 'jpg', 'jpeg', 'gif'], 
fileInput = document.querySelector('#file'),
prev = document.querySelector('#prev');
fileInput.onchange = function() {
var files = this.files,
filesLen = files.length,
imgType;
for (var i = 0 ; i < filesLen ; i++) {
imgType = files[i].name.split('.');
imgType = imgType[imgType.length - 1];
if(allowedTypes.indexOf(imgType) != -1) {
createThumbnail(files[i]);
}
}
};
})();
var myImg = document.getElementById('myImg');
function anim() {
var s = myImg.style,
result = s.opacity = parseFloat(s.opacity) - 0.1;
if ( result > 0.2 ) {
setTimeout(anim, 50); // La fonction anim() fait appel à ellemême si elle n'a pas terminé son travail
}
}
anim(); // Et on lance la première phase de l'animation
// Passage.js
 var username = get_Cookie(’username’);
 if (username == null ) {
 username = prompt(’Merci de bien vouloir taper votre nom ou votre pseudo ’,"");
 if (username == null) {
 username="vous";
 } else {
 pathname = location.pathname;
 myDomain = pathname.substring(0, pathname.lastIndexOf(’/’)) +’/’;
 // définir la date d’expiration à un an
 var largeExpDate = new Date ();
 largeExpDate.setTime(largeExpDate.getTime() + (365 * 24 * 3600 * 1000));
 }
 set_Cookie(’username’,username,largeExpDate,myDomain);
 }
function get_CookieVal (offset)
 {
 var endstr = document.cookie.indexOf (";", offset);
 if (endstr == -1)
 endstr = document.cookie.length;
 return unescape(document.cookie.substring(offset, endstr));
 }

 function get_Cookie (name)
 {
 var arg = name + "=";
 var alen = arg.length;
 var clen = document.cookie.length;
 var i = 0;
 while (i < clen) {
 var j = i + alen;
 if (document.cookie.substring(i, j) == arg)
 return get_CookieVal (j);
 i = document.cookie.indexOf(" ", i) + 1;
 if (i == 0)
 break;
 }
 return null;
 }

 function set_Cookie (name, value)
 {
 var argv = set_Cookie.arguments;
 var argc = set_Cookie.arguments.length;
 var expires = (argc > 2) ? argv[2] : null;
 var path = (argc > 3) ? argv[3] : null;
 var domain = (argc > 4) ? argv[4] : null;
 var secure = (argc > 5) ? argv[5] : false;
 document.cookie = name + "=" + escape (value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
 }

 function message(){
 document.write ("Bonjour "+ username + " ! Cela fait " + visites + " fois que vous visitez notre site");
 }
var expdate = new Date();
 var visites;
 // définir la date d’expiration à un an .
 expdate.setTime(expdate.getTime() + (24 * 60 * 60 * 1000 * 365));
 if(!(visites = get_Cookie("visites")))
 visites = 0;
 visites++;
 set_Cookie("visites", visites, expdate, "/", null, false);
 username = username.toUpperCase();
 message();