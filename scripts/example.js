// # // # // Description:
// # // # //
// # // # //
// # // # // Dependencies:
// # // # //   None
// # // # //
// # // # // Configuration:
// # // # //   None
// # // # //
// # // # // Commands:
// # // # //
// # //
// #
// # // #
// # // #  function parse() {
// # // #    robot.http("http://api.bart.gov/api/etd.aspx?cmd=etd&orig=ALL&key=Q9B4-PHEQ-9AZT-DWE9&json=y").get()(function(err, res, body) {
// # // #      console.log(err);
// # // #      console.log(res);
// # // #      console.log(body);
// # // #    });
// # // #  }
// # // #
// # // # parse()





module.exports = function(robot) {


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

     robot.hear(/javascript/i, function(msg) {
       return msg.send("I love writing code!");
     });

//      robot.hear(/is it today/i, function(msg){
//     var today = new Date();
//
//   //  msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
//   return msg.send("I lllllove writing code!" + today);
// });

robot.hear(/is it weekend/i, function(msg){
    var today = new Date();
    //
    // return msg.send(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");

    return msg.send("The date is" + today);
});



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
