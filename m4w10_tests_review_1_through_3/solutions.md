# Test 1

## Question 0

```javascript
const count = function (arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count++;
  }

  return count;
};

const count = function (arr) {
  let count = 0;

  for (const el of arr) {
    count++;
  }

  return count;
};

const count = function (arr) {
  return arr.length;
};
```

```javascript
const sum = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // sum += arr[i]
  }

  return sum;
};

const sum = function (arr) {
  let sum = 0;

  for (const el of arr) {
    sum = sum + el; // sum += el
  }

  return sum;
};

const sum = (arr) => arr.reduce((prev, curr) => prev + curr);
```

## Question 1

```javascript
const min = function (arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
};

const min = function (arr) {
  let min = arr[0];

  for (const num of arr) {
    if (min > num) {
      min = num;
    }
  }

  return min;
};

const min = function (arr) {
  let min = arr[0];

  arr.forEach((el) => {
    if (min > el) {
      min = el;
    }
  });

  return min;
};

const min = function (arr) {
  return arr.sort((a, b) => a - b)[0];
};

const min = function (arr) {
  return Math.min(...arr);
};

const max = function (arr) {
  return arr.sort((a, b) => b - a)[0];
};

const max = function (arr) {
  return Math.max(...arr);
};

const range = function (arr) {
  return max(arr) - min(arr);
};
```

## Question 2

```javascript
const round = function (number) {
  return Math.round(number * 100) / 100;
};

const median = function (arr) {
  arr.sort((a, b) => a - b);

  if (arr.length % 2) {
    const middleIndex = Math.floor(arr.length / 2);
    return arr[middleIndex];
  } else {
    const middleIndexUpper = arr.length / 2;
    const middleIndexLower = middleIndexUpper - 1;
    return round((arr[middleIndexUpper] + arr[middleIndexLower]) / 2);
  }
};

const median = function (arr) {
  const sortedArray = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sortedArray.length / 2);

  return sortedArray.length % 2
    ? sortedArray[mid]
    : round((sortedArray[mid] + sortedArray[mid - 1]) / 2);
};
```

## Question 3

```javascript
const mode = function (arr) {
  const hash = {};

  for (const el of arr) {
    if (hash[el]) {
      // element is already in the hash
      hash[el]++;
    } else {
      // element is not in the hash
      hash[el] = 1;
    }
  }

  let currentMode = null;
  let currentCount = 0;

  for (const value in hash) {
    if (hash[value] > currentCount) {
      currentMode = value;
      currentCount = hash[value];
    }
  }

  return Number(currentMode);
};

const mode = function (arr) {
  const hash = arr.reduce(
    (prev, curr) =>
      prev[curr] ? { ...prev, [curr]: prev[curr] + 1 } : { ...prev, [curr]: 1 },
    {}
  ); // uggglllyyyy

  console.log(hash);
};

const mode = function (arr) {
  let currentMode = null;
  let currentCount = 0;
  const hash = {};

  for (const el of arr) {
    if (hash[el]) {
      // element is already in the hash
      hash[el]++;
    } else {
      // element is not in the hash
      hash[el] = 1;
    }

    if (hash[el] > currentCount) {
      currentMode = el;
      currentCount = hash[el];
    }
  }

  return currentMode;
};

const mode = function (arr) {
  const info = {
    mode: null,
    count: 0,
    counts: {},
  };

  return arr.reduce((info, val) => {
    const { counts } = info;

    counts[val] || (counts[val] = 0);
    counts[val]++;

    if (counts[val] > info.count) {
      info.mode = val;
      info.count = info.counts[val];
    }

    return info;
  }, info).mode;
};
```

## Question 4

```javascript
const stdev = function (arr) {
  const numberOfValues = arr.length;
  const sum = arr.reduce((prev, curr) => prev + curr);
  const popMean = sum / numberOfValues;

  let total = 0;

  for (const val of arr) {
    const deviation = val - popMean;
    const squared = Math.pow(deviation, 2);
    total += squared;
  }

  return round(Math.sqrt(total / numberOfValues));
};

const stdev = function (arr) {
  const count = arr.length;
  const sum = (array) => array.reduce((prev, curr) => prev + curr);
  const popMean = sum(arr) / count;

  const summed = sum(arr.map((val) => Math.pow(val - popMean, 2)));

  return round(Math.sqrt(summed / count));
};
```

# Test 2

## Question 0

```javascript
const round = (val) => Math.round(val * 10) / 10;

const tempConverter = function (value, cToF) {
  if (typeof value !== "number") {
    return NaN;
  }

  if (cToF) {
    return round((value * 9) / 5 + 32);
  } else {
    return round(((value - 32) * 5) / 9);
  }
};

const tempConverter = function (value, cToF) {
  if (typeof value !== "number") {
    return NaN;
  }

  const convertToC = (F) => ((F - 32) * 5) / 9;
  const convertToF = (C) => (C * 9) / 5 + 32;

  return round(cToF ? convertToF(value) : convertToC(value));
};
```

