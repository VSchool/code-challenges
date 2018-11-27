Use the built-in array method .filter() to solve all of these problems

1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
```js
function fiveAndGreaterOnly(arr) {

}

fiveAndGreaterOnly([3, 6, 8, 2]) // [6, 8]
```

2) Given an array of numbers, return a new array that only includes the even numbers.
```js
function evensOnly(arr) {

}

evensOnly([3, 6, 8, 2]) // [6, 8, 2]
```

3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
```js
function fiveCharactersOrFewerOnly(arr) {

}

fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]) // ["by", "dog", "wolf", "eaten"]
```

4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
```js
function peopleWhoBelongToTheIlluminati(arr){

}

peopleWhoBelongToTheIlluminati([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
])
```

5) Filter out all the people who are not old enough to see The Matrix (younger than 18)
```js
function ofAge(arr){

}

ofAge([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])
```