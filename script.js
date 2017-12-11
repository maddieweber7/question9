var circle = {
    default: 1,
    circumference: function() {
        return (Math.PI * d);
    },
    area: function() {
        return (Math.PI * r * r);
    },
    volume: function() {
        return (4/3 * Math.PI * r * r * r);
    }
};

var userInput = Number(input("Enter a number greater than 0:"));

    if (userInput < 0) {
      document.getElementById("results").innerHTML = "Sorry, " + this.default + " is not a valid number.";
      document.getElementById("circle").value = "";
      document.getElementById("circle").focus();
    } else {
      this.displayCalcs();
    }



