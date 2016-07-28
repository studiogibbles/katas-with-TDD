### 25 Find the mean and concatenate

You will be given a list of strings which will include both integers and characters.

Return a list of length 2 where list[0] represents the mean of the integers to a single decimal place and list[1] represents a concatenated string of the remaining items in the list.

There will always be at least one number and at least one letter in the list.

#### Examples

```
meanAndConcat(['u', '6', 'd', '1', 'i', 'w'])
  => [3.5, 'udiw']
```

```
meanAndConcat(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'])
  => [3.6, 'udiwstagwo']
```
