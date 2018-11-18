---
title: hello gatsby.js
date: "2018-11-17"
---

Hey, it's been over a decade since I've written a blog. Here I'll write a bit about technology, music, gaming, and neighborhoods -- and probably post some photos along the way.

I set it up using Gatsby.js. It makes it pretty easy to create a new static site. The starter blog comes with prismjs, so for someone who is going 
to write about programming from time to time and including code samples, this makes it easy for code highlighting. I chose a theme.

markdown support is also nice since I'd rather write in a plain text editor. 

```python
def hello(self):
    print "world"
    return True
```

```php
<?php
function hello() {
    return "World";
}
?>
```

```javascript
const hello = (hi) => {
    return "world";
}
```

Deploy on Github Pages

npm install gh-pages --save-dev

Add the following line in package.json

```javascript
    "deploy": "gatsby build && gh-pages -d public -b master",
```

```
npm run deploy
```