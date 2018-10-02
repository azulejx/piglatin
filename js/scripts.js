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
    console.log(word);
    // if (a) {
    //   word.concat("ay");
    //
    // }





  });

});
