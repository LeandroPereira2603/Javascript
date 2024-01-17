# Age days 


Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.

Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month. In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364. This is just an exercise for the purpose of testing simple mathematical reasoning.

**Input** 

The input file contains 1 integer value.

**Output**

Print the output, like the following example.

|Input Sample	|Output Sample|
|:--:|:--|
|400 | 1 ano(s) <br> 1 mes(es) <br> 5 dia(s) |
| 800 | 2 ano(s) <br> 2 mes(es) <br> 10 dia(s) |
| 30 |0 ano(s) <br> 1 mes(es) <br> 0 dia(s) |

## For beecrowd

```javascript 



```

## In VsCode

```javascript 

input = '0';
lines = input.split('\n');
var totdays = lines[0];
var totyear = totdays / 360 ;
totdays = totdays % 360;
var totmonth = totdays / 30;
var totdays = totdays % 30;
var totdays = totdays;
console.log(Math.floor(totyear)+" ano(s)\n"+Math.floor(totmonth)+" mes(es)\n"+Math.floor(totdays)+" dia(s)");
console.log(Math.floor(totyear)+":"+Math.floor(totmonth)+":"+Math.floor(totdays));

```