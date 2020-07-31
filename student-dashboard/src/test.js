function average(arr) {
  var sums = {},
    counts = {},
    results = [],
    name;
  for (var i = 0; i < arr.length; i++) {
    name = arr[i].name;
    if (!(name in sums)) {
      sums[name] = 0;
      counts[name] = 0;
    }
    sums[name] += arr[i].value;
    counts[name]++;
  }

  for (name in sums) {
    results.push({ name: name, value: sums[name] / counts[name] });
  }
  return results;
}

var array = [
  {
    name: "a",
    value: 1,
  },
  {
    name: "a",
    value: 2,
  },
  {
    name: "a",
    value: 3,
  },
  {
    name: "b",
    value: 0,
  },
  {
    name: "b",
    value: 1,
  },
];

console.log(average(array));
