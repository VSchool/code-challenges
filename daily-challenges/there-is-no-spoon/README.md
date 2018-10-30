In order to practice translating real-world objects into code, look around the room and pick 10 things you can see. Then write them as 10 JavaScript objects.

* Create 10 objects from things you see.
* Each object should have at least 3 keys (properties).
    * Choose varying data types for your properties (boolean, string, number, array, nested object, etc.)
* Each object should have at least one method.

###### Example:
```js
var pen = {
    color: "Black",
    price: 2,
    isGelPen: false,
    write: function() {
        console.log("I'm a " + this.color + " pen that costs $" + this.price);
    }
}
```

#### Extra Credit:
* Call a method from one object that then calls a method nested in another.
* place all of your objects into an array and call your functions.
* Nest one object within another, within another object, within another.
* Create and call a method in one object that calls a method nested at the deepest level of your deeply nested object.