## Question 1

```javascript
const keyMatcher = function (firstObj, secondObj, key) {
  const key1 = firstObj[key];
  const key2 = secondObj[key];

  if (key1 === undefined && key2 === undefined) {
    return false;
  }

  return key1 === key2;
};
```

## Question 2

```javascript
const countWhich = (items, callback) => {
  if (!Array.isArray(items)) {
    return false;
  }

  let count = 0;

  for (const item of items) {
    if (callback(item)) {
      count++;
    }
  }

  return count;
};

const countWhich = (items, callback) => {
  if (!Array.isArray(items)) {
    return false;
  }

  return items.reduce((prev, curr) => (callback(curr) ? prev + 1 : prev), 0);
};
```

## Question 3

```javascript
const range = (num, skipZero, desc) => {
  if (typeof num !== "number") {
    return [];
  }

  if (num === 0 && !skipZero) {
    return [num];
  }

  const array = [];

  const start = skipZero ? 1 : 0;
  const end = skipZero ? num : num - 1;

  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  desc && array.reverse();

  return array;
};

const range = (num, skipZero, desc) => {
  if (typeof num !== "number") {
    return [];
  }

  if (num === 0 && !skipZero) {
    return [num];
  }

  const start = skipZero ? 1 : 0;
  const end = skipZero ? num : num - 1;

  const buildRange = (start, end) => {
    if (start === end) {
      return [start];
    }

    return [start, ...buildRange(start + 1, end)];
  };

  const array = buildRange(start, end);

  desc && array.reverse();

  return array;
};

const range = (num, skipZero, desc) => {
  if (typeof num !== "number") {
    return [];
  }

  if (num === 0 && !skipZero) {
    return [num];
  }

  const start = skipZero ? 1 : 0;

  const array = new Array(num).fill(undefined).map((el, i) => i + start);

  desc && array.reverse();

  return array;
};
```

## Question 4

```javascript
const minmax = (arr) => {
  const areStrings = typeof arr[0] === "string";

  const sortFunc = areStrings
    ? undefined
    : function (a, b) {
        return a - b;
      };

  const sortedArray = [...arr].sort(sortFunc);

  const min = sortedArray[0];
  const max = sortedArray[arr.length - 1];

  return [min, max];
};
```

# Test 3

## Question 0

- Close to the metal approach
- Object methods

```javascript
const objectToArray = function (obj) {
  const array = [];

  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0; i < keys.length; i++) {
    array.push([keys[i], values[i]]);
  }

  return array;
};

const objectToArray = function (obj) {
  const array = [];

  for (const element in obj) {
    array.push([element, obj[element]]);
  }

  return array;
};

const objectToArray = function (obj) {
  return Object.entries(obj);
};
```

## Question 1

```javascript
const arrayToObject = function (arr) {
  const object = {};

  for (const element of arr) {
    object[element[0]] = element[1];
  }

  return object;
};

const arrayToObject = function (arr) {
  return Object.fromEntries(arr);
};
```

## Question 2

```javascript
const partition = function (arr, callback) {
  const firstArray = [];
  const secondArray = [];

  // looop through arr
  // call the callback on it
  // left for true, right for false

  for (const el of arr) {
    const result = callback(el);
    if (result) {
      firstArray.push(el);
    } else {
      secondArray.push(el);
    }
  }

  return [firstArray, secondArray];
};

const partition = (arr, callback) => {
  return arr.reduce(
    (prev, curr) => {
      const arrayIndex = callback(curr) ? 0 : 1;
      prev[arrayIndex].push(curr);
      return prev;
    },
    [[], []]
  );
};
```

## Question 3

```javascript
const deepArrayToObject = (arr) => {
  const object = {};

  for (const element of arr) {
    const isArray = Array.isArray(element[1]);
    object[element[0]] = isArray ? deepArrayToObject(element[1]) : element[1];
  }

  return object;
};

const deepArrayToObject = function (arr) {
  const array = Object.fromEntries(arr);
  for (const el in array) {
    if (Array.isArray(array[el])) {
      array[el] = deepArrayToObject(array[el]);
    }
  }

  return array;
};
```

## Question 4

```javascript
const filesize = function (bytes) {
  if (bytes < 1000) {
    return `${bytes}B`;
  }

  if (bytes < 1000000) {
    return `${bytes / 1000}kB`;
  }
};

const filesize = function (bytes) {
  const suffixMap = ["", "k", "M", "G", "T"];
  let magnitude = 0;

  const parser = (value) => {
    if (value >= 1000) {
      magnitude++;
      return parser(value / 1000);
    } else {
      return `${value}${suffixMap[magnitude]}B`;
    }
  };

  return parser(bytes);
};

const filesize = function (bytes) {
  const map = ["", "k", "M", "G", "T"];

  const parser = (v, i) =>
    v >= 1000 ? parser(v / 1000, i + 1) : v + map[i] + "B";

  return parser(bytes, 0);
};
```
