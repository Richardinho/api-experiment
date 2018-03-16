### Programming Task

To run application:

```

  npm install

  npm run start
```
Or just visit this [github page](https://richardinho.github.io/api-experiment/).

The application contacts the Google Books API and pulls down a list of books matching the given query.
For each of the books returned, a request is then made to the Github API for repositories which mention the title of the book. Information on the book and the associated repositories is displayed on the page.

The Github API restricts the number of requests that can be made to it. In order to prevent the app from breaking when the quota is exceeded, a service worker caches successful queries and serves these up to the application whenever the API returns a 403 response.

A small bug is that if a 403 is returned on the first request, the app will fail, as the cache will be empty.


#### Questions
##### Give a few reasons why separating state is useful.
In general, keeping parts of an application independent from each other is considered a good idea (The Single Responsibility Principle), as it reduces complexity, and allows them to be reasoned about in isolation. This also facilitates unit testing as the various parts don't depend on other parts to function.
If state is separate from presentational components, it means those components can be built to work with lots of different data, making them more reusable.
When state is kept independent, it can be used in several places and in different ways. Within two separate views, the same data could be processed in different ways to serve a particular purpose, but the underlying data would remain the same. This allows flexibility whilst maintaining consistency.
If data is kept separate, it makes it easier to change the data as it can be changed in just one place.
##### Are there benefits to using ES6 classes and, if so, what are they?
Classes are to some extent syntactic sugar over the traditional  way of defining objects in Javascript. Previously you had to define a constructor function and add methods to a prototype property. Classes provide a much cleaner syntax and thus are a benefit for readability.
Classes also allow tools to do static type checking at developer time which helps to catch errors early.
Classes also provide a firm foundation for the Javascript language to develop in accordance with other *C* style languages which use classes.
##### What is immutability? How can this be useful?
Immutability is when an object cannot be altered after being created. In Javascript, objects are normally mutable, but they can be made immutable, either explicitly by using Object.freeze(), or simply by convention. If an object has to be updated, rather than change a property on the original object, an entirely new object is created with the new property, along with all the unchanged properties copied over. When things are represented by objects, it's easier to detect changes since all you have to do is see if they are different objects. Change is harder to tell with mutable objects as you have to check every one of it's internal properties.
Immutable objects mean a system should be in a consistent state, making it easier to reason about and to debug. Immutability also opens up the possibility of keeping a record of the changing state of the system over time.
##### What is the spread operator for?
The spread operator is a syntax that allows you to represent several values using a single variable name prefixed by three dots.
It can be used for working with arrays, such as for concatenating two arrays together, or it can be used instead of *apply* for passing an array of values to a function. There is also a version of it that can be used for objects in a similar way allowing you to copy over the properties of an object into another object in a very succinct way.
The syntax is identical to the *rest* operator and should not be confused with it!
