# Setting up CORS Proxy with `cors-anywhere`

This folder contains all that you need to start up a simple CORS proxy server for redirecting requests with required headers.

It has been used successfully to access Digital Slide Archive (DSA) instances without CORS enabled within an instance of FUSION. One caveat is that if you are running the proxy server from a localhost/0.0.0.0 host, you will not be able to use Firefox as it seems that they block CORS requests to localhost by default. Switching to Chrome or another browser should solve this.

Update the DSA_URL's used to initialize the FUSION instance by appending the actual DSA API URL to the running proxy server url like so:

If the original DSA URL is: https://example-dsa-url.com/api/v1,
and the proxy server is on: http://localhost:8070
the resulting proxied URL would be: http://localhost:8070/https://example-dsa-url.com/api/v1


