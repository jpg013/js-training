/*
 * Singleton Skeleton
 */
var UniverseSingleton = (function() {
  var universe = null;
  var Universe = function() {
    var secondsSinceBigBang = 0;
    return {
      bigBang: function() {
        console.log("BANG!");
        setInterval(function() {
          secondsSinhceBigBang++;
        }, 1000);
      },
      howOldIsTheUniverse: function() {
        console.log("This universe is " + secondsSinceBigBang + " seconds old!");
      }
    }
  };
  return {
    getInstance: function() {
      if (universe == null) {
        universe = new Universe();
      }
      return universe;
    }
  }
})();

var ourUniverse = UniverseSingleton.getInstance();
ourUniverse.bigBang();
setTimeout(function() {
  ourUniverse.howOldIsTheUniverse();
  ourUniverse = UniverseSingleton.getInstance();
  ourUniverse.howOldIsTheUniverse();
}, 10000);

/*
 * Strategy Skeleton
 */
var Shipping = function() {
  this.company = null;
};
Shipping.prototype.setStrategy = function(company) {
  this.company = company;
};
Shipping.prototype.calculate = function(parcel) {
  return this.company.calculate(parcel);
};
var YRC = function() {
  this.calculate = function(parcel) {
    if (parcel.weight > 50) {
      return 45.00;
    } else {
      return 35.00;
    }
  }
};
var costCalculator = (function() {
  var totalCost = 0;
  return {
    add: function(cost) {
      totalCost += cost;
    },
    printTotalCost: function() {
      console.log("Your total cost is $"+totalCost);
    },
    reset: function() {
      totalCost = 0;
    }
  }
})();
var parcel = {weight: 27};
var heavyParcel  = {weight: 62};
var yrc = new YRC();
var shipping = new Shipping();
shipping.setStrategy(yrc);
costCalculator.add(shipping.calculate(parcel));
costCalculator.add(shipping.calculate(heavyParcel));
costCalculator.printTotalCost();