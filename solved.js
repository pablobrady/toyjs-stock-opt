/* ./index.js */

module.exports = function() {

  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);

  // Arguments should contain (finite) number values
  // if (!args.every(Number.isFinite)) {
  //   throw new TypeError('Expecting only numbers.')
  // }

  // Debugging assistance
  var sleep = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  // Use the "solution(xx)" function to return data for testing.
  var solution = function (stockPrices) {
    const NET_PROFIT_KEY = 0, BUY_PRICE_KEY = 1, SELL_PRICE_KEY = 2;
    var outputArray = [0, 0, 0]; 
    var lowestPriceIndex = 0, highestPriceIndex = 0, lowestPrice = Math.max, highestPrice = Math.min

    for(var i=0; i<stockPrices.length; i++) {

      console.log(`LOWEST PRICE:  ${stockPrices[lowestPriceIndex]},  HIGHEST PRICE: ${stockPrices[highestPriceIndex]}`);
      
      if ( stockPrices[i] < stockPrices[lowestPriceIndex] ) { lowestPriceIndex = i }
      if ( stockPrices[i] > stockPrices[highestPriceIndex] ) { highestPriceIndex = i }

    }

    outputArray[NET_PROFIT_KEY] = stockPrices[highestPriceIndex] - stockPrices[lowestPriceIndex];
    outputArray[BUY_PRICE_KEY]  = stockPrices[lowestPriceIndex];
    outputArray[SELL_PRICE_KEY] = stockPrices[highestPriceIndex];

    return outputArray;
  }


  return solution(args[0]);
}
