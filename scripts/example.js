
const fetch = require('node-fetch')
const _ = require('underscore')

module.exports = function(robot) {


     robot.hear(/javascript/i, function(msg) {
       return msg.send("I love writing code!");
     });


robot.hear(/is it the weekend/i, function(msg){
    var today = new Date();

    return msg.send(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");

});


robot.hear(/what day is it/i, function(msg){
    var today = new Date();
    var dayOfTheWeek = today.getUTCDay();

    switch (dayOfTheWeek) {
      case 0:
      return msg.send("SUNDAY 🌞");
      case 1:
      return msg.send("It's only MONDAY, long week ahead.");
      case 2:
      return msg.send("TUESDAY!");
      case 3:
      return msg.send("WEDNESDAY, halfway there!");
      case 4:
      return msg.send("THURSDAY - the calm before the storm");
      case 5:
      return msg.send("FRIDAY - T.G.I.F!");
      case 6:
      return msg.send("You're not at work, must be a SATURDAY");
    }

});

robot.hear(/bart/i, function(msg){


const stations = [
{"key":"Montgomery St.","value":"mont"},
{"key":"North Berkeley","value":"nbrk"},
{"key":"North Concord/Martinez","value":"ncon"},
{"key":"Oakland Int'l Airport","value":"oakl"},
{"key":"Orinda","value":"orin"},
{"key":"Pittsburg/Bay Point","value":"pitt"},
{"key":"Pleasant Hill","value":"phil"},
{"key":"Powell St.","value":"powl"},
{"key":"Richmond","value":"rich"},
{"key":"Rockridge","value":"rock"},
{"key":"San Bruno","value":"sbrn"},
{"key":"San Francisco Int'l Airport","value":"sfia"},
{"key":"San Leandro","value":"sanl"},
{"key":"South Hayward","value":"shay"},
{"key":"South San Francisco","value":"ssan"},
{"key":"Union City","value":"ucty"},
{"key":"Warm Springs/South Fremont","value":"warm"},
{"key":"Walnut Creek","value":"wcrk"},
{"key":"West Dublin","value":"wdub"},
{"key":"West Oakland","value":"woak"}]

var stationNames = _.map(stations,"key")

return msg.send("Which station's departure would you like?\n" + stationNames)



  });





  robot.hear(/Montgomery/i, function(msg){

  fetch('http://api.bart.gov/api/etd.aspx?cmd=etd&orig=mont&key=MW9S-E7SL-26DU-VV8V&json=y')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);

          var next = data.root.station[0].etd
          console.log(next);
          return msg.send("here you go" + next);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });


      });


// brain
// robot.respond/+productive/i, function(msg){
//
//
//
//   var start = Date.now()
//   var end = Date.now()
//
//   var seconds = (end - start) / 1000
//   var elapsedSeconds = Math.floor(seconds)
//
//
//
// }


 }












//
// # /************************************
// #
// # EXAMPLES OF THE KEY HUBOT FUNCTIONS
// #
// # ************************************/
// #
// # /* Variables for random example */
// #
// # // const squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];
// #
// # // module.exports = function(robot) {
// # //   /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
// # //   return robot.respond(/hi|hello/i, function(msg) {
// # //     return msg.send("Howdy!");
// # //   });
// #
// # //   /* Random Example
// # //   If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
// # //   return robot.hear(/ship it/i, function(msg) {
// # //     return msg.send(msg.random(squirrels));
// # //   });
// # // };




// module.exports = (robot) ->
//   # your code here
//    # // YOUR CODE HERE
//
//
// #
// #    (function() {
// #   robot.http("http://api.bart.gov/api/etd.aspx?cmd=etd&orig=ALL&key=Q9B4-PHEQ-9AZT-DWE9&json=y").get()(function(err, res, body) {});
// #
// # }).call(this);
// #
// #    // function parse() {
// #    //   robot.http("http://api.bart/gove/api/etd.aspx?cmd=etd&orig=ALL&key=Q9B4-PHEQ-9AZT-DWE9&json=y").get()(function(err, res, body) {
// #    //     console.log(err);
// #    //     console.log(res);
// #    //     console.log(body);
// #    //   })
// #    // };
// #    //
// #    // parse()


  // robot.http("http://api.bart/gove/api/etd.aspx?cmd=etd&orig=ALL&key=Q9B4-PHEQ-9AZT-DWE9&json=y")
  //   .header('Accept', 'application/json')
  //   .get() (err, res, body) ->
  //     # error checking code here



      //
      // data = JSON.parse body
      // # res.send "#{data.passenger} taking midnight train going #{data.destination}"
      // robot.hear /badger/i, (res) ->
      //   res.send "hi"
