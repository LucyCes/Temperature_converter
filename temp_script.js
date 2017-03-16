var temperatureInput = prompt("Enter a temperature in Farenheit, and I will give you its equivalence in Celsius, and the next nine lower temperatures de cinco en cinco because why not");

if (Number(temperatureInput)) {
    var msg = "<table border='1'>";
    msg = msg + "<tr>";
    msg = msg + "<td>" + temperatureInput + " F" + "</td>" + "<td>" + (5 / 9 * (temperatureInput - 32)) + " C" + "</td>";
    msg = msg + "</tr>";
    for (var i = 0; i < 10; i++) {
      console.log(i);
      var temperatureInput = temperatureInput-5;
      msg = msg + "<tr>";
      msg = msg + "<td>" + temperatureInput + " F" + "</td>" + "<td>" + (5 / 9 * (temperatureInput - 32)) + " C" + "</td>";
      msg = msg + "</tr>";
    }
    document.getElementById("tempresults").innerHTML = msg + "</table>";
} else {
  document.getElementById("tempresults").innerHTML = "You did not type a valid number";
}
