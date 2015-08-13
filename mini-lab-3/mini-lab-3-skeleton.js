/*
 * Singleton Skeleton
 */
var UniverseSingleton = (function() {
  var universe = null;
  var Universe = function() {

  };
  return {
    getInstance: function() {

    }
  }
})();


/*
 * Strategy Skeleton
 */
var Shipping = function() {
  this.company = null;
};
Shipping.prototype.setStrategy = function(company) {

};
Shipping.prototype.calculate = function(parcel) {

};
var YRC = function() {

};

var UPS = function() {

};

var Fedex = function() {

};

var costCalculator = (function() {
  var totalCost = 0;
  return {
    add: function(cost) {

    },
    printTotalCost: function() {
      console.log("Your total cost is $"+totalCost);
    },
    reset: function() {
      totalCost = 0;
    }
  }
})();

var parcel = {weight: 27, product: "Tires"};
var heavyParcel  = {weight: 62, "Steering Wheels"};

var yrc = new YRC();
var fedex = new Fedex();
var ups = new Fedex();
var shipping = new Shipping();

shipping.setStrategy(yrc);
costCalculator.add(shipping.calculate(parcel));
costCalculator.add(shipping.calculate(heavyParcel));
costCalculator.printTotalCost();