function f() {
  console.log("foo");
  setImmediate(g);
  console.log("baz");
  h();
}

function g() {
  console.log("bar");
}

function h() {
  console.log("blix");
}

f();