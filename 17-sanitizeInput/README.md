### 17 Sanitize User Input

You are a Web Developer who owns a website which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

Your mission is to implement a function sanitizeHTML that converts the following potentially harmful characters:

- `<` = `&lt;`
- `>` = `&gt;`
- `"` = `&quot;`
- `&` = `&amp;`

```
sanitizeHTML('Hello!')
  => 'Hello!'
```

```
sanitizeHTML('<>Hello!')
  => '&lt;&gt;Hello!'
```

```
sanitizeHTML('<>Hello & Goodbye!')
  => '&lt;&gt;Hello &amp; Goodbye!'
```
