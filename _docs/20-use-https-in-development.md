---
title: "Using HTTPS in Development"
permalink: /use-https-in-development
excerpt: ""
last_modified_at: 2018-05-18T15:58:49-04:00
---

You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using [the "proxy" feature](/proxying-api-request) to proxy requests to an API server when that API server is itself serving HTTPS.

To do this, set the `HTTPS` environment variable to `true`, then start the dev server as usual with `npm start`:

`Linux, macOS (Bash)`

```
HTTPS=true npm start
```

`Windows (cmd.exe)`

```
set HTTPS=true&&npm start
```

`Windows (Powershell)`

```
($env:HTTPS = $true) -and (npm start)
```

(Note: the lack of whitespace is intentional.)

Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

