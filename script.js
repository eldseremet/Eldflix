function Film(naslovFilma, godinaFilma, ocjenaFilma, zanrFilma, glumacFilma, linkFilma) {
  this.naslovFilma = naslovFilma;
  this.godinaFilma = godinaFilma;
  this.ocjenaFilma = ocjenaFilma;
  this.zanrFilma = zanrFilma;
  this.glumacFilma = glumacFilma;
  this.linkFilma = linkFilma;
}

var bazaFilmova = [];

window.onload = init;

function init() {
var posaljiButton = document.getElementById("posaljiButton");
posaljiButton.onclick = pokupiPodatke;
}

function pokupiPodatke() {
  var naslovFilmaInput = document.getElementById("naslovFilma");
  var naslovFilma = naslovFilmaInput.value;

  var godinaFilmaInput = document.getElementById("godinaFilma");
  var godinaFilma = godinaFilmaInput.value;

  var ocjenaFilmaInput = document.getElementById("ocjenaFilma");
  var ocjenaFilma = ocjenaFilmaInput.value;

  var zanrFilmaInput = document.getElementById("zanrFilma");
  var zanrFilmaIzbor = zanrFilmaInput.options[zanrFilmaInput.selectedIndex];
  var zanrFilma = zanrFilmaIzbor.value;

  var glumacFilmaInput = document.getElementById("glumacFilma");
  var glumacFilma = glumacFilmaInput.value;

  var linkFilmaInput = document.getElementById("linkFilma");
  var linkFilma = linkFilmaInput.value;

  if (naslovFilma == "") {
    alert("Molimo Vas unesite naslov filma");
    return;
  }
  else if (godinaFilma == "") {
    alert("Molim Vas unesite godinu izdavanja filma");
    return;
  }
  else if (ocjenaFilma == "") {
    alert("Molim Vas unesite Vašu ocjenu filma");
    return;
  }
  else if (zanrFilma == "") {
    alert("Molim Vas unesite žanr filma");
    return;
  }
  else if (glumacFilma == "") {
    alert("Molim Vas unesite glavnog glumca filma");
    return;
  }
  else if (linkFilma == "") {
    alert("Molim Vas unesite link naslovne fotografije za film");
    return;
  }
  else {

  var film = new Film(naslovFilma, godinaFilma, ocjenaFilma, zanrFilma, glumacFilma, linkFilma);
  bazaFilmova.push(Film);
  var dodaniFilmovi = document.getElementById("dodaniFilmovi");
  var listaFilmova = document.createElement("div");
  listaFilmova.setAttribute("id", "listaFilma")
  dodaniFilmovi.appendChild(listaFilmova);
  var noviFilm = document.createElement("div");
  noviFilm.setAttribute("id", "noviFilm");
  listaFilmova.appendChild(noviFilm);
  noviFilm.innerHTML = '<img style="width:250px" src="'+linkFilma+'">' + 
                        '<p style="font-family: netflixFont; letter-spacing: 3px; font-size:18px; margin-top:5px; color:#D81F26">Naslov filma : </p>' + '<p style="font-family: netflixFont; letter-spacing: 3px; font-size:14px; margin-top:5px; color:black">' + naslovFilma + '</p>'+
                        '<p style="font-family: netflixFont; letter-spacing: 3px; font-size:18px; margin-top:5px; color:#D81F26">Godina filma : </p>' + '<p style="font-family: netflixFont; letter-spacing: 3px; font-size:14px; margin-top:5px; color:black">' + godinaFilma + '</p>'+
                        '<p style="font-family: netflixFont; letter-spacing: 3px; font-size:18px; margin-top:5px; color:#D81F26">Ocjena Filma : </p>' + '<p style="font-family: netflixFont; letter-spacing: 3px; font-size:14px; margin-top:5px; color:black">' + ocjenaFilma + '</p>'+
                        '<p style="font-family: netflixFont; letter-spacing: 3px; font-size:18px; margin-top:5px; color:#D81F26">Zanr filma : </p>' + '<p style="font-family: netflixFont; letter-spacing: 3px; font-size:14px; margin-top:5px; color:black">' + zanrFilma + '</p>'+
                        '<p style="font-family: netflixFont; letter-spacing: 3px; font-size:18px; margin-top:5px; color:#D81F26">Glavni glumac : </p>' + '<p style="font-family: netflixFont; letter-spacing: 3px; font-size:14px; margin-top:5px; color:black">' + glumacFilma + '</p>';




  var resetPolja = document.getElementById("inputForma");
  resetPolja.reset();

  
}

}