### 06 Sum of Multiples

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

The function takes two arguments. If the second argument is true, it should return the sum of the multiples of 3 and 5 below the given number. If false, it should return the list of these multiples as an array.

Note: If the number is a multiple of both 3 and 5, only count it once.

#### Examples:

```
sumMultiples(10, true)
  => 23

sumMultiples(10, false)
  => [3, 5, 6, 9]
```

```
sumMultiples(16, true)
  => 60

sumMultiples(16, false)
  => [3, 5, 6, 9, 10, 12, 15]
```
