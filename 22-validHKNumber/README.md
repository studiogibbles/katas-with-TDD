### 22 Valid HK Phone Number

In Hong Kong, a valid phone number has the format xxxx xxxx where x is a decimal digit (0-9). There should be exactly one space separating the two sets of digits.

Write a function that takes a single string and returns either the valid phone number, if it is found within the string, or 'Invalid phone number' if it is not found.

#### Examples

```
validateNumber('1234 5678')
  => '1234 5678'
```

```
validateNumber('85748475')
  => 'Invalid phone number'
```

```
validateNumber('3857  4756')
  => 'Invalid phone number'
```

```
validateNumber('sklfjsdklfjsf')
  => 'Invalid phone number'
```

```
validateNumber('slfdjs9345 8234sdklfjsdkf')
  => '9345 8234'
```
