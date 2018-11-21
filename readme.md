Simple implementation of local storage with indexedDB

[NPM][npm]: `npm install indexed-storage`  

[npm]: https://www.npmjs.com/package/indexed-storage

![npm version](https://badge.fury.io/js/indexed-storage.svg)
  
## Documentation
The main store function: 

```javascript
store(key, data);                 // sets data under key
store(key);                       // returns data stored under key
store({key: data, key2: data2});  // sets all key/data pairs in the object
store();                          // returns all stored key/data pairs as an object
store(false);                     // clears all items from storage
```

There are also more explicit and versatile functions available:

```javascript
store.set(key, data);              // === store(key, data);
store.setAll(data);                // === store({key: data, key2: data});
store.get(key);                    // === store(key);
store.getAll();                    // === store();
store.clear();                     // === store(false);
store.has(key);                    // returns true or false
store.remove(key);                 // removes key and its data, then returns the data
store.add(key, data);              // concats, merges, or adds new value into existing one
store.size();                      // number of keys, not length of data
store.clearAll();                  // clears *ALL* areas (but still namespace sensitive)
```

> All functions are async :rocket: and return Promise

##Examples
```javascript
import store from 'indexed-storage'

// set value
store('foo', {foo: "bar"})
  .then(key => console.log(key)) // "foo"

// get value
store('foo')
  .then(value => console.log(value)) // {foo: "bar"} 

// existence of key
store.has('foo').then(res => console.log(res)) // true
  
//store key/value data from object
store({key1: 'data1', key2: 'data2'})
  .then(key => console.log(key)) // "key2" 

//get all key/value pairs as object  
store()
  .then(data => console.log(data)) 
 // {foo: {bar: "baz"}, key1: "data1", key2: "data2"}

//clear all data
store(false).then(data => console.log(data)) // undefined
```
