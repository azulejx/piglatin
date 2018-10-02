var vowels = ["a", "e", "i", "o", "u"];
var word = "";

var a = word.startsWith("a");
var e = word.startsWith("e");
var i = word.startsWith("i");
var o = word.startsWith("o");
var u = word.startsWith("u");


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var word = $("#word").val();

    if (a === true) {
      var pigLatin = word.concat("ay");

    };

    // else {
    //   alert("error");
    // }


console.log(pigLatin);
  });

});
