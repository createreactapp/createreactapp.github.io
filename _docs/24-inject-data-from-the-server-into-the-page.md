---
title: "Injecting Data from the Server into the Page"
permalink: /inject-data-from-the-server-into-the-page
excerpt: ""
last_modified_at: 2018-05-18T15:58:49-04:00
---

Similarly to the previous section, you can leave some placeholders in the HTML that inject global variables, for example:

```
<!doctype html>
<html lang="en">
  <head>
    <script>
      window.SERVER_DATA = __SERVER_DATA__;
    </script>
```

Then, on the server, you can replace `__SERVER_DATA__` with a JSON of real data right before sending the response. The client code can then read `window.SERVER_DATA` to use it. Make sure to [sanitize the JSON before sending it to the client](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0) as it makes your app vulnerable to XSS attacks.
