
const url = require('node:url'); // object

const myURL =
  url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hshvalue');
  console.log(myURL);
  
  const myURL2 =
  url.parse('https://en.wikipedia.org/wiki/Sachin_Tendulkar#References');
  console.log(myURL2);

  const urlObject=new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash')
  console.log(urlObject.port);
  console.log(urlObject.search);
  console.log(urlObject.hash);
  console.log(urlObject.href);
  console.log(urlObject.hostname);
  console.log(urlObject.pathname);
  console.log(urlObject.origin);
  console.log(urlObject.password);

// how to construct new url
  const origin="https://en.wikipedia.org"
const pathname = '/wiki/Sachin_Tendulkar';
const hash = '#References';
const newURL=new URL(`${origin}${pathname}${hash}`)
console.log(newURL);
console.log(newURL.href);


// how to construct new url from partial

const partialURL = new URL('https://example.org');
partialURL.port="8080";
partialURL.pathname = '/a/b/c';
partialURL.search = '?d=e';
partialURL.hash = '#hashvalue'; 
console.log(partialURL.href);