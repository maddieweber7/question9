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

var userInput = Number(input("Enter a number greater than 0:"));

    if (userInput < 0) {
      document.getElementById("results").innerHTML = "Sorry, " + this.default + " is not a valid number.";
      document.getElementById("circle").value = "";
      document.getElementById("circle").focus();
    } else {
      circle.default = userInput;

      var prompt = "Circumference:" + circle.circumference + "<br>" + "Area:" + circle.area + "<br>" + "Volume:" + volume.circumference + "<br>";
      document.getElementById("results").innerHTML = prompt;
    }




