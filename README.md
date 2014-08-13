![Ajax](http://i.imgur.com/iqIeB5C.png)

A simple wrapper for Ajax requests to avoid using jQuery. GET and POST currently supported.

## Usage

```javascript
// Get
Ajax.get(url, success, error);

// Post
var params = {
  firstName: 'Austin',
  lastName:  'Powers'
}
Ajax.post(url, params, success, error);
```

> Note that the success and error arguments are callbacks and can be passed in as functions.