App = {};

App.Calc = (function()){
    "use strict";

    var add = function(num1, num2) {
      return parseInt(num1) + parseInt(num2);
    }

    return {
        add: add
    }
}());

App.Calc.add()


$('form').on('submit',function(e){ 
  e.preventDefault();
  var $num1 = $('input[name=num1]');
  var $num2 = $('input[name=num2]');
  $('#result').text(App.Calc.add($num1.val()), $num2.val());
  $num1.val("");
  $num2.val("");
});