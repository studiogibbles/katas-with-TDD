### 11 What time is it?

Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Sample Input: 07:05:45PM Sample Output: 19:05:45


#### Examples

```
whatTime('12:00:00AM')
  => '00:00:00'
```

```
whatTime('12:00:00PM')
  => '24:00:00'
```

```
whatTime('03:05:00PM')
  => '15:05:00'
```

```
whatTime('09:25:11AM')
  => '09:25:11'
```
