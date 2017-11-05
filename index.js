$(function(event){
  console.log('DOM is ready');

  //This is like a for loop
  var cars = ["mercedes", "bmw", "audi"]

  $(cars).each(function(index, car) {
    console.log(index,car);
  })

  //--------- javaScript
  var count = document.getElementById("count");
  count.innerHTML = '5';
  //----------jQuery
  $('#count').html('5');
  $('#count').css('color', 'green').css('background-color', 'grey');
  // OR
  $('#count').html('5').css('color', 'green').css('background-color', 'grey');

  //-------------javaScript
  var items = document.getElementByTagName('li');
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    item.className = item.className + 'done';
  };
  //-------------jQuery
  $('li').addClass('done');


  //-----------------how to create a new item
  $('#list').append($("<li>Another new item</li>"));


  //----------------onClick function (event listener)
  $('#button').click(function(){
    console.log("I've been clicked");
  })
  //OR
  $('#button').on('click', function(){
    console.log("I've been clicked");
  })
});
