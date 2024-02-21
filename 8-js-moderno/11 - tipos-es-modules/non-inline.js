function group() {
  console.log("export nomeado non-inline");
}

function a() {}
function b() {}
function c() {}
function d() {}

export { group, a, b, c, d };

function exportDefault() {
  console.log("export default non-inline");
}

export default exportDefault;
