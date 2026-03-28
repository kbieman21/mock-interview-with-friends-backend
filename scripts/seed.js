// const mongoose = require('mongoose');
// const { Question } = require('../models/Questions'); // path to your model
// require('dotenv/config'); //require('dotenv').config();

import mongoose from 'mongoose';
import 'dotenv/config'; 
import { Question } from '../models/Questions.js';

const questions = [
  {
    question: "What are the differences between var, let, and const, and when would you use each?",
    answer:
      "var is the older way of declaring variables in JavaScript, and it's function-scoped, which means it can behave unpredictably if you're not careful. let and const are block-scoped, meaning they only exist inside the curly braces where they're defined, which makes them more predictable. You use let when a value will change, like in loops, and const when the value should stay the same, such as configuration settings or references to objects. Most modern code avoids var because let and const help prevent accidental bugs.",
    questionType: "technical"
  },
  {
    question: "What are the key differences between for, while, and do...while loops? When might you choose one over the other?",
    answer:
      "A for loop is ideal when you know exactly how many times you want something to repeat because it keeps the counter, condition, and update in one place. A while loop is better when you want to keep looping until a condition changes but you don't know how many iterations it will take. A do...while loop is similar to while, except it always runs at least once before checking the condition. You choose based on which structure makes your logic easiest to read and understand.",
    questionType: "technical"
  },
  {
    question: "What is event bubbling, and how can it affect how events are handled in a nested structure?",
    answer:
      "Event bubbling is when an event starts at the deepest target element and then moves upward through its parent elements. For example, clicking a button inside a div triggers the button's click event first, then the div's event, and so on. This can be helpful when you want parent elements to react, but it can also cause unexpected behavior if multiple elements listen for the same event. Understanding bubbling helps you control how events flow through your UI.",
    questionType: "technical"
  },
  {
    question: "Why is event delegation useful when working with dynamic elements?",
    answer:
      "Event delegation lets you attach a single event listener to a parent element instead of adding listeners to every child. This is especially useful when elements are added dynamically, like items in a growing list. Instead of attaching new listeners every time something is added, the parent listens for events and checks which child triggered them. This keeps your code cleaner, more efficient, and easier to maintain.",
    questionType: "technical"
  },
  {
    question: "What is the difference between inline event handling (onclick) and using addEventListener?",
    answer:
      "Inline event handlers like onclick mix HTML and JavaScript, which makes your code harder to maintain and limits you to one handler per event. addEventListener keeps your JavaScript separate, allows multiple listeners on the same event, and gives you more control over things like capturing and bubbling. Modern development almost always uses addEventListener because it's cleaner, more flexible, and easier to scale.",
    questionType: "technical"
  },
  {
    question: "What is the difference between client-side and server-side form validation, and why is it important to use both?",
    answer:
      "Client-side validation happens in the browser and gives users quick feedback, like telling them a field is required before they submit. Server-side validation happens on the backend and is essential for security because users can bypass or disable client-side checks. Using both ensures a smooth user experience while still protecting your application from bad or malicious data.",
    questionType: "technical"
  },
  {
    question: "What are the differences between querySelector, querySelectorAll, getElementById, and getElementsByClassName?",
    answer:
      "querySelector returns the first element that matches a CSS selector, while querySelectorAll returns a static list of all matches. getElementById is the fastest way to grab a single element by its unique ID, and getElementsByClassName returns a live collection of elements with a specific class. The querySelector methods are more flexible because they use CSS selectors, but the older methods can be faster in specific cases.",
    questionType: "technical"
  },
  {
    question: "Why is proper error handling essential in modern web development?",
    answer:
      "Proper error handling helps you catch problems early, provide helpful feedback to users, and prevent your application from crashing unexpectedly. Without it, small issues can snowball into bigger bugs that are harder to track down. Good error handling also improves security by preventing sensitive information from leaking through unhandled errors and helps maintain a smooth user experience.",
    questionType: "technical"
  },
  {
    question: "How does try...catch improve error management compared to ignoring runtime errors?",
    answer:
      "A try...catch block lets you safely run code that might fail and then handle the error gracefully instead of letting it break your entire script. This means your app can recover, show a friendly message, or take alternative actions. Ignoring errors leaves your users confused and your application unstable, while try...catch gives you control over what happens when things go wrong.",
    questionType: "technical"
  },
  {
    question: "How does async/await simplify working with asynchronous code compared to traditional Promises?",
    answer:
      "async/await lets you write asynchronous code that looks and reads like synchronous code, making it much easier to follow. Instead of chaining .then() calls, you can simply await a Promise and handle the result in a more natural flow. It doesn't replace Promises—it's built on top of them—but it makes your code cleaner, reduces nesting, and helps prevent callback-style complexity.",
    questionType: "technical"
  },
  {
    question: "What are some common pitfalls when working with the Fetch API, and how can they be avoided?",
    answer:
      "A common pitfall with the Fetch API is assuming that a request succeeded just because the Promise resolved, but Fetch only rejects on network errors, not on HTTP errors like 404 or 500. Another issue is forgetting to convert the response into JSON before using it, which leads to confusing bugs. Developers also sometimes overlook handling slow or stalled requests, which can be improved with timeouts or AbortController. Being mindful of these details helps you write more reliable and predictable network code.",
    questionType: "technical"
  },
  {
    question: "What is the difference between synchronous and asynchronous code, and why does it matter in web development?",
    answer:
      "Synchronous code runs one line at a time and blocks everything else until it finishes, which can freeze the browser if a task takes too long. Asynchronous code allows the browser to keep working while waiting for tasks like API calls or timers to complete. This matters because modern web apps rely heavily on network requests and user interactions, and asynchronous behavior keeps the interface smooth and responsive instead of locking up.",
    questionType: "technical"
  },
  {
    question: "What is the difference between a callback function and a higher-order function?",
    answer:
      "A callback function is simply a function passed into another function to be executed later, often after some work is done. A higher‑order function is any function that either takes another function as an argument or returns a function. Callbacks are one example of how higher‑order functions are used. Understanding this relationship helps you recognize patterns in JavaScript, especially in array methods and asynchronous programming.",
    questionType: "technical"
  },
  {
    question: "What is closure?",
    answer:
      "A closure happens when a function remembers the variables from the environment where it was created, even after that environment has finished running. It's like the function carries a backpack of variables with it wherever it goes. Closures are useful for things like private variables, function factories, and maintaining state without using global variables.",
    questionType: "technical"
  },
  {
    question: "What advantages does a component-based architecture provide compared to traditional HTML/CSS/JS development?",
    answer:
      "A component‑based architecture breaks your UI into small, reusable pieces that each manage their own structure, styling, and behavior. This makes your code easier to maintain, test, and scale because each component is focused on a single responsibility. Instead of updating scattered HTML and scripts, you update one component and the change is reflected everywhere it's used. It encourages cleaner organization and reduces duplication across your application.",
    questionType: "technical"
  },
  {
    question: "How would you explain the difference between props and state to a non-technical stakeholder?",
    answer:
      "Props are like the settings you give to a component, similar to choosing the color or size of a product before you buy it. State is more like the component's memory — it keeps track of things that can change over time, such as whether a dropdown is open or what a user typed into a form. Props come from the outside, while state is managed inside the component itself.",
    questionType: "technical"
  },
  {
    question: "When would you choose to use props over state in a component design?",
    answer:
      "You use props when the data should be controlled by a parent component or when the component shouldn't change the data itself. Props are great for passing information down the tree, like labels, colors, or values that come from elsewhere. State is used when the component needs to manage its own changing data, such as form inputs or toggles. If the component doesn't need to modify the data, props are usually the right choice.",
    questionType: "technical"
  },
  {
    question: "Reflect on one of the React applications you have built. What challenges did you face, and how did you overcome them?",
    answer:
      "One common challenge in React apps is managing state across multiple components, especially when several parts of the UI depend on the same data. A helpful way to overcome this is by lifting state up to a shared parent or using tools like the Context API to avoid prop drilling. Breaking the UI into smaller components and keeping each one focused on a single responsibility also makes debugging and maintenance much easier.",
    questionType: "technical"
  },
  {
    question: "How do you determine whether a component should manage its own state or receive it as a prop?",
    answer:
      "A component should manage its own state when the data only affects that component and doesn't need to be shared elsewhere. If multiple components need access to the same data, or if a parent needs to control the behavior, then the state should live higher up and be passed down as props. Thinking about how widely the data is used helps you decide the best place for it to live.",
    questionType: "technical"
  },
  {
    question: "How does the useEffect hook help manage side effects in a React application?",
    answer:
      "The useEffect hook lets you run code in response to changes in your component, such as fetching data, updating the document title, or setting up event listeners. It helps keep side effects separate from your rendering logic, which makes your components easier to understand. By controlling when the effect runs through the dependency array, you can avoid unnecessary work and keep your app efficient.",
    questionType: "technical"
  },
  {
    question: "Can you think of a scenario where you would use useEffect without a dependency array? Why?",
    answer:
      "Using useEffect without a dependency array means the effect will run after every render, which is useful in rare cases where you need to respond to every update. For example, you might use it to sync your component with a non-React system like a third‑party animation library or to log every render for debugging. It's not common in production code, but it's helpful when you truly need to run code on every single render cycle.",
    questionType: "technical"
  },
  {
    question: "How does the Context API differ from props drilling?",
    answer:
      "Props drilling happens when you pass data through multiple layers of components just so a deeply nested component can use it, which can make your code harder to maintain. The Context API solves this by allowing you to share data directly with any component that needs it, without passing props through every level. It's like creating a shared storage area that components can access when needed, making your code cleaner and easier to work with.",
    questionType: "technical"
  },
  {
    question: "What role does middleware play in an Express server?",
    answer:
      "Middleware in Express is like a series of checkpoints that a request passes through before reaching your final route handler. Each piece of middleware can inspect the request, modify it, validate data, handle authentication, or even stop the request entirely. This makes your server more modular and easier to maintain because each middleware function focuses on a single responsibility.",
    questionType: "technical"
  },
  {
    question: "What are the key differences between NoSQL and relational databases?",
    answer:
      "Relational databases store data in structured tables with rows and columns, making them great for consistent, well‑defined relationships. NoSQL databases store data in more flexible formats like documents or key‑value pairs, which makes them ideal for unstructured or rapidly changing data. The choice depends on your needs: relational databases excel at complex queries and consistency, while NoSQL shines in scalability and flexibility.",
    questionType: "technical"
  },
  {
    question: "Why is it important to structure a database schema before performing CRUD operations?",
    answer:
      "Structuring a database schema helps you understand how your data relates and ensures consistency across your application. Without a clear schema, you risk storing data in inconsistent formats, which leads to bugs and makes querying more difficult. A well‑planned schema acts like a blueprint, helping your application stay organized and predictable as it grows.",
    questionType: "technical"
  },
  {
    question: "How do MongoDB's find() and findOne() methods differ?",
    answer:
      "find() returns all documents that match a query and gives you a cursor you can loop through, while findOne() returns just the first matching document. If you expect multiple results, use find(); if you only need a single record, findOne() is simpler and faster. Choosing the right one helps keep your queries efficient and your code easier to understand.",
    questionType: "technical"
  },
  {
    question: "Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?",
    answer:
      "forEach is used when you want to loop through an array and perform an action but don't need a new array returned. map(), on the other hand, creates a brand‑new array based on the transformation you apply to each element. If you need a transformed array, use map(); if you're just running side effects like logging or updating the DOM, forEach is the better choice.",
    questionType: "technical"
  },
  {
    question: "Describe the difference between a cookie, sessionStorage and localStorage.",
    answer:
      "Cookies are small pieces of data sent to the server with every request and are often used for authentication. sessionStorage stores data for a single browser tab and clears when the tab closes. localStorage stores data that persists even after the browser is closed. Each one has different use cases depending on how long you need the data and whether it should be sent to the server.",
    questionType: "technical"
  },
  {
    question: "Describe the difference between <script>, <script async> and <script defer>.",
    answer:
      "A normal <script> tag blocks the page from loading until the script finishes running. async lets the script download in the background and run as soon as it's ready, which can cause out‑of‑order execution. defer also downloads the script in the background but waits to run it until after the HTML is fully parsed, preserving order. defer is usually the safest choice for scripts that depend on the DOM.",
    questionType: "technical"
  },
  {
    question: "Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?",
    answer:
      "Placing CSS in the head ensures styles load before the page renders, preventing layout flashes. Putting scripts at the bottom avoids blocking the page while JavaScript loads. Exceptions include scripts that must run early, like feature detection or critical inline scripts. In general, this structure keeps your page loading smoothly and improves user experience.",
    questionType: "technical"
  },
  {
    question: "What are data- attributes good for?",
    answer:
      "Data attributes are a handy way to store extra information directly in your HTML elements without affecting how the page looks. They're great when you need small pieces of custom data for JavaScript to use, such as IDs, categories, or configuration values. Instead of hardcoding values in your script or cluttering your markup, data attributes keep everything organized and easy to access with the dataset property.",
    questionType: "technical"
  },
  {
    question: "Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?",
    answer:
      "Responsive design means your site adjusts to different screen sizes using flexible layouts and media queries, while mobile‑first design starts by building for the smallest screens and then expanding upward. Mobile‑first encourages you to focus on essential content and performance from the start, which often leads to cleaner, faster experiences. Both approaches aim to support all devices, but mobile‑first helps ensure small screens aren't treated as an afterthought.",
    questionType: "technical"
  },
  {
    question: "Explain hoisting.",
    answer:
      "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before the code runs. This means you can technically use a function or variable before it appears in the code, although variables declared with var get hoisted differently than let and const. Understanding hoisting helps you avoid confusing bugs and makes it clearer why certain variables behave the way they do.",
    questionType: "technical"
  },
  {
    question: "Describe event bubbling.",
    answer:
      "Event bubbling is the process where an event starts at the deepest target element and then moves upward through its parent elements. For example, clicking a button inside a div triggers the button's event first, then the div's event, and so on. This behavior can be useful for event delegation, but it can also cause unexpected results if multiple elements listen for the same event.",
    questionType: "technical"
  },
  {
    question: "What's the difference between an attribute and a property?",
    answer:
      "Attributes are the values written directly in your HTML, while properties are the values stored on the DOM object once the browser processes the page. For example, an input might have a value attribute in the HTML, but its value property can change as the user types. Attributes describe the initial setup, while properties reflect the current state of the element.",
    questionType: "technical"
  },
  {
    question: "Why is extending built-in JavaScript objects not a good idea?",
    answer:
      "Extending built‑in objects like Array or Object can lead to unexpected behavior because it changes how these core features work across your entire application. Other developers—or even libraries—might rely on the original behavior, and your changes could break their code. It's safer to create your own utility functions instead of modifying built‑in prototypes.",
    questionType: "technical"
  },
  {
    question: "What is the difference between the document load event and the DOMContentLoaded event?",
    answer:
      "DOMContentLoaded fires as soon as the HTML is fully parsed, which means the structure of the page is ready to work with. The load event waits for everything—including images, stylesheets, and external resources—to finish loading. If you only need access to the DOM, DOMContentLoaded is faster; if you need all assets available, load is the better choice.",
    questionType: "technical"
  },
  {
    question: "What is the difference between == and ===?",
    answer:
      "The == operator compares values after performing type coercion, meaning it tries to convert the values to the same type before comparing them. The === operator compares both value and type without converting anything. Using === helps avoid unexpected results and is generally recommended because it makes your comparisons more predictable.",
    questionType: "technical"
  },
  {
    question: "Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]",
    answer:
      "You can duplicate the array by returning a new array that spreads the original twice, like this: const duplicate = arr => [...arr, ...arr]. This works because the spread operator expands the elements of the array into a new one, giving you a clean and readable way to combine them. It's a simple example of how modern JavaScript features make common tasks easier.",
    questionType: "technical"
  },
  {
    question: "Why is it called a Ternary expression, what does the word 'Ternary' indicate?",
    answer:
      "The word 'ternary' means 'having three parts,' which fits because the ternary operator uses three components: a condition, a result if the condition is true, and a result if it's false. It's a compact way to write simple conditional logic, and once you get used to it, it can make your code cleaner and easier to read.",
    questionType: "technical"
  },
  {
    question: "What tools and techniques do you use debugging JavaScript code?",
    answer:
      "Debugging JavaScript often involves using the browser's developer tools, especially the console and the debugger panel, which let you inspect variables, step through code, and watch how values change. Console.log is still a simple but powerful way to trace what's happening in your program. Tools like breakpoints, network inspectors, and performance monitors help you understand how your code behaves in real time. Combining these tools with a systematic approach—testing small pieces at a time—makes debugging much more manageable.",
    questionType: "technical"
  },
  {
    question: "Explain the difference between mutable and immutable objects.",
    answer:
      "Mutable objects can be changed after they're created, meaning their contents can be updated directly. Immutable objects, on the other hand, cannot be changed once created; instead, any update creates a new version of the object. JavaScript strings and numbers are immutable, while arrays and objects are mutable. Understanding this difference helps prevent accidental side effects, especially when working with state in frameworks like React.",
    questionType: "technical"
  },
  {
    question: "Explain the difference between synchronous and asynchronous functions.",
    answer:
      "Synchronous functions run one after another, blocking the program until each task finishes, which can slow things down if a task takes a long time. Asynchronous functions allow the program to keep running while waiting for tasks like API calls or timers to complete. This keeps your app responsive and prevents the browser from freezing. Knowing when to use each type helps you build smoother, more efficient applications.",
    questionType: "technical"
  },
  {
    question: "What is the event loop? What is the difference between the call stack and the task queue?",
    answer:
      "The event loop is JavaScript's system for handling asynchronous operations by coordinating the call stack and the task queue. The call stack runs your main code one line at a time, while the task queue holds callbacks waiting to run after asynchronous tasks finish. The event loop constantly checks whether the call stack is empty and, if so, moves tasks from the queue into the stack. This system allows JavaScript to appear multitasking even though it runs on a single thread.",
    questionType: "technical"
  },
  {
    question: "Explain the differences in usage between function foo() {} and var foo = function() {}.",
    answer:
      "function foo() {} is a function declaration, which gets hoisted to the top of its scope, meaning you can call it before it appears in the code. var foo = function() {} is a function expression assigned to a variable, and only the variable declaration is hoisted—not the function itself—so you can't call it before it's defined. Both create functions, but declarations are better when you want predictable hoisting, while expressions are useful when you want more control over when the function becomes available.",
    questionType: "technical"
  },
  {
    question: "Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?",
    answer:
      "Arrow functions are great for short, simple functions, especially when working with array methods like map or filter. They also don't have their own this binding, which makes them useful in situations where you want to preserve the surrounding context, such as inside class methods or callbacks. Their shorter syntax makes code cleaner and easier to read, but they're not ideal for every situation, like when you need a function with its own this or arguments object.",
    questionType: "technical"
  },
  {
    question: "What is different between NoSQL and SQL database? And have you face an difficulties and how did you handle it?",
    answer:
      "SQL databases store data in structured tables with predefined schemas, making them great for consistent, relational data. NoSQL databases store data in flexible formats like documents or key‑value pairs, which makes them ideal for rapidly changing or unstructured data. A common challenge when working with NoSQL is ensuring consistency across documents, which I've handled by designing clear data models and using validation tools like Mongoose to enforce structure where needed.",
    questionType: "technical"
  },
  {
    question: "What different between Waterfall and Agile methodology?",
    answer:
      "Waterfall is a linear approach where each phase of a project—planning, design, development, testing—happens in order, making it predictable but less flexible. Agile is iterative, meaning teams work in small cycles, gather feedback, and adjust as they go. Agile is great for projects where requirements may change, while Waterfall works best when everything is well‑defined from the start. Understanding both helps you choose the right approach for the project's needs.",
    questionType: "technical"
  },

  {
    question: "Give me an example of the project or initiative that you started on your own. What prompted you to get started?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Tell me about a time you had to work on several projects at once. How did you handle this?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Describe a situation in which you felt you had not communicated well enough. What did you do? How did you handle it?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Tell me about when you had to deal with conflict within your team. How was the conflict solved? How did you handle that? How would you deal with it now?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Give me an example of a time you had to take a creative and unusual approach to solve a coding problem. How did this idea come to your mind? Why do you think it was unusual?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Describe a situation in which you worked diligently on a project and it did not produce the desired results. What did you learn from the experience?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Give an example of an important project goal you reached and how you achieved it.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Describe a situation in which you experienced difficulty in getting others to accept your ideas. What was your approach? How did this work?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Tell me about a situation when you were responsible for project planning. Did everything go according to your plan? If not, why and what counteractions did you take?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Tell me about a situation when you made a mistake at work. What happened and how did you deal with it?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Tell me about a time when you worked with someone who was not completing their share of the work. How did you handle the situation?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Describe a situation when you worked effectively under pressure. What was going on, and how did you get through it?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Tell me about yourself.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "What do you know about our company?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Why do you want to work for us?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Why are you interested in this opportunity?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Tell me about your dream job. What do you really want to do with your career?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Tell me a time when you failed.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "What do you read on a regular basis?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "What's some critical feedback you've gotten recently?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Do you have any questions?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Tell me the process of developing an application from a-z",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Share an experience when you collaborated closely with someone whose personality differed significantly from yours.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Discuss a situation where you encountered conflict while working in a team. How did you navigate and resolve it?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Describe a time when building a relationship with a key person proved challenging. How did you eventually establish a connection?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Reflect on a moment when you wished you had handled a situation differently with a colleague. What happened, and what did you learn?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Talk about a time when you needed information from an unresponsive individual. How did you approach the situation?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Narrate an instance when making a positive impression on a client was crucial. How did you ensure a favorable outcome?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Provide an example of a situation where you did not meet a client's expectations. What actions did you take to address and rectify it?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Share a story of ensuring customer satisfaction with your service.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Describe an encounter with a challenging client. What was the scenario, and how did you handle it?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "When dealing with numerous customers, how do you prioritize and deliver excellent service to all? Define your approach to customer service.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Recall a high-pressure situation you faced. What challenges were present, and how did you overcome them?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Discuss how your team or company underwent change and its impact on you. How did you adapt to the changes?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Share your experience in your first job and the steps you took to learn the ropes.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Narrate a situation where you had to think on your feet to gracefully handle a difficult or awkward situation.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Reflect on a time when you faced failure. How did you manage and learn from the situation?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Talk about a strategic approach you took to meet all your top priorities.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Describe a long-term project you managed and the strategies employed to maintain timely progress.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Share an instance when your responsibilities became overwhelming. How did you handle the situation?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Discuss a goal you set for yourself and the steps you took to ensure its achievement.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Provide an example of managing numerous responsibilities. How did you effectively handle the workload?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Narrate an occasion when you successfully persuaded someone at work to see things from your perspective.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Describe a situation where you were the resident technical expert and how you ensured clear understanding for everyone.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Share a time when you relied on written communication to convey complex ideas to your team.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Discuss an instance where you explained something intricate to a frustrated client using effective communication.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Talk about a successful presentation you gave and the factors that contributed to its success.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Share your proudest professional accomplishment.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Describe a time when you took initiative to correct a problem rather than waiting for someone else.",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Discuss an experience working under close or extremely loose supervision. How did you navigate it?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Provide an example of a creative work endeavor. What was exciting or challenging about it?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Reflect on a time when you were dissatisfied with your work. What improvements could have enhanced your experience?",
    answer: "",
    questionType: "behavioral"
  },
  {
    question: "Tell me a time when you had challenge and you able to figure it out but was very stressful",
    answer: "",
    questionType: "behavioral"
  }
];

const seedDB = async () => {
  try {
  await mongoose.connect(process.env.MONGODB_URI);
  
  // 1. Clear the collection first (helps avoid unique index errors)
  await Question.deleteMany({}); 
  
  // 2. Use ordered: false to skip bad docs and finish the rest
  const result = await Question.insertMany(questions, { ordered: false });
  
  console.log(`${result.length} questions successfully inserted! 🌱`);
  process.exit(0);
} catch (err) {
  // If ordered: false, 'err' will contain a list of all documents that failed
  if (err.writeErrors) {
    console.error(`Total errors: ${err.writeErrors.length}`);
    console.log("First error details:", err.writeErrors[0].errmsg);
  } else {
    console.error("Seed Error:", err);
  }
  // We don't necessarily want to exit(1) if most docs succeeded
  process.exit(0); 
}
};

seedDB();
