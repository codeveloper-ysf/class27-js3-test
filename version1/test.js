// VERSION 1

// YUSUF
// CLASS - 27

/*
1.
Write a function that:
- Logs to the console numbers 1 to 100.
- However, if the number is a multiple of both 3 and 5 it should log "Jackpot!" instead of the number.
- If it doesn't pass the function should log "multiple of 3" if it's a multiple of only 3
- If it's a multiple of 5 it should log "This is a multiple of 5"

Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
Hint: the order of conditional statements is important!

for (let index = 0; index < + 100; index++) {
    const numbers = index;
    if (numbers % 5 === 0 && numbers % 3 === 0) {
        const numbers = 'Jackpot!';
        console.log(numbers);
    } else if(numbers % 5 === 0) {
        const numbers = 'This is a multiple of 5'
        console.log(numbers);
    }
    else if(numbers % 3 === 0) {
        const numbers = 'multiple of 3'
        console.log(numbers);
    }
    else{
        console.log(numbers)
    }
}

*/

/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!")
- Creates an empty <img> element and add it to the document.
- When the button is clicked, inserts an image URL into an <img> tag and remove the button
- Use the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4

const button = document.createElement('button');
button.textContent = 'click me!';
document.body.appendChild(button);
const img = document.createElement('img');
document.body.appendChild(img);
const url = 'https://avatars3.githubusercontent.com/u/20858568?s=200&v=4';

button.addEventListener('click', ()=>{
    img.src = url;
    button.style.display = 'none';
})

*/

/*
3.
Answer the following questions:
- What is an Application Programming Interface (API)?
    API (Application Programming Interface) is the interface provided by the application 
    that shares the capabilities of an application so that it can be used in another application.

- How does this relate to your HackYourRepo project?
    I've used the API of HYF GitHub account and connected it to my own project by creating a Fetch API.
    After that connection, i've got some informations of repositories and contributions of HYF API.


Explain each in 200 words or less.
*/


/*
4.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following API: https://reqres.in/api/users
- Make use of async/await syntax
- Parses the response and then displays the "first_name" and "last_name" of the first THREE users within the DOM
- Creates an <ul> for each user
- Makes use of async/await

const URL = "https://reqres.in/api/users";
async function getUserAsync() {
    const response = await fetch(URL);
    const users = await response.json();
    return users;
}
getUserAsync()
    .then((users) => {
        const ul = document.createElement('ul');

        for (let i = 0; i < 3; i++) {
            const li = document.createElement('li');
            li.innerHTML = `<p><b>First name: </b> ${users.data[i].first_name} <b> Last Name: </b> ${users.data[i].last_name}</p>`
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    });

*/


/*
5.
a) Create a class, called Person, that includes:
- A constructor method
- "name", "age", "home city" properties
- 1 additional method, called "getName", which returns the name

    class Person {
        constructor(name, age, homeCity) {
            this.name = name;
            this.age = age;
            this.homeCity = homeCity;
        }
        getName() {
            return this.name;
        }
    }

b) Instantiate the class, and give it your name + attributes

    const newPerson = new Person("yusuf", 25, "deventer");
    console.log(newPerson);
    console.log(newPerson.getName());

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less

    When we define that class in a JS file, we can use/change the data in another JS files which has connected each other.
*/




/*
6.
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

b) Explain in 100 words or less your approach for implementing the library

    Firstly, I've checked the url and found docs. In docs, there is a link to use data in our html file.
    I've referred to it using the src attribute in the <script> tag in index.html.
    After i've checked the usage of data and found <canvas> tag.
    After adding <canvas> into body of index.html, i've typed an example data from the docs to my js file.
    Done!

*/
