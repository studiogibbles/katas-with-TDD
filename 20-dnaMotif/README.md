### 20 Find the DNA Motif

In genetics, a sequence’s motif is a nucleotides (or amino-acid) sequence pattern. Sequence motifs have a biological significance.

Write a function that receives 2 arguments - a sequence and a motif. Both arguments are strings.

You should return an array that contains all the start positions of the motif (in order). A sequence may contain 0 or more repetitions of the given motif. Note that the number of the first position is 1, not 0.

If the motif is not found, return an empty array.

#### Examples

```
findMotif('GGG', 'AA')
  => []
```

```
findMotif('GGGAA', 'GGAA')
  => [2]
```

```
findMotif('GGG', 'GG')
  => [1, 2]
```

```
findMotif('ACGTGGGGACTAGGGG', 'GGGG')
  => [5, 13]
```
