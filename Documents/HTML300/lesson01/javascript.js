$(function() {
  $(".nameButton").click(function() {
    alert(`Hello, ${$(this).siblings().val()}. Your name has been registered. Please continue.`);
    //This string simply allows for the user to place their name, and allow it to work using the
    //${name}.
  })
});

var str = 'I just took a DNA test. Turns out, a hundred percent that snitch. Even when crying crazy, yeah I got boy problems thats the human in me.'
var array1 = str.split(" ");

$(function() {
  $(".truthhurts").click(function() {
    lizzo = $(".lizzo");
    const number = lizzo.val();
    const result = array1.filter(word => word.length >= number);
    //Searches and filters for a specific word, based on a number the user enters.
    alert(result);
  })
});

$(function() {
  $(".buttonThree").click(function() {
    squirtle = $(".squirtle");
    const array = [5, 10, 15, 20, 25, 30];
    const number = squirtle.val();
    const over10 = array.find(function(value) {
    //Sets a constant array for the array.find function to return a value that's
    //higher than '10'.
      return value > 10;
    });
    alert(over10);
  })
});

$(function() {
  $(".buttonTwo").click(function() {
    alert($(this).siblings('input').val().includes('a'));
    //This will search for a specific value. In this case, it's the letter 'a'.
    //The 'input' within siblings was necessary, otherwise the button would always
    //come back as 'false'.
  })
});
