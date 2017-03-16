var temperatureInput = prompt("Enter a temperature in Farenheit, and I will give you its equivalence in Celsius, and the next nine lower temperatures de cinco en cinco because why not");

if (Number(temperatureInput)) {
    document.getElementById("tempresults").innerHTML = "<table border='1'>";
    document.getElementById("tempresults").innerHTML = "<tr>";
    document.getElementById("tempresults").innerHTML = "<td>" + temperatureInput + " F" + "</td>" + "<td>" + (5 / 9 * (temperatureInput - 32)) + " C" + "</td>";
    document.getElementById("tempresults").innerHTML = "</tr>";
    for (var i = 0; i < 10; i++) {
      console.log(i);
      var temperatureInput = temperatureInput-5;
      document.getElementById("tempresults").innerHTML = "<tr>";
      document.getElementById("tempresults").innerHTML = "<td>" + temperatureInput + " F" + "</td>" + "<td>" + (5 / 9 * (temperatureInput - 32)) + " C" + "</td>";
      document.getElementById("tempresults").innerHTML = "</tr>";
    }
    document.getElementById("tempresults").innerHTML = "</table>";
} else {
  document.getElementById("tempresults").innerHTML = "You did not type a valid number";
}
