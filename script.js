var circle = {
    default: 1,
    circumference: function() {
        return (Math.PI * 2 * this.default);
    },
    area: function() {
        return (Math.PI * this.default * this.default);
    },
    volume: function() {
        return (4/3 * Math.PI * this.default * this.default * this.default);
    }
};

var userInput = Number(prompt("Enter a number greater than 0:"));

    if (userInput < 0) {
      document.getElementById("results").innerHTML = "Sorry, " + this.default + " is not a valid number.";
      document.getElementById("circle").value = "";
      document.getElementById("circle").focus();
    } else {
      circle.default = userInput;

      var prompt = "Circumference:" + circle.circumference + "<br>" + "Area:" + circle.area + "<br>" + "Volume:" + circle.volume + "<br>";
      document.getElementById("results").innerHTML = prompt;
    }
/* asks in form of prompt instead using the input field to ask for number. Also displays the literal function instead of calculated value... */


