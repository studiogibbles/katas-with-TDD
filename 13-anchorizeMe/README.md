### 13 Anchorize Me

Parse the text and replace the url with corresponding html syntax. The first part of the string contains the text for the anchor tag, the final part of the string contains the URL.

Supported protocols:

- http
- https
- ftp
- ftps
- file
- smb

If an unsupported protocol is submitted, return 'Unsupported protocol'

#### Examples:

```
anchorize('hello http://world.com')
  => '<a href="http://world.com">hello</a>'
```

```
anchorize('hello hgfp://world.com')
  => 'Unsupported protocol'
```

```
anchorize('click me! http://world.com')
  => '<a href="http://world.com">click me!</a>'
```

```
anchorize('click this link! http://world.com')
  => '<a href="ftp://world.com">click this link!</a>'
```

```
anchorize('click this super secure link! https://world.com')
  => '<a href="ftp://world.com">click this super secure link!</a>'
```
