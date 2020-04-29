// take a nested array of [x,y] points and flatten those to an array of points
// don't use recursion so it still works efficiently for large arrays
export default function deepFlattenPoints(points) {
  var idxStack = [], arrStack = [], res = [], idx = 0, arr = points;

  /* eslint-disable no-constant-condition */
  while (true) {
    if (!arr[idx]) {
      // nothing left on this level
      arr = arrStack.pop();
      idx = idxStack.pop();

      // nothing left at all
      if (!arr) {
        return res;
      }
    } else if (Array.isArray(arr[idx][0])) {
      // first element in the array is another array -> step deeper
      arrStack.push(arr);
      idxStack.push(idx+1);
      arr = arr[idx];
      idx = 0;
    } else {
      // a point
      res.push(arr[idx]);
      idx++;
    }
  }
}
