# Consuptiom

**Solved:** ✓ 

**🎯First try** : ✓

**Level:** :star:

Calculate a car's average consumption being provided the total distance traveled (in Km) and the spent fuel total (in liters).

**Input**

The input file contains two values: one integer value X representing the total distance (in Km) and the second one is a floating point number Y representing the spent fuel total, with a digit after the decimal point.

**Output**

Present a value that represents the average consumption of a car with 3 digits after the decimal point, followed by the message "km/l".

| Input Sample |	Output Sample |
|:--:|:--:|
| 500 <br> 35.0 | 14.286 km/l |
| 2254 <br> 124.4 | 18.119 km/l |
| 4554 <br> 464.6 | 9.802 km/l |

### For beecrowd :

```javascript 

var x = parseInt(lines.shift('\n');
var y = parseFloat(lines.shift('\n');

console.log((x/y).toFixed(3)+' km/l');

```

### In VsCode :

```javascript 

input = '2254\n124.4'
lines = input.split('\n');

var x = parseInt(lines.shift('\n'));
var y = parseFloat(lines.shift('\n'))

console.log((x/y).toFixed(3));

```