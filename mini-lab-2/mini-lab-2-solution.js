/*
 * Part 1 : Inheritance using Object.create()
 */

var Employee = {
  addBonus: function(bonus) {
    if (!isNaN(bonus)) {
      this.bonus = bonus;
    }
  },
  dept: "General"
};

var Manager = Object.create(Employee, {
  addEmployee: {
    value: function (employee) {
      if (Employee.isPrototypeOf(employee)) {
        this.reports.push(employee);
      } else {
        console.log("Not a valid employee instance!");
      }
    },
    writable: true,
    enumerable: true,
    configurable: true
  },
  reports: {value: []}
});

var WorkerBee = Object.create(Employee, {
  addProject: {
    value: function (project) {
      this.projects.push(project);
    },
    writable: true,
    enumerable: true,
    configurable: true
  },
  projects: {
    value: [],
    writable: true,
    enumerable: true,
    configurable: true
  }
});

var SalesPerson = Object.create(WorkerBee, {
  dept: {
    value: "sales",
    writable: true,
    enumerable: true,
    configurable: true
  },
  quota: {
    value: 100,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

var Engineer = Object.create(WorkerBee, {
  dept: {
    value: "engineering",
    writable: true,
    enumerable: true,
    configurable: true
  }
});

var dj = Object.create(SalesPerson, {
  quota: {
    value: 50,
    writable: true,
    enumerable: true,
    configurable: true
  },
  name: {
    value: "DJ",
    writable: true,
    enumerable: true,
    configurable: true
  }
});

var morgan = Object.create(SalesPerson, {
  quota: {
    value: 100,
    writable: true,
    enumerable: true,
    configurable: true
  },
  name: {
    value: "Morgan",
    writable: true,
    enumerable: true,
    configurable: true
  }
});

var brandon = Object.create(Manager, {
  name: {
    value: "Brandon",
    writable: true,
    enumerable: true,
    configurable: true
  }
});

brandon.addEmployee(morgan);
brandon.addEmployee(dj);

var jennifer = Object.create(Engineer, {
  name: {
    value: "Jennifer",
    writable: true,
    enumerable: true,
    configurable: true
  }
});

jennifer.addProject('Engineer some cool stuff!');

/*
 * Part 2 : Inheritance using Constructor Functions
 */

var Employee = function(name, dept) {
  this.name = name || name;
  this.dept = dept || "general";
  this.bonus = 0;
};

Employee.prototype.addBonus = function(bonus) {
  if (isNaN(bonus)) {
    return;
  }
  this.bonus = bonus;
};

var Manager = function(name, dept) {
  Employee.call(this, name, dept);
  this.reports = [];
};

Manager.prototype = new Employee;

Manager.prototype.addEmployee = function(employee) {
  if (employee instanceof Employee) {
    this.reports.push(employee);
  } else {
    console.log("Not a valid employee instance!");
  }
};

var WorkerBee = function(name, dept) {
  Employee.call(this, name, dept);
  this.projects = [];
};

WorkerBee.prototype = new Employee;

WorkerBee.prototype.addProject = function(projectName) {
  this.projects.push(projectName);
};

var SalesPerson = function(quota, name) {
  WorkerBee.call(this, name);
  this.quota = quota || 100;
  this.dept = "sales";
};
SalesPerson.prototype = new WorkerBee;

var Engineer = function(name) {
  WorkerBee.call(this, name);
  this.dept = "engineering";
};
Engineer.prototype = new WorkerBee;

var bill = new SalesPerson(50, "bill");
var mark = new SalesPerson(100, "mark");
var tim  = new Manager('tim', 'sales');

tim.addEmployee(bill);
tim.addEmployee(mark);
bill.addProject('dcc');
mark.addProject('est');
tim.addBonus(5000);


/*
 * Part 3 : Extend Method
 */

var Extend = function(source) {
  var destObjects = Array.prototype.slice.call(arguments, 1);
  for (var i = 0; i < destObjects.length; i++) {
    var obj = destObjects[i];
    for (var member in obj) {
      if (obj.hasOwnProperty(member)) {
        source[member] = obj[member];
      }
    }
  }
  return source;
};

var person = {
  name: "justin",
  age: 27
};

var extendedPerson = Extend(person, {occupation: 'software developer'}, {favoriteLanguage: 'JavaScript'});