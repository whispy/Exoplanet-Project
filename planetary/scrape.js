var dataUrl = "https://raw.githubusercontent.com/OpenExoplanetCatalogue/oec_tables/master/comma_separated/open_exoplanet_catalogue.txt";
var Firebase = require('firebase');
var request = require('request');
var fs = require('fs');
var csv = require('fast-csv');
var planets = new Firebase('https://planetary.firebaseIO.com/');

planets.remove();

var csvStream = csv().on('record', function(data) {
  if(data.toString().substring(0,1)!="#") {
    planets.push(data);
  }
}).on("end", function() {
  console.log("done.");
});

request(dataUrl).pipe(csvStream);


