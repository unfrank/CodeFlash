export const flashcards = [
  // React and JSX
  {
    question:
      "What script tags are necessary to add React to an existing HTML page?",
    answer: "react.development.js, react-dom.development.js, and babel.min.js.",
  },
  {
    question: "What is the purpose of the ReactDOM.render() function?",
    answer: "To render JSX to the specified DOM element.",
  },
  {
    question: "Why is the babel.min.js script included when using JSX?",
    answer: "To translate JSX into standard JavaScript syntax.",
  },
  {
    question:
      "In ReactDOM.render(), what do the first and second parameters represent?",
    answer:
      "The first is the JSX to render, and the second is the DOM element to render into.",
  },
  {
    question: "How do you include JavaScript expressions within JSX code?",
    answer: "By placing them inside curly braces {}.",
  },
  {
    question:
      "In the example, what variable determines whether the button has been clicked?",
    answer: "The variable isClicked.",
  },
  {
    question:
      "What happens inside the renderAll() function when isClicked is set to true?",
    answer:
      "The text changes to 'It was clicked!' and the <div> class is set to 'active'.",
  },
  {
    question: "How is interactivity handled in the provided example code?",
    answer:
      "By adding a click event listener to update the state and re-render.",
  },
  {
    question: "What does the ternary operator ?: allow you to do in JSX?",
    answer:
      "Insert conditional statements with different outputs based on conditions.",
  },
  {
    question: "What does JSX allow you to do that pure HTML does not?",
    answer:
      "Combine HTML-like syntax with JavaScript logic in the same code structure.",
  },

  // JSX: Basic Syntax
  {
    question: "Why are parentheses often used when writing JSX?",
    answer: "To separate code from layout for cleaner readability.",
  },
  {
    question: "What does the ternary operator ?: allow you to do in JSX?",
    answer:
      "It provides a shorthand for conditional rendering, similar to an if...else statement.",
  },
  {
    question: "How does the && operator work in JSX?",
    answer:
      "It conditionally renders JSX only if the condition before && is true.",
  },
  {
    question: "How do you assign CSS classes in JSX?",
    answer:
      "By using className instead of class, since class is a reserved JavaScript keyword.",
  },
  {
    question: "What style format is used in JSX when setting CSS styles?",
    answer:
      "Inline styles are written as JavaScript objects with camelCase property names.",
  },
  {
    question: "Why might px not be needed for certain style properties in JSX?",
    answer:
      "React automatically appends px to numeric values for some style properties.",
  },
  {
    question: "What is the purpose of a React fragment?",
    answer:
      "To wrap multiple elements without adding extra <div> tags to the DOM.",
  },
  {
    question:
      "How can you use React fragments without importing React.Fragment?",
    answer: "By using empty tags <>...</> as shorthand for fragments.",
  },
  {
    question: "How should self-closing tags like <img> be written in JSX?",
    answer: "With a trailing slash, e.g., <img />.",
  },
  {
    question: "When can you use self-closing syntax for tags in JSX?",
    answer:
      "When the tag has no content, such as <div /> instead of <div></div>.",
  },

  // JSX: Lists and Events
  {
    question:
      "What JSX method is commonly used to loop through arrays to display list items?",
    answer: "The map() method.",
  },
  {
    question:
      "Why is it important to use a key attribute for list items in JSX?",
    answer:
      "To uniquely identify each item and help React track changes, ensuring correct order during re-renders.",
  },
  {
    question:
      "In the example, which data field is used as the key for each message in the list?",
    answer: "message.id",
  },
  {
    question: "What does React do if list items lack unique keys?",
    answer:
      "React may reorder items incorrectly, potentially breaking the application, and it will show a console warning.",
  },
  {
    question:
      "How do event handlers like onClick differ in JSX compared to standard HTML?",
    answer:
      "Event handlers in JSX are camelCase (e.g., onClick) and refer to JavaScript functions directly.",
  },
  {
    question: "What does the onMouseEnter attribute do in JSX?",
    answer: "It triggers a function when the mouse enters the element’s area.",
  },
  {
    question:
      "Why must event handler functions be accessible within the scope of ReactDOM.render()?",
    answer:
      "So that JSX can reference and execute them when the associated events occur.",
  },
  {
    question:
      "Which JavaScript function is used in the example to handle a button click?",
    answer: "handleClick()",
  },
  {
    question: "How is map() typically used with JSX elements?",
    answer: "To generate and render a list of JSX elements from an array.",
  },
  {
    question: "Can JSX handle multiple event attributes on a single element?",
    answer:
      "Yes, multiple event attributes like onClick and onMouseEnter can be used on the same element.",
  },
  {
    question: "What is a prop in React?",
    answer:
      "A prop is an attribute passed to a React component, similar to an HTML attribute.",
  },
  {
    question: "How do you create a functional component in React?",
    answer:
      "By defining a JavaScript function that takes props as a parameter and returns JSX.",
  },
  {
    question:
      "Why should React components have names that start with uppercase letters?",
    answer:
      "To differentiate them from regular HTML tags, as React treats lowercase tags as HTML elements.",
  },
  {
    question:
      "In the example <User id='1' name='Gregory' />, what type of component is User?",
    answer: "A functional component.",
  },
  {
    question: "What does the children prop represent in React?",
    answer:
      "It represents any nested JSX passed to a component, allowing it to render child elements.",
  },
  {
    question: "How is props typically passed to a functional component?",
    answer: "As a single object containing all properties as key-value pairs.",
  },
  {
    question: "What does props.children contain if a component has nested JSX?",
    answer:
      "It contains the nested JSX, which can be other components, elements, or text.",
  },
  {
    question: "How does React use props behind the scenes?",
    answer:
      "It converts the passed attributes into a props object, which is then used by the component.",
  },
  {
    question:
      "What does the onClick={handleClick} attribute do in the component <CustomButton title='Click me!' onClick={handleClick} />?",
    answer: "It passes a click handler function as a prop to CustomButton.",
  },
  {
    question:
      "Can props.children be used to pass complex elements like entire forms or dialogs to components?",
    answer:
      "Yes, props.children can contain any JSX, including complex elements.",
  },

  // Lifecycle of Class Components
  {
    question:
      "What are the three main stages of a React class component's lifecycle?",
    answer: "Mounting, updating, and unmounting.",
  },
  {
    question:
      "Which lifecycle method is called right after a component is added to the DOM for the first time?",
    answer: "componentDidMount()",
  },
  {
    question: "What are the three ways a component can update?",
    answer: "Parent component re-renders, setState(), and forceUpdate().",
  },
  {
    question:
      "In which lifecycle method is it common to set up timers, fetch data from an API, or subscribe to events?",
    answer: "componentDidMount()",
  },
  {
    question:
      "Which lifecycle method is called right before a component is removed from the DOM, and is often used to clean up timers or subscriptions?",
    answer: "componentWillUnmount()",
  },
  {
    question:
      "What does the componentDidUpdate() lifecycle method allow you to do in a React class component?",
    answer: "Run code after re-rendering, often for side effects.",
  },
  {
    question:
      "Which method would you use to stop a timer when a component is removed from the DOM?",
    answer: "componentWillUnmount()",
  },
  {
    question:
      "In which lifecycle method would you call setState() to trigger a re-render right after the component has been added to the DOM?",
    answer: "componentDidMount()",
  },
  {
    question:
      "What is the purpose of the render() method in a React class component?",
    answer: "To define the component's structure and content (JSX output).",
  },
  {
    question:
      "What will happen if you call setState() inside componentDidUpdate() without any condition?",
    answer: "It will cause an infinite loop of re-rendering.",
  },

  // Class Components
  {
    question: "How do you define a class component in React?",
    answer: "By using class ComponentName extends React.Component.",
  },
  {
    question: "Where is the JSX code placed in a class component?",
    answer: "Inside the render() method.",
  },
  {
    question: "How is props accessed in a class component?",
    answer: "Using this.props since props is part of the class instance.",
  },
  {
    question:
      "What is the purpose of the constructor() method in a class component?",
    answer:
      "To initialize state and pass props to the parent class with super(props).",
  },
  {
    question: "How do you update the component’s state in a class component?",
    answer: "By calling this.setState().",
  },
  {
    question: "What does this.setState() do besides updating the state?",
    answer: "It triggers a re-render of the component with the updated state.",
  },
  {
    question:
      "Why are event handler methods like handleLike often defined as arrow functions in class components?",
    answer: "To retain the correct this context when used as event handlers.",
  },
  {
    question: "How do you disable a button in JSX conditionally?",
    answer:
      "By using the disabled attribute with a condition, e.g., disabled={this.state.rating > 0}.",
  },
  {
    question:
      "Before React Hooks, what was the main limitation of functional components?",
    answer: "They were 'stateless' and couldn’t manage state directly.",
  },
  {
    question:
      "What Hook introduced in React 16.8 allows functional components to be stateful?",
    answer: "The useState Hook.",
  },

  // The Virtual DOM
  {
    question: "What is JSX often described as in relation to React?",
    answer: "JSX is often described as 'syntactic sugar' for React.",
  },
  {
    question: "What primary function does JSX get transformed into?",
    answer: "JSX is transformed into React.createElement() calls.",
  },
  {
    question: "Why do we need Babel when working with JSX?",
    answer:
      "Babel transpiles JSX into React.createElement() calls, allowing it to work with JavaScript.",
  },
  {
    question:
      "What is the structure of an element created by React.createElement()?",
    answer:
      "An element created by React.createElement() is a JavaScript object containing the element type, props, and children.",
  },
  {
    question:
      "In the transpiled React code, what does the second argument of React.createElement() represent?",
    answer:
      "The second argument is an object containing the attributes and props for the element.",
  },
  {
    question: "How does React’s virtual DOM help improve performance?",
    answer:
      "React's virtual DOM minimizes real DOM operations by only making necessary updates, which speeds up performance.",
  },
  {
    question: "What is 'reconciliation' in React?",
    answer:
      "Reconciliation is the process of comparing the virtual DOM with the actual DOM to make efficient updates.",
  },
  {
    question:
      "What types of nodes are typically found in the children array of a React element?",
    answer:
      "The children array typically contains text strings, additional React.createElement() calls, or JavaScript expressions.",
  },
  {
    question:
      "What is the end result of the structure formed by React elements and their children?",
    answer:
      "The end result is a tree structure that represents the component hierarchy in the virtual DOM.",
  },
  {
    question:
      "How does React use document.createElement() during the initial render?",
    answer:
      "React uses document.createElement() to create real DOM elements based on the virtual DOM structure.",
  },

  // Dynamic Images
  {
    question:
      "Why is importing each image individually not practical in React with many images?",
    answer:
      "It leads to repetitive code; grouping images in an array is more efficient.",
  },
  {
    question: "What is the purpose of the data array in constants.js?",
    answer:
      "It stores animal names and their image paths for easier access in components.",
  },
  {
    question: "How does Vite handle relative paths to images?",
    answer:
      "It uses new URL('path', import.meta.url).href to create a full image URL.",
  },
  {
    question: "What does import.meta.url represent in Vite?",
    answer:
      "It represents the base URL of the current module for relative paths.",
  },
  {
    question: "How does find help select an image in the Animal component?",
    answer:
      "find searches the data array for a matching name property to selectedAnimal.",
  },
  {
    question: "What is the purpose of .href in new URL(...).href?",
    answer: ".href provides the complete URL string needed for the image src.",
  },
  {
    question: "What occurs if there is no matching image for selectedAnimal?",
    answer:
      "find returns undefined, which can lead to errors unless a default image is set.",
  },
  {
    question: "How can you set a default image in the Animal component?",
    answer: "Use || to assign a default object if find returns undefined.",
  },
  {
    question: "Why add an alt attribute to the <img> in Animal?",
    answer:
      "It improves accessibility and provides context if the image doesn’t load.",
  },
  {
    question:
      "What file structure is suggested for React projects in this lesson?",
    answer:
      "Organize components in components/, images in assets/animals/, and utilities in utils/constants.js.",
  },
  {
    question: "What does the useState hook return?",
    answer:
      "An array with the current state value and a function to update it.",
  },
  {
    question: "How do you initialize a state variable with useState?",
    answer: "Pass the initial value as an argument to useState.",
  },
  {
    question:
      "What is the purpose of the setter function returned by useState?",
    answer: "To update the state value and trigger a re-render.",
  },
  {
    question: "Why should useState not be used inside loops or conditionals?",
    answer: "Because it must be called in the same order every render.",
  },
  {
    question:
      "How do you update an array state without mutating the original array?",
    answer: "Use the spread operator to create a new array.",
  },
  {
    question: "Can useState manage multiple pieces of state in one component?",
    answer:
      "Yes, you can call useState multiple times for different state variables.",
  },
  {
    question: "Why is destructuring used with useState?",
    answer:
      "To assign meaningful names to the state value and setter function.",
  },
  {
    question: "What happens when you call the setter function from useState?",
    answer: "The component re-renders with the updated state.",
  },
  {
    question: "What types of values can be stored in useState?",
    answer: "Any data type, including numbers, strings, objects, and arrays.",
  },
  {
    question:
      "What is the main rule for the placement of useState in a component?",
    answer: "It should be placed only at the top level of the component.",
  },

  {
    question: "What does the useState hook return?",
    answer:
      "An array with the current state value and a function to update it.",
  },
  {
    question: "How do you initialize a state variable with useState?",
    answer: "Pass the initial value as an argument to useState.",
  },
  {
    question:
      "What is the purpose of the setter function returned by useState?",
    answer: "To update the state value and trigger a re-render.",
  },
  {
    question: "Why should useState not be used inside loops or conditionals?",
    answer: "Because it must be called in the same order every render.",
  },
  {
    question:
      "How do you update an array state without mutating the original array?",
    answer: "Use the spread operator to create a new array.",
  },
  {
    question: "Can useState manage multiple pieces of state in one component?",
    answer:
      "Yes, you can call useState multiple times for different state variables.",
  },
  {
    question: "Why is destructuring used with useState?",
    answer:
      "To assign meaningful names to the state value and setter function.",
  },
  {
    question: "What happens when you call the setter function from useState?",
    answer: "The component re-renders with the updated state.",
  },
  {
    question: "What types of values can be stored in useState?",
    answer: "Any data type, including numbers, strings, objects, and arrays.",
  },
  {
    question:
      "What is the main rule for the placement of useState in a component?",
    answer: "It should be placed only at the top level of the component.",
  },

  {
    question: "What are some potential career paths for a software engineer?",
    answer:
      "Software engineers can work in roles like front-end, back-end, full-stack development, DevOps, data science, and cybersecurity.",
  },
  {
    question:
      "Why might front-end development be an appealing path for someone interested in software engineering?",
    answer:
      "Front-end development is creative, visually engaging, and allows engineers to directly impact user experience.",
  },
  {
    question: "How do you add JavaScript to a webpage?",
    answer: "JavaScript is added using the <script> tag within HTML.",
  },
  {
    question:
      "What is the difference between null, undefined, and NaN in JavaScript?",
    answer:
      "null represents no value, undefined means a variable hasn’t been assigned, and NaN is 'Not-a-Number' for invalid math operations.",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answer: "Variables are declared using var, let, or const.",
  },
  {
    question: "What is the purpose of comments in code?",
    answer:
      "Comments explain code, improve readability, and help with debugging.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== compares values loosely, while === compares both value and type strictly.",
  },
  {
    question: "Write an example of an if...else conditional statement.",
    answer:
      "if (x > 10) { console.log('Greater'); } else { console.log('Smaller'); }",
  },
  {
    question: "When would you use a for loop instead of a while loop?",
    answer:
      "Use a for loop when you know the exact number of iterations in advance.",
  },
  {
    question: "How do logical operators like &&, ||, and ! work in JavaScript?",
    answer:
      "&& returns true if both conditions are true, || returns true if either condition is true, and ! negates the condition.",
  },
  {
    question: "How do you declare an array in JavaScript?",
    answer:
      "An array is declared with square brackets, e.g., const arr = 1, 2, 3;",
  },
  {
    question:
      "What method would you use to add an element to the end of an array?",
    answer: "Use the push() method to add an element to the end.",
  },
  {
    question:
      "Write a loop that iterates through an array and prints each element.",
    answer: "for (let i = 0; i < arr.length; i++) { console.log(arri); }",
  },
  {
    question: "How is an object different from an array in JavaScript?",
    answer:
      "Objects store key-value pairs, while arrays store ordered lists of values.",
  },
  {
    question:
      "What method can you use to remove the last element from an array?",
    answer: "Use the pop() method to remove the last element.",
  },
  {
    question: "Describe how you would create an array to store your own data.",
    answer:
      "Create an array with square brackets, like const myArray = 'item1', 'item2', 'item3';",
  },
  {
    question: "What types of operations can you perform on arrays?",
    answer: "You can add, remove, search, and iterate over elements in arrays.",
  },
  {
    question: "How do you declare a function in JavaScript?",
    answer: "Use the function keyword, e.g., function myFunction() { ... }.",
  },
  {
    question: "What is the purpose of a function parameter?",
    answer:
      "Parameters allow functions to accept inputs and operate on different data.",
  },
  {
    question:
      "Write a function that takes two numbers as parameters and returns their sum.",
    answer: "function add(a, b) { return a + b; }",
  },
  {
    question: "What does the return keyword do in a function?",
    answer: "It outputs a value from the function and ends its execution.",
  },
  {
    question:
      "What is a modal, and why is it important in front-end development?",
    answer:
      "A modal is a pop-up window that focuses user attention on specific content.",
  },
  {
    question:
      "How would you implement a responsive modal using HTML, CSS, and JavaScript?",
    answer:
      "Use a div for the modal structure, style it with CSS for responsiveness, and control visibility with JavaScript.",
  },
  {
    question: "What are some strategies to approach solving coding challenges?",
    answer:
      "Break down the problem, write pseudocode, and test small parts first.",
  },
  {
    question: "Why is it beneficial to practice on platforms like Codewars?",
    answer: "It helps improve problem-solving skills and coding efficiency.",
  },
  {
    question: "What is the DOM, and why is it important in web development?",
    answer:
      "The DOM represents the structure of a webpage, allowing JavaScript to interact with HTML elements.",
  },
  {
    question: "How do you select an HTML element using JavaScript?",
    answer:
      "Use methods like document.getElementById() or document.querySelector().",
  },
  {
    question:
      "How can you update the content of an HTML element using JavaScript?",
    answer: "Set the element's innerHTML or textContent property.",
  },
  {
    question: "What is the purpose of the addEventListener method?",
    answer: "It attaches event handlers to elements for user interactions.",
  },
  {
    question: "How do you manipulate CSS classes through JavaScript?",
    answer: "Use element.classList methods like add(), remove(), or toggle().",
  },
  {
    question: "What is the event object, and how is it used in event handling?",
    answer:
      "The event object provides information about an event, like its type and target.",
  },
  {
    question:
      "What are some practical uses for manipulating the DOM in a project?",
    answer:
      "To update content dynamically, create interactive elements, and respond to user input.",
  },
  {
    question:
      "Describe how you would dynamically add HTML content to a webpage.",
    answer:
      "Use document.createElement() to create elements and appendChild() to add them.",
  },
  {
    question:
      "What are some techniques for managing your time effectively while working on software projects?",
    answer:
      "Use task prioritization, time blocking, and tools like Trello or Asana.",
  },
  {
    question: "How do you prioritize resources when working on multiple tasks?",
    answer:
      "Evaluate task urgency, set deadlines, and focus on high-impact tasks first.",
  },
  {
    question: "What is the purpose of the console.log() method in debugging?",
    answer:
      "It displays output in the console to help inspect variable values and program flow.",
  },
  {
    question:
      "What is the difference between a syntax error and a runtime error?",
    answer:
      "A syntax error occurs from invalid code structure, while a runtime error happens during code execution.",
  },
  {
    question:
      "How can you use the browser’s debugger to step through code execution?",
    answer:
      "Set breakpoints in the debugger, then step through code to inspect execution line-by-line.",
  },
  {
    question: "What does hypothesis-driven debugging involve?",
    answer:
      "It involves forming and testing specific assumptions about code behavior to locate bugs.",
  },
  {
    question: "What is the purpose of creating a branch in Git?",
    answer:
      "To work on separate features or fixes independently from the main codebase.",
  },
  {
    question: "How do you merge two branches in Git?",
    answer:
      "Use the git merge command to combine changes from one branch into another.",
  },
  {
    question: "What is the purpose of a pull request in Git?",
    answer:
      "It requests to merge changes from one branch into another, often reviewed by others first.",
  },
  {
    question:
      "What is the difference between let, const, and var in JavaScript?",
    answer:
      "var is function-scoped and hoisted, let is block-scoped and reassignable, and const is block-scoped and cannot be reassigned.",
  },
  {
    question:
      "How can you search for characters in a string using JavaScript methods?",
    answer: "Use methods like includes(), indexOf(), or match().",
  },
  {
    question:
      "Describe how you would convert a string to another format (e.g., to upper or lower case).",
    answer: "Use toUpperCase() or toLowerCase() string methods.",
  },
  {
    question: "What are some special numeric values in JavaScript?",
    answer: "Special values include Infinity, -Infinity, and NaN.",
  },
  {
    question: "How does the logical NOT (!) operator work in JavaScript?",
    answer: "It inverts a boolean value, turning true to false and vice versa.",
  },
  {
    question:
      "What is the difference between the logical OR (||) and AND (&&) operators?",
    answer:
      "|| returns true if any condition is true; && returns true only if all conditions are true.",
  },
  {
    question:
      "When would you use a switch-case statement instead of an if...else statement?",
    answer:
      "Use switch-case when checking a variable against multiple specific values.",
  },
  {
    question:
      "Explain how the ternary operator can be used to simplify conditional logic.",
    answer:
      "The ternary operator condenses an if...else statement into a single line: condition ? expr1 : expr2.",
  },
  {
    question:
      "What are some strategies to communicate effectively in a work environment?",
    answer:
      "Use active listening, be clear and concise, and ask clarifying questions.",
  },
  {
    question:
      "How can you structure feedback to be constructive and actionable?",
    answer:
      "Be specific, focus on behavior, and provide suggestions for improvement.",
  },
  {
    question: "Why are arrays important in JavaScript?",
    answer: "They allow storing and manipulating ordered collections of data.",
  },
  {
    question:
      "How do you concatenate arrays in JavaScript, and how do you join elements of an array into a string?",
    answer:
      "Use concat() to combine arrays and join() to create a string from array elements.",
  },
  {
    question:
      "What method is used to remove the first element of an array, and how can you add a new element to the start?",
    answer:
      "Use shift() to remove the first element and unshift() to add a new element.",
  },
  {
    question:
      "What is the difference between the forEach() and map() methods when iterating over arrays?",
    answer:
      "forEach() executes a function on each element, while map() returns a new array with the results.",
  },
  {
    question: "Explain how a callback function works within array methods.",
    answer:
      "A callback is a function passed as an argument to another function, executed for each array element.",
  },
  {
    question:
      "What method would you use to filter elements in an array based on a condition?",
    answer: "Use the filter() method.",
  },
  {
    question:
      "What is the difference between the some() and every() methods when working with arrays?",
    answer:
      "some() returns true if any element meets the condition, while every() requires all elements to meet it.",
  },
  {
    question:
      "Describe how the reduce() method can be used to aggregate data in an array.",
    answer:
      "reduce() applies a function to each element, accumulating a single output value.",
  },
  {
    question:
      "What is the difference between imperative and declarative programming styles?",
    answer:
      "Imperative specifies how to perform tasks; declarative specifies what outcome is desired.",
  },
  {
    question:
      "What is the difference between function declarations and function expressions in JavaScript?",
    answer:
      "Function declarations are hoisted; function expressions are not and require assignment before use.",
  },
  {
    question:
      "How does variable scope affect the accessibility of variables in functions?",
    answer:
      "Scope determines where a variable is accessible; local variables are confined to their function.",
  },
  {
    question: "What is variable shadowing, and how can it affect your code?",
    answer:
      "Shadowing occurs when a local variable has the same name as a global one, overriding it in scope.",
  },
  {
    question:
      "How do arrow functions differ from traditional functions in JavaScript?",
    answer:
      "Arrow functions have a shorter syntax and do not bind their own 'this' context.",
  },
  {
    question: "Explain the use of default parameters in functions.",
    answer:
      "Default parameters allow functions to initialize with default values if arguments are undefined.",
  },
  {
    question:
      "What is the difference between the spread and rest parameters in JavaScript?",
    answer:
      "Spread expands an array into individual elements; rest collects multiple elements into an array.",
  },
  {
    question:
      "How does hoisting affect the behavior of variables and functions in JavaScript?",
    answer:
      "Hoisting moves declarations to the top of the scope, allowing variables and functions to be used before declared.",
  },
  {
    question:
      "Why is using innerHTML sometimes discouraged, and what are the disadvantages?",
    answer:
      "innerHTML can lead to security risks with cross-site scripting and can override existing content.",
  },
  {
    question:
      "How do you create new elements using createElement() and createTextNode() in JavaScript?",
    answer:
      "Use createElement() for elements and createTextNode() for text, then append to the DOM.",
  },
  {
    question: "How can you add new elements to a webpage programmatically?",
    answer:
      "Use appendChild() or insertBefore() on a parent element to add new elements.",
  },
  {
    question:
      "What methods are available for moving and removing DOM elements?",
    answer:
      "Use appendChild(), removeChild(), and replaceChild() for manipulating elements.",
  },
  {
    question: "What is the purpose of template elements in HTML?",
    answer:
      "Templates hold HTML content to be cloned and inserted into the DOM without rendering initially.",
  },
  {
    question: "How are family relations represented in the DOM?",
    answer: "Elements are related as parent, child, or sibling nodes.",
  },
  {
    question:
      "What are some best practices for effectively using documentation while coding?",
    answer:
      "Read thoroughly, follow examples, and search for specific terms or functions.",
  },
  {
    question: "Why is it important to contribute to documentation in tech?",
    answer:
      "Contributing improves resources for others and strengthens community knowledge.",
  },
  {
    question:
      "How can you become a valuable contributor to the tech community?",
    answer:
      "Share knowledge, contribute to projects, and engage with others online.",
  },
  {
    question: "What are some tips for maintaining an effective GitHub profile?",
    answer:
      "Keep a clean code history, write meaningful README files, and engage with others' projects.",
  },
  {
    question: "What are the steps involved in resolving Git merge conflicts?",
    answer:
      "Identify conflicts, edit conflicting code, test, and commit the resolved changes.",
  },
  {
    question:
      "How do you revert a Git merge, and why might you need to do this?",
    answer:
      "Use git revert or git reset to undo a merge if it introduces issues or errors.",
  },
  {
    question:
      "Why is writing clear commit messages important, and what are some examples of good commit messages?",
    answer:
      "Clear messages explain changes; examples: 'Fix login bug' or 'Add search feature.'",
  },
  {
    question: "What is the purpose of git stash, and when would you use it?",
    answer:
      "git stash temporarily saves changes without committing, useful for switching branches.",
  },
  {
    question:
      "What steps can you take to set clear career goals in the tech industry?",
    answer:
      "Define your interests, research roles, set short- and long-term objectives.",
  },
  {
    question: "What are some effective job search strategies for tech roles?",
    answer:
      "Network, tailor applications, and utilize job boards like LinkedIn and GitHub.",
  },
  {
    question:
      "Why is having a job search strategy plan important, and how can it help you?",
    answer:
      "A strategy keeps you focused, organized, and aligned with your career goals.",
  },
  {
    question:
      "How can you prepare your resume and profile for a successful job application?",
    answer:
      "Highlight relevant skills, use action verbs, and tailor content to the role.",
  },
  {
    question:
      "What are some strategies to communicate effectively in a work environment?",
    answer:
      "Use active listening, be clear and concise, and ask clarifying questions.",
  },
  {
    question:
      "How can you structure feedback to be constructive and actionable?",
    answer:
      "Be specific, focus on behavior, and provide suggestions for improvement.",
  },
  {
    question: "Why are arrays important in JavaScript?",
    answer: "They allow storing and manipulating ordered collections of data.",
  },
  {
    question:
      "How do you concatenate arrays in JavaScript, and how do you join elements of an array into a string?",
    answer:
      "Use concat() to combine arrays and join() to create a string from array elements.",
  },
  {
    question:
      "What method is used to remove the first element of an array, and how can you add a new element to the start?",
    answer:
      "Use shift() to remove the first element and unshift() to add a new element.",
  },
  {
    question:
      "What is the difference between the forEach() and map() methods when iterating over arrays?",
    answer:
      "forEach() executes a function on each element, while map() returns a new array with the results.",
  },
  {
    question: "Explain how a callback function works within array methods.",
    answer:
      "A callback is a function passed as an argument to another function, executed for each array element.",
  },
  {
    question:
      "What method would you use to filter elements in an array based on a condition?",
    answer: "Use the filter() method.",
  },
  {
    question:
      "What is the difference between the some() and every() methods when working with arrays?",
    answer:
      "some() returns true if any element meets the condition, while every() requires all elements to meet it.",
  },
  {
    question:
      "Describe how the reduce() method can be used to aggregate data in an array.",
    answer:
      "reduce() applies a function to each element, accumulating a single output value.",
  },
  {
    question:
      "What is the difference between imperative and declarative programming styles?",
    answer:
      "Imperative specifies how to perform tasks; declarative specifies what outcome is desired.",
  },
  {
    question:
      "What is the difference between function declarations and function expressions in JavaScript?",
    answer:
      "Function declarations are hoisted; function expressions are not and require assignment before use.",
  },
  {
    question:
      "How does variable scope affect the accessibility of variables in functions?",
    answer:
      "Scope determines where a variable is accessible; local variables are confined to their function.",
  },
  {
    question: "What is variable shadowing, and how can it affect your code?",
    answer:
      "Shadowing occurs when a local variable has the same name as a global one, overriding it in scope.",
  },
  {
    question:
      "How do arrow functions differ from traditional functions in JavaScript?",
    answer:
      "Arrow functions have a shorter syntax and do not bind their own 'this' context.",
  },
  {
    question: "Explain the use of default parameters in functions.",
    answer:
      "Default parameters allow functions to initialize with default values if arguments are undefined.",
  },
  {
    question:
      "What is the difference between the spread and rest parameters in JavaScript?",
    answer:
      "Spread expands an array into individual elements; rest collects multiple elements into an array.",
  },
  {
    question:
      "How does hoisting affect the behavior of variables and functions in JavaScript?",
    answer:
      "Hoisting moves declarations to the top of the scope, allowing variables and functions to be used before declared.",
  },
  {
    question:
      "Why is using innerHTML sometimes discouraged, and what are the disadvantages?",
    answer:
      "innerHTML can lead to security risks with cross-site scripting and can override existing content.",
  },
  {
    question:
      "How do you create new elements using createElement() and createTextNode() in JavaScript?",
    answer:
      "Use createElement() for elements and createTextNode() for text, then append to the DOM.",
  },
  {
    question: "How can you add new elements to a webpage programmatically?",
    answer:
      "Use appendChild() or insertBefore() on a parent element to add new elements.",
  },
  {
    question:
      "What methods are available for moving and removing DOM elements?",
    answer:
      "Use appendChild(), removeChild(), and replaceChild() for manipulating elements.",
  },
  {
    question: "What is the purpose of template elements in HTML?",
    answer:
      "Templates hold HTML content to be cloned and inserted into the DOM without rendering initially.",
  },
  {
    question: "How are family relations represented in the DOM?",
    answer: "Elements are related as parent, child, or sibling nodes.",
  },
  {
    question:
      "What are some best practices for effectively using documentation while coding?",
    answer:
      "Read thoroughly, follow examples, and search for specific terms or functions.",
  },
  {
    question: "Why is it important to contribute to documentation in tech?",
    answer:
      "Contributing improves resources for others and strengthens community knowledge.",
  },
  {
    question:
      "How can you become a valuable contributor to the tech community?",
    answer:
      "Share knowledge, contribute to projects, and engage with others online.",
  },
  {
    question: "What are some tips for maintaining an effective GitHub profile?",
    answer:
      "Keep a clean code history, write meaningful README files, and engage with others' projects.",
  },
  {
    question: "What are the steps involved in resolving Git merge conflicts?",
    answer:
      "Identify conflicts, edit conflicting code, test, and commit the resolved changes.",
  },
  {
    question:
      "How do you revert a Git merge, and why might you need to do this?",
    answer:
      "Use git revert or git reset to undo a merge if it introduces issues or errors.",
  },
  {
    question:
      "Why is writing clear commit messages important, and what are some examples of good commit messages?",
    answer:
      "Clear messages explain changes; examples: 'Fix login bug' or 'Add search feature.'",
  },
  {
    question: "What is the purpose of git stash, and when would you use it?",
    answer:
      "git stash temporarily saves changes without committing, useful for switching branches.",
  },
  {
    question:
      "What steps can you take to set clear career goals in the tech industry?",
    answer:
      "Define your interests, research roles, set short- and long-term objectives.",
  },
  {
    question: "What are some effective job search strategies for tech roles?",
    answer:
      "Network, tailor applications, and utilize job boards like LinkedIn and GitHub.",
  },
  {
    question:
      "Why is having a job search strategy plan important, and how can it help you?",
    answer:
      "A strategy keeps you focused, organized, and aligned with your career goals.",
  },
  {
    question:
      "How can you prepare your resume and profile for a successful job application?",
    answer:
      "Highlight relevant skills, use action verbs, and tailor content to the role.",
  },
  //Cleaned under here but keeping everything until testing is conducted.

  {
    question:
      "What script tags are necessary to add React to an existing HTML page?",
    answer: "react.development.js, react-dom.development.js, and babel.min.js.",
  },
  {
    question: "What is the purpose of the ReactDOM.render() function?",
    answer: "To render JSX to the specified DOM element.",
  },
  {
    question: "Why is the babel.min.js script included when using JSX?",
    answer: "To translate JSX into standard JavaScript syntax.",
  },
  {
    question:
      "In ReactDOM.render(), what do the first and second parameters represent?",
    answer:
      "The first is the JSX to render, and the second is the DOM element to render into.",
  },
  {
    question: "How do you include JavaScript expressions within JSX code?",
    answer: "By placing them inside curly braces {}.",
  },
  {
    question:
      "In the example, what variable determines whether the button has been clicked?",
    answer: "The variable isClicked.",
  },
  {
    question:
      "What happens inside the renderAll() function when isClicked is set to true?",
    answer:
      "The text changes to 'It was clicked!' and the <div> class is set to 'active'.",
  },
  {
    question: "How is interactivity handled in the provided example code?",
    answer:
      "By adding a click event listener to update the state and re-render.",
  },
  {
    question: "What does the ternary operator ?: allow you to do in JSX?",
    answer:
      "It provides a shorthand for conditional rendering, similar to an if...else statement.",
  },
  {
    question: "What does JSX allow you to do that pure HTML does not?",
    answer:
      "Combine HTML-like syntax with JavaScript logic in the same code structure.",
  },
  // JSX: Basic Syntax
  {
    question: "Why are parentheses often used when writing JSX?",
    answer: "To separate code from layout for cleaner readability.",
  },
  {
    question: "How does the && operator work in JSX?",
    answer:
      "It conditionally renders JSX only if the condition before && is true.",
  },
  {
    question: "How do you assign CSS classes in JSX?",
    answer:
      "By using className instead of class, since class is a reserved JavaScript keyword.",
  },
  {
    question: "What style format is used in JSX when setting CSS styles?",
    answer:
      "Inline styles are written as JavaScript objects with camelCase property names.",
  },
  {
    question: "Why might px not be needed for certain style properties in JSX?",
    answer:
      "React automatically appends px to numeric values for some style properties.",
  },
  {
    question: "What is the purpose of a React fragment?",
    answer:
      "To wrap multiple elements without adding extra <div> tags to the DOM.",
  },
  {
    question:
      "How can you use React fragments without importing React.Fragment?",
    answer: "By using empty tags <>...</> as shorthand for fragments.",
  },
  {
    question: "How should self-closing tags like <img> be written in JSX?",
    answer: "With a trailing slash, e.g., <img />.",
  },
  {
    question: "When can you use self-closing syntax for tags in JSX?",
    answer:
      "When the tag has no content, such as <div /> instead of <div></div>.",
  },
  // JSX: Lists and Events
  {
    question:
      "What JSX method is commonly used to loop through arrays to display list items?",
    answer: "The map() method.",
  },
  {
    question:
      "Why is it important to use a key attribute for list items in JSX?",
    answer:
      "To uniquely identify each item and help React track changes, ensuring correct order during re-renders.",
  },
  {
    question:
      "In the example, which data field is used as the key for each message in the list?",
    answer: "message.id",
  },
  {
    question: "What does React do if list items lack unique keys?",
    answer:
      "React may reorder items incorrectly, potentially breaking the application, and it will show a console warning.",
  },
  {
    question:
      "How do event handlers like onClick differ in JSX compared to standard HTML?",
    answer:
      "Event handlers in JSX are camelCase (e.g., onClick) and refer to JavaScript functions directly.",
  },
  {
    question: "What does the onMouseEnter attribute do in JSX?",
    answer: "It triggers a function when the mouse enters the element’s area.",
  },
  {
    question:
      "Why must event handler functions be accessible within the scope of ReactDOM.render()?",
    answer:
      "So that JSX can reference and execute them when the associated events occur.",
  },
  {
    question:
      "Which JavaScript function is used in the example to handle a button click?",
    answer: "handleClick()",
  },
  {
    question: "How is map() typically used with JSX elements?",
    answer: "To generate and render a list of JSX elements from an array.",
  },
  {
    question: "Can JSX handle multiple event attributes on a single element?",
    answer:
      "Yes, multiple event attributes like onClick and onMouseEnter can be used on the same element.",
  },
  {
    question: "What is a prop in React?",
    answer:
      "A prop is an attribute passed to a React component, similar to an HTML attribute.",
  },
  {
    question: "How do you create a functional component in React?",
    answer:
      "By defining a JavaScript function that takes props as a parameter and returns JSX.",
  },
  {
    question:
      "Why should React components have names that start with uppercase letters?",
    answer:
      "To differentiate them from regular HTML tags, as React treats lowercase tags as HTML elements.",
  },
  {
    question:
      "In the example <User id='1' name='Gregory' />, what type of component is User?",
    answer: "A functional component.",
  },
  {
    question: "What does the children prop represent in React?",
    answer:
      "It represents any nested JSX passed to a component, allowing it to render child elements.",
  },
  {
    question: "How is props typically passed to a functional component?",
    answer: "As a single object containing all properties as key-value pairs.",
  },
  {
    question: "What does props.children contain if a component has nested JSX?",
    answer:
      "It contains the nested JSX, which can be other components, elements, or text.",
  },
  {
    question: "How does React use props behind the scenes?",
    answer:
      "It converts the passed attributes into a props object, which is then used by the component.",
  },
  {
    question:
      "What does the onClick={handleClick} attribute do in the component <CustomButton title='Click me!' onClick={handleClick} />?",
    answer: "It passes a click handler function as a prop to CustomButton.",
  },
  {
    question:
      "Can props.children be used to pass complex elements like entire forms or dialogs to components?",
    answer:
      "Yes, props.children can contain any JSX, including complex elements.",
  },
  // Lifecycle of Class Components
  {
    question:
      "What are the three main stages of a React class component's lifecycle?",
    answer: "Mounting, updating, and unmounting.",
  },
  {
    question:
      "Which lifecycle method is called right after a component is added to the DOM for the first time?",
    answer: "componentDidMount()",
  },
  {
    question: "What are the three ways a component can update?",
    answer: "Parent component re-renders, setState(), and forceUpdate().",
  },
  {
    question:
      "In which lifecycle method is it common to set up timers, fetch data from an API, or subscribe to events?",
    answer: "componentDidMount()",
  },
  {
    question:
      "Which lifecycle method is called right before a component is removed from the DOM, and is often used to clean up timers or subscriptions?",
    answer: "componentWillUnmount()",
  },
  {
    question:
      "What does the componentDidUpdate() lifecycle method allow you to do in a React class component?",
    answer: "Run code after re-rendering, often for side effects.",
  },
  {
    question:
      "Which method would you use to stop a timer when a component is removed from the DOM?",
    answer: "componentWillUnmount()",
  },
  {
    question:
      "In which lifecycle method would you call setState() to trigger a re-render right after the component has been added to the DOM?",
    answer: "componentDidMount()",
  },
  {
    question:
      "What is the purpose of the render() method in a React class component?",
    answer: "To define the component's structure and content (JSX output).",
  },
  {
    question:
      "What will happen if you call setState() inside componentDidUpdate() without any condition?",
    answer: "It will cause an infinite loop of re-rendering.",
  },
  // Class Components
  {
    question: "How do you define a class component in React?",
    answer: "By using class ComponentName extends React.Component.",
  },
  {
    question: "Where is the JSX code placed in a class component?",
    answer: "Inside the render() method.",
  },
  {
    question: "How is props accessed in a class component?",
    answer: "Using this.props since props is part of the class instance.",
  },
  {
    question:
      "What is the purpose of the constructor() method in a class component?",
    answer:
      "To initialize state and pass props to the parent class with super(props).",
  },
  {
    question: "How do you update the component’s state in a class component?",
    answer: "By calling this.setState().",
  },
  {
    question: "What does this.setState() do besides updating the state?",
    answer: "It triggers a re-render of the component with the updated state.",
  },
  {
    question:
      "Why are event handler methods like handleLike often defined as arrow functions in class components?",
    answer: "To retain the correct this context when used as event handlers.",
  },
  {
    question: "How do you disable a button in JSX conditionally?",
    answer:
      "By using the disabled attribute with a condition, e.g., disabled={this.state.rating > 0}.",
  },
  {
    question:
      "Before React Hooks, what was the main limitation of functional components?",
    answer: "They were 'stateless' and couldn’t manage state directly.",
  },
  {
    question:
      "What Hook introduced in React 16.8 allows functional components to be stateful?",
    answer: "The useState Hook.",
  },
  // The Virtual DOM
  {
    question: "What is JSX often described as in relation to React?",
    answer: "JSX is often described as 'syntactic sugar' for React.",
  },
  {
    question: "What primary function does JSX get transformed into?",
    answer: "JSX is transformed into React.createElement() calls.",
  },
  {
    question: "Why do we need Babel when working with JSX?",
    answer:
      "Babel transpiles JSX into React.createElement() calls, allowing it to work with JavaScript.",
  },
  {
    question:
      "What is the structure of an element created by React.createElement()?",
    answer:
      "An element created by React.createElement() is a JavaScript object containing the element type, props, and children.",
  },
  {
    question:
      "In the transpiled React code, what does the second argument of React.createElement() represent?",
    answer:
      "The second argument is an object containing the attributes and props for the element.",
  },
  {
    question: "How does React’s virtual DOM help improve performance?",
    answer:
      "React's virtual DOM minimizes real DOM operations by only making necessary updates, which speeds up performance.",
  },
  {
    question: "What is 'reconciliation' in React?",
    answer:
      "Reconciliation is the process of comparing the virtual DOM with the actual DOM to make efficient updates.",
  },
  {
    question:
      "What types of nodes are typically found in the children array of a React element?",
    answer:
      "The children array typically contains text strings, additional React.createElement() calls, or JavaScript expressions.",
  },
  {
    question:
      "What is the end result of the structure formed by React elements and their children?",
    answer:
      "The end result is a tree structure that represents the component hierarchy in the virtual DOM.",
  },
  {
    question:
      "How does React use document.createElement() during the initial render?",
    answer:
      "React uses document.createElement() to create real DOM elements based on the virtual DOM structure.",
  },
  // Dynamic Images
  {
    question:
      "Why is importing each image individually not practical in React with many images?",
    answer:
      "It leads to repetitive code; grouping images in an array is more efficient.",
  },
  {
    question: "What is the purpose of the data array in constants.js?",
    answer:
      "It stores animal names and their image paths for easier access in components.",
  },
  {
    question: "How does Vite handle relative paths to images?",
    answer:
      "It uses new URL('path', import.meta.url).href to create a full image URL.",
  },
  {
    question: "What does import.meta.url represent in Vite?",
    answer:
      "It represents the base URL of the current module for relative paths.",
  },
  {
    question: "How does find help select an image in the Animal component?",
    answer:
      "find searches the data array for a matching name property to selectedAnimal.",
  },
  {
    question: "What is the purpose of .href in new URL(...).href?",
    answer: ".href provides the complete URL string needed for the image src.",
  },
  {
    question: "What occurs if there is no matching image for selectedAnimal?",
    answer:
      "find returns undefined, which can lead to errors unless a default image is set.",
  },
  {
    question: "How can you set a default image in the Animal component?",
    answer: "Use || to assign a default object if find returns undefined.",
  },
  {
    question: "Why add an alt attribute to the <img> in Animal?",
    answer:
      "It improves accessibility and provides context if the image doesn’t load.",
  },
  {
    question:
      "What file structure is suggested for React projects in this lesson?",
    answer:
      "Organize components in components/, images in assets/animals/, and utilities in utils/constants.js.",
  },
  {
    question: "What does the useState hook return?",
    answer:
      "An array with the current state value and a function to update it.",
  },
  {
    question: "How do you initialize a state variable with useState?",
    answer: "Pass the initial value as an argument to useState.",
  },
  {
    question:
      "What is the purpose of the setter function returned by useState?",
    answer: "To update the state value and trigger a re-render.",
  },
  {
    question: "Why should useState not be used inside loops or conditionals?",
    answer: "Because it must be called in the same order every render.",
  },
  {
    question:
      "How do you update an array state without mutating the original array?",
    answer: "Use the spread operator to create a new array.",
  },
  {
    question: "Can useState manage multiple pieces of state in one component?",
    answer:
      "Yes, you can call useState multiple times for different state variables.",
  },
  {
    question: "Why is destructuring used with useState?",
    answer:
      "To assign meaningful names to the state value and setter function.",
  },
  {
    question: "What happens when you call the setter function from useState?",
    answer: "The component re-renders with the updated state.",
  },
  {
    question: "What types of values can be stored in useState?",
    answer: "Any data type, including numbers, strings, objects, and arrays.",
  },
  {
    question:
      "What is the main rule for the placement of useState in a component?",
    answer: "It should be placed only at the top level of the component.",
  },
  {
    question: "What are some potential career paths for a software engineer?",
    answer:
      "Software engineers can work in roles like front-end, back-end, full-stack development, DevOps, data science, and cybersecurity.",
  },
  {
    question:
      "Why might front-end development be an appealing path for someone interested in software engineering?",
    answer:
      "Front-end development is creative, visually engaging, and allows engineers to directly impact user experience.",
  },
  {
    question: "How do you add JavaScript to a webpage?",
    answer: "JavaScript is added using the <script> tag within HTML.",
  },
  {
    question:
      "What is the difference between null, undefined, and NaN in JavaScript?",
    answer:
      "null represents no value, undefined means a variable hasn’t been assigned, and NaN is 'Not-a-Number' for invalid math operations.",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answer: "Variables are declared using var, let, or const.",
  },
  {
    question: "What is the purpose of comments in code?",
    answer:
      "Comments explain code, improve readability, and help with debugging.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== compares values loosely, while === compares both value and type strictly.",
  },
  {
    question: "Write an example of an if...else conditional statement.",
    answer:
      "if (x > 10) { console.log('Greater'); } else { console.log('Smaller'); }",
  },
  {
    question: "When would you use a for loop instead of a while loop?",
    answer:
      "Use a for loop when you know the exact number of iterations in advance.",
  },
  {
    question: "How do logical operators like &&, ||, and ! work in JavaScript?",
    answer:
      "&& returns true if both conditions are true, || returns true if either condition is true, and ! negates the condition.",
  },
  {
    question: "How do you declare an array in JavaScript?",
    answer:
      "An array is declared with square brackets, e.g., const arr = [1, 2, 3];",
  },
  {
    question:
      "What method would you use to add an element to the end of an array?",
    answer: "Use the push() method to add an element to the end.",
  },
  {
    question:
      "Write a loop that iterates through an array and prints each element.",
    answer: "for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }",
  },
  {
    question: "How is an object different from an array in JavaScript?",
    answer:
      "Objects store key-value pairs, while arrays store ordered lists of values.",
  },
  {
    question:
      "What method can you use to remove the last element from an array?",
    answer: "Use the pop() method to remove the last element.",
  },
  {
    question: "Describe how you would create an array to store your own data.",
    answer:
      "Create an array with square brackets, like const myArray = ['item1', 'item2', 'item3'];",
  },
  {
    question: "What types of operations can you perform on arrays?",
    answer: "You can add, remove, search, and iterate over elements in arrays.",
  },
  {
    question: "How do you declare a function in JavaScript?",
    answer: "Use the function keyword, e.g., function myFunction() { ... }.",
  },
  {
    question: "What is the purpose of a function parameter?",
    answer:
      "Parameters allow functions to accept inputs and operate on different data.",
  },
  {
    question:
      "Write a function that takes two numbers as parameters and returns their sum.",
    answer: "function add(a, b) { return a + b; }",
  },
  {
    question: "What does the return keyword do in a function?",
    answer: "It outputs a value from the function and ends its execution.",
  },
  {
    question:
      "What is a modal, and why is it important in front-end development?",
    answer:
      "A modal is a pop-up window that focuses user attention on specific content.",
  },
  {
    question:
      "How would you implement a responsive modal using HTML, CSS, and JavaScript?",
    answer:
      "Use a div for the modal structure, style it with CSS for responsiveness, and control visibility with JavaScript.",
  },
  {
    question: "What are some strategies to approach solving coding challenges?",
    answer:
      "Break down the problem, write pseudocode, and test small parts first.",
  },
  {
    question: "Why is it beneficial to practice on platforms like Codewars?",
    answer: "It helps improve problem-solving skills and coding efficiency.",
  },
  {
    question: "What is the DOM, and why is it important in web development?",
    answer:
      "The DOM represents the structure of a webpage, allowing JavaScript to interact with HTML elements.",
  },
  {
    question: "How do you select an HTML element using JavaScript?",
    answer:
      "Use methods like document.getElementById() or document.querySelector().",
  },
  {
    question:
      "How can you update the content of an HTML element using JavaScript?",
    answer: "Set the element's innerHTML or textContent property.",
  },
  {
    question: "What is the purpose of the addEventListener method?",
    answer: "It attaches event handlers to elements for user interactions.",
  },
  {
    question: "How do you manipulate CSS classes through JavaScript?",
    answer: "Use element.classList methods like add(), remove(), or toggle().",
  },
  {
    question: "What is the event object, and how is it used in event handling?",
    answer:
      "The event object provides information about an event, like its type and target.",
  },
  {
    question:
      "What are some practical uses for manipulating the DOM in a project?",
    answer:
      "To update content dynamically, create interactive elements, and respond to user input.",
  },
  {
    question:
      "Describe how you would dynamically add HTML content to a webpage.",
    answer:
      "Use document.createElement() to create elements and appendChild() to add them.",
  },
  {
    question:
      "What are some techniques for managing your time effectively while working on software projects?",
    answer:
      "Use task prioritization, time blocking, and tools like Trello or Asana.",
  },
  {
    question: "How do you prioritize resources when working on multiple tasks?",
    answer:
      "Evaluate task urgency, set deadlines, and focus on high-impact tasks first.",
  },
  {
    question: "What is the purpose of the console.log() method in debugging?",
    answer:
      "It displays output in the console to help inspect variable values and program flow.",
  },
  {
    question:
      "What is the difference between a syntax error and a runtime error?",
    answer:
      "A syntax error occurs from invalid code structure, while a runtime error happens during code execution.",
  },
  {
    question:
      "How can you use the browser’s debugger to step through code execution?",
    answer:
      "Set breakpoints in the debugger, then step through code to inspect execution line-by-line.",
  },
  {
    question: "What does hypothesis-driven debugging involve?",
    answer:
      "It involves forming and testing specific assumptions about code behavior to locate bugs.",
  },
  {
    question: "What is the purpose of creating a branch in Git?",
    answer:
      "To work on separate features or fixes independently from the main codebase.",
  },
  {
    question: "How do you merge two branches in Git?",
    answer:
      "Use the git merge command to combine changes from one branch into another.",
  },
  {
    question: "What is the purpose of a pull request in Git?",
    answer:
      "It requests to merge changes from one branch into another, often reviewed by others first.",
  },
  {
    question:
      "What is the difference between let, const, and var in JavaScript?",
    answer:
      "var is function-scoped and hoisted, let is block-scoped and reassignable, and const is block-scoped and cannot be reassigned.",
  },
  {
    question:
      "How can you search for characters in a string using JavaScript methods?",
    answer: "Use methods like includes(), indexOf(), or match().",
  },
  {
    question:
      "Describe how you would convert a string to another format (e.g., to upper or lower case).",
    answer: "Use toUpperCase() or toLowerCase() string methods.",
  },
  {
    question: "What are some special numeric values in JavaScript?",
    answer: "Special values include Infinity, -Infinity, and NaN.",
  },
  {
    question: "How does the logical NOT (!) operator work in JavaScript?",
    answer: "It inverts a boolean value, turning true to false and vice versa.",
  },
  {
    question:
      "What is the difference between the logical OR (||) and AND (&&) operators?",
    answer:
      "|| returns true if any condition is true; && returns true only if all conditions are true.",
  },
  {
    question:
      "When would you use a switch-case statement instead of an if...else statement?",
    answer:
      "Use switch-case when checking a variable against multiple specific values.",
  },
  {
    question:
      "Explain how the ternary operator can be used to simplify conditional logic.",
    answer:
      "The ternary operator condenses an if...else statement into a single line: condition ? expr1 : expr2.",
  },
  {
    question:
      "What are some strategies to communicate effectively in a work environment?",
    answer:
      "Use active listening, be clear and concise, and ask clarifying questions.",
  },
  {
    question:
      "How can you structure feedback to be constructive and actionable?",
    answer:
      "Be specific, focus on behavior, and provide suggestions for improvement.",
  },
  {
    question: "What is the useEffect Hook?",
    answer:
      "A Hook that lets you perform side effects in functional components.",
  },
  {
    question: "When does useEffect run by default?",
    answer: "After every render of the component.",
  },
  {
    question: "How do you make useEffect run only once?",
    answer: "Provide an empty dependency array as the second argument.",
  },
  {
    question: "What does the dependency array in useEffect do?",
    answer: "It controls when the effect re-runs by tracking specific values.",
  },
  {
    question: "What happens if you omit the dependency array?",
    answer: "useEffect will run after every render of the component.",
  },
  {
    question: "How do you clean up effects in useEffect?",
    answer: "Return a cleanup function from the effect.",
  },
  {
    question: "Can you use multiple useEffect Hooks in a component?",
    answer:
      "Yes, you can use multiple useEffect Hooks to handle different effects.",
  },
  {
    question: "How do you make useEffect run when a specific value changes?",
    answer: "Add that value to the dependency array.",
  },
  {
    question: "What types of side effects is useEffect used for?",
    answer: "Data fetching, DOM updates, subscriptions, and timers.",
  },
  {
    question: "What does the cleanup function do?",
    answer: "It runs on unmount or before re-running the effect.",
  },
  {
    question: "What is an effect dependency?",
    answer:
      "A value that useEffect watches to determine when to re-run the effect.",
  },
  {
    question: "How do you specify dependencies for useEffect?",
    answer:
      "Pass an array of dependencies as the second argument to useEffect.",
  },
  {
    question: "What happens when a dependency changes?",
    answer: "The effect re-runs to reflect the updated dependency.",
  },
  {
    question: "What does an empty dependency array signify?",
    answer: "It indicates that the effect should run only once, on mount.",
  },
  {
    question: "How can you make an effect run on every render?",
    answer: "Omit the dependency array entirely.",
  },
  {
    question: "What should you include in the dependency array?",
    answer: "Any variables or props used inside the effect function.",
  },
  {
    question: "What are stale closures in the context of useEffect?",
    answer:
      "When an effect uses outdated variables because dependencies weren't specified.",
  },
  {
    question:
      "Why is it important to include state variables in the dependency array?",
    answer:
      "To ensure the effect re-runs when state changes, avoiding stale data.",
  },
  {
    question: "What happens if you list a function as a dependency?",
    answer: "The effect re-runs each time the function reference changes.",
  },
  {
    question: "How can you avoid unnecessary re-runs of an effect?",
    answer:
      "List only the necessary dependencies, not functions or values that don’t change.",
  },
  {
    question:
      "When should a variable be specified in an effect’s dependency array in React?",
    answer:
      "A variable should be specified in an effect's dependencies if we want the effect to receive this variable's updated value whenever it changes.",
  },

  {
    question: "What is 'use strict' in JavaScript?",
    answer:
      "'use strict' is a directive that enforces stricter parsing and error handling in JavaScript.",
  },
  {
    question: "Where can 'use strict' be applied?",
    answer: "'use strict' can be applied globally or to individual functions.",
  },
  {
    question:
      "What happens if you assign to an undeclared variable in strict mode?",
    answer:
      "Strict mode throws an error if you assign to an undeclared variable.",
  },
  {
    question: "Can strict mode catch common coding mistakes?",
    answer:
      "Yes, strict mode catches silent errors like assigning to read-only properties.",
  },
  {
    question: "Does strict mode allow the use of 'with' statements?",
    answer: "No, strict mode disallows the use of 'with' statements.",
  },
  {
    question: "What happens to 'this' in a function under strict mode?",
    answer:
      "'this' is undefined in functions not called as methods, instead of defaulting to the global object.",
  },
  {
    question: "Can strict mode be used in ES6 modules?",
    answer: "Yes, strict mode is enabled by default in ES6 modules.",
  },
  {
    question:
      "What does strict mode do to duplicate parameter names in functions?",
    answer:
      "Strict mode throws an error for functions with duplicate parameter names.",
  },
  {
    question: "Does strict mode allow deleting variables or functions?",
    answer:
      "No, strict mode throws an error when attempting to delete variables or functions.",
  },
  {
    question: "Can strict mode improve performance?",
    answer:
      "Yes, strict mode may improve performance as it enables optimizations in JavaScript engines.",
  },
  {
    question: "What is 'this' in JavaScript?",
    answer: "'this' refers to the context in which the function is executed.",
  },
  {
    question: "What does 'this' refer to in the global scope?",
    answer:
      "In non-strict mode, 'this' refers to the global object (window in browsers).",
  },
  {
    question: "What does 'this' refer to inside an object method?",
    answer: "'this' refers to the object that the method belongs to.",
  },
  {
    question:
      "What does 'this' refer to in a function declared inside a method?",
    answer: "It refers to the global object or undefined in strict mode.",
  },
  {
    question: "How does 'this' behave in arrow functions?",
    answer:
      "Arrow functions inherit 'this' from the surrounding lexical context.",
  },
  {
    question: "What does 'this' refer to in a constructor function?",
    answer: "'this' refers to the newly created instance of the object.",
  },
  {
    question: "How can you change the value of 'this' in a function?",
    answer: "You can change 'this' using call(), apply(), or bind().",
  },
  {
    question: "What does 'this' refer to in an event handler in the browser?",
    answer: "'this' refers to the DOM element that triggered the event.",
  },
  {
    question: "What is the value of 'this' in strict mode inside a function?",
    answer: "In strict mode, 'this' is undefined in standalone functions.",
  },
  {
    question:
      "What happens if 'this' is used inside a method and then passed to another function?",
    answer:
      "'this' loses its context and may refer to the global object unless explicitly bound.",
  },
  {
    question: "How do you permanently bind 'this' to a specific context?",
    answer:
      "You can use the bind() method to create a new function with 'this' bound.",
  },
  {
    question: "How is 'this' determined in a method passed as a callback?",
    answer:
      "It depends on how the callback is called; 'this' may be lost or changed.",
  },
  {
    question: "What does 'this' refer to in a class method?",
    answer: "'this' refers to the instance of the class.",
  },
  {
    question: "Can 'this' be reassigned?",
    answer:
      "No, but its value can be changed using call(), apply(), or bind().",
  },
  {
    question:
      "What does 'this' refer to in setTimeout or setInterval callbacks?",
    answer:
      "'this' refers to the global object unless the callback is an arrow function.",
  },
  {
    question:
      "How is 'this' determined when a function is called as a method of an object?",
    answer: "'this' refers to the object that the method is called on.",
  },
  {
    question:
      "What is the difference between call() and apply() when changing 'this'?",
    answer:
      "Both change 'this', but call() takes arguments individually, while apply() takes them as an array.",
  },
  {
    question: "How does 'this' behave in an object’s prototype method?",
    answer:
      "'this' refers to the object instance that calls the prototype method.",
  },
  {
    question: "How can 'this' cause problems in event listeners?",
    answer:
      "It may not refer to the expected object if the method loses its context.",
  },
  {
    question: "What is the value of 'this' inside a static method in a class?",
    answer: "'this' refers to the class itself, not an instance.",
  },
  {
    question: "How do you call an object method using dot notation?",
    answer:
      "By using the object name followed by the method name with parentheses.",
  },
  {
    question: "How do you call an object method using bracket notation?",
    answer:
      "By accessing the method using the object and method name as a string inside brackets.",
  },
  {
    question: "What happens if you call a method without parentheses?",
    answer: "The function reference is returned without being executed.",
  },
  {
    question:
      "Can you pass an object method as an argument to another function?",
    answer: "Yes, but 'this' may lose its context unless it's bound correctly.",
  },
  {
    question: "What is a method in the context of an object?",
    answer: "A function that is defined as a property of an object.",
  },
  {
    question: "What does 'this' refer to inside an object method?",
    answer: "'this' refers to the object that owns the method.",
  },
  {
    question: "How can you call a method dynamically using a variable?",
    answer:
      "Use bracket notation with the variable that contains the method name.",
  },
  {
    question: "What happens when a method is called on an undefined object?",
    answer:
      "A runtime error occurs because the method can't be accessed on undefined.",
  },
  {
    question: "How do you use call() to invoke an object method?",
    answer:
      "Use object.method.call(thisArg, arg1, arg2) to set 'this' to a specific context.",
  },
  {
    question: "Can an object method be added after the object is created?",
    answer:
      "Yes, by assigning a function to a new or existing property of the object.",
  },
  {
    question: "What is explicit binding in JavaScript?",
    answer:
      "Explicit binding allows us to manually set the value of 'this' using methods like call(), apply(), and bind().",
  },
  {
    question: "What does the call() method do?",
    answer:
      "call() invokes a function and explicitly sets 'this' to a provided value, with arguments passed individually.",
  },
  {
    question: "How is the apply() method different from call()?",
    answer:
      "apply() works like call(), but it takes arguments as an array instead of individually.",
  },
  {
    question: "What does the bind() method do?",
    answer:
      "bind() creates a new function with 'this' bound to a specific value, but does not immediately invoke it.",
  },
  {
    question: "How do you use call() to set 'this' in a function?",
    answer:
      "Invoke call() on the function and pass the desired 'this' value as the first argument.",
  },
  {
    question: "What is the difference between call() and bind()?",
    answer:
      "call() invokes the function immediately, while bind() returns a new function that can be invoked later.",
  },
  {
    question: "Can you pass additional arguments to call()?",
    answer:
      "Yes, call() accepts additional arguments after the first one, which are passed to the invoked function.",
  },
  {
    question: "How are arguments passed to apply()?",
    answer: "In apply(), arguments are passed as an array.",
  },
  {
    question: "What is the use case for apply() over call()?",
    answer:
      "apply() is useful when arguments are in an array or when you don't know the number of arguments in advance.",
  },
  {
    question: "How do you create a partially applied function using bind()?",
    answer:
      "Use bind() to pre-set some arguments, returning a new function that can be called with the remaining arguments.",
  },
  {
    question: "What is 'this' inside a function when using call()?",
    answer:
      "'this' refers to the value explicitly provided as the first argument to call().",
  },
  {
    question: "What does bind() return?",
    answer:
      "bind() returns a new function with 'this' bound to the specified value.",
  },
  {
    question: "Can you use call() or apply() with methods from other objects?",
    answer:
      "Yes, call() and apply() allow you to borrow methods from one object and use them on another.",
  },
  {
    question:
      "What happens when call() is used on a function without arguments?",
    answer:
      "The function is invoked with 'this' set to the provided value, but no additional arguments are passed.",
  },
  {
    question: "Can apply() handle an indefinite number of arguments?",
    answer:
      "Yes, since apply() accepts an array, it can handle any number of arguments within that array.",
  },
  {
    question: "What happens if no arguments are passed to call() or apply()?",
    answer:
      "'this' will default to the global object (window in browsers) or be undefined in strict mode.",
  },
  {
    question: "What is function borrowing using call() or apply()?",
    answer:
      "Function borrowing allows you to use a method from one object on another by explicitly setting 'this'.",
  },
  {
    question: "How does bind() affect the original function?",
    answer:
      "bind() does not change the original function; it returns a new function with a specific 'this' value.",
  },
  {
    question:
      "Can you pass arguments when invoking a function created with bind()?",
    answer:
      "Yes, you can pass additional arguments when calling the function returned by bind().",
  },
  {
    question: "Why is bind() useful in event handling?",
    answer:
      "bind() is useful in event handling to ensure that 'this' refers to the desired context, like an object instance.",
  },
  {
    question: "What is the purpose of the new operator in JavaScript?",
    answer:
      "The new operator creates an instance of a user-defined object or one of the built-in object types.",
  },
  {
    question: "What does the new operator return?",
    answer:
      "It returns a newly created object, which is an instance of the constructor function.",
  },
  {
    question: "What are the steps performed by the new operator?",
    answer:
      "It creates a new object, sets its prototype, binds 'this', and returns the object.",
  },
  {
    question: "How does new set the prototype of the object?",
    answer:
      "It sets the prototype of the new object to the constructor function's prototype property.",
  },
  {
    question: "What happens to 'this' inside the constructor when using new?",
    answer:
      "'this' refers to the newly created object inside the constructor function.",
  },
  {
    question:
      "What happens if a constructor function explicitly returns an object?",
    answer:
      "The object explicitly returned by the constructor replaces the default object created by new.",
  },
  {
    question: "What if the constructor returns a primitive value?",
    answer:
      "The primitive return value is ignored, and the newly created object is returned instead.",
  },
  {
    question: "Can the new operator be used with built-in constructors?",
    answer:
      "Yes, it can be used with built-in constructors like Object, Array, or Date.",
  },
  {
    question:
      "What does the new operator do to the constructor function's prototype?",
    answer:
      "It assigns the constructor's prototype to the __proto__ of the new object.",
  },
  {
    question: "Why is the new operator necessary in object creation?",
    answer:
      "It ensures the correct prototype chain and allows constructors to initialize objects with properties and methods.",
  },
  {
    question: "What is an arrow function in JavaScript?",
    answer:
      "An arrow function is a shorthand way to write a function expression using the '=>' syntax.",
  },
  {
    question:
      "How do arrow functions differ from regular functions in terms of 'this'?",
    answer:
      "Arrow functions don't have their own 'this'; they inherit 'this' from the surrounding scope.",
  },
  {
    question: "Can arrow functions be used as constructors?",
    answer:
      "No, arrow functions cannot be used as constructors and will throw an error if used with 'new'.",
  },
  {
    question: "What is the syntax for a simple arrow function?",
    answer:
      "The syntax is: `(parameters) => expression`. For example, `(a, b) => a + b`.",
  },
  {
    question: "What happens when you omit parentheses for a single parameter?",
    answer:
      "If there is only one parameter, the parentheses are optional. Example: `x => x * 2`.",
  },
  {
    question:
      "What happens when you omit the curly braces in an arrow function?",
    answer:
      "If curly braces are omitted, the function has an implicit return of the expression after the arrow.",
  },
  {
    question: "Can arrow functions have default parameters?",
    answer:
      "Yes, arrow functions can have default parameters just like regular functions. Example: `(x = 10) => x * 2`.",
  },
  {
    question: "How do arrow functions handle rest parameters?",
    answer:
      "Arrow functions can use rest parameters, just like regular functions. Example: `(...args) => args.length`.",
  },
  {
    question:
      "Can arrow functions have a return statement inside curly braces?",
    answer:
      "Yes, if you use curly braces, you need to explicitly return a value with the return statement.",
  },
  {
    question: "What happens to the 'arguments' object in arrow functions?",
    answer:
      "Arrow functions do not have their own 'arguments' object; they inherit it from the surrounding scope.",
  },
  {
    question: "Are arrow functions hoisted like regular functions?",
    answer:
      "No, arrow functions behave like function expressions and are not hoisted.",
  },
  {
    question: "Can you use an arrow function as a method inside an object?",
    answer:
      "Arrow functions can be used as methods, but 'this' will not refer to the object, which can lead to unexpected behavior.",
  },
  {
    question: "What is the benefit of arrow functions in callbacks?",
    answer:
      "Arrow functions simplify the syntax in callbacks and eliminate the need to bind 'this'.",
  },
  {
    question: "Can arrow functions be used with async/await?",
    answer:
      "Yes, arrow functions can be used with async/await to simplify asynchronous code.",
  },
  {
    question: "What is a common use case for arrow functions?",
    answer:
      "Arrow functions are commonly used in array methods like map, filter, and reduce for shorter syntax.",
  },
  {
    question:
      "What happens if you use the 'this' keyword inside an arrow function?",
    answer:
      "'this' inside an arrow function refers to the 'this' of the enclosing lexical scope, not the function itself.",
  },
  {
    question: "Can arrow functions have multiple lines of code?",
    answer:
      "Yes, you can use curly braces for a block body, but you must explicitly return a value.",
  },
  {
    question: "Can arrow functions have destructured parameters?",
    answer:
      "Yes, arrow functions can accept destructured parameters. Example: `({a, b}) => a + b`.",
  },
  {
    question: "How are arrow functions different in terms of prototype?",
    answer:
      "Arrow functions don't have a 'prototype' property because they are not meant to be used as constructors.",
  },
  {
    question: "Can arrow functions be anonymous?",
    answer:
      "Yes, arrow functions can be anonymous and are often used as inline callbacks.",
  },
  {
    question:
      "What does the 'this' keyword refer to when a function is called with the 'new' operator?",
    answer: "'this' is bound to the newly created object.",
  },
  {
    question:
      "How does 'this' behave when a function is called using 'call()' or 'apply()'?",
    answer: "'this' is bound to the object passed to these methods.",
  },
  {
    question: "What happens when 'bind()' is used in relation to 'this'?",
    answer: "'this' is bound to the object passed to 'bind()'.",
  },
  {
    question: "What is the 'this' binding when calling a method on an object?",
    answer: "'this' refers to the object whose method is being called.",
  },
  {
    question:
      "What does 'this' default to in strict mode when none of the binding rules apply?",
    answer: "'this' is 'undefined' in strict mode.",
  },
  {
    question:
      "What does 'this' default to in sloppy mode when none of the binding rules apply?",
    answer: "'this' refers to the global 'window' object in sloppy mode.",
  },
  {
    question: "How is 'this' bound in an arrow function?",
    answer:
      "In an arrow function, 'this' is bound to the context in which the function is declared.",
  },
  {
    question: "When is 'this' in an arrow function set?",
    answer:
      "'this' is set when the arrow function is declared, not when it is invoked.",
  },
  {
    question: "Why can 'this' be confusing for even experienced engineers?",
    answer:
      "'this' behaves differently depending on how a function is called, which can lead to unexpected results.",
  },
  {
    question: "What is the first rule of 'this' binding priority?",
    answer:
      "If a function is called with the 'new' operator, 'this' is bound to the newly created object.",
  },
  {
    question:
      "What happens to 'this' when a function is invoked using an object's method?",
    answer: "'this' refers to the object that owns the method being called.",
  },
  {
    question:
      "How does 'this' behave in global execution context in sloppy mode?",
    answer: "In sloppy mode, 'this' refers to the global 'window' object.",
  },
  {
    question:
      "What is the default value of 'this' in strict mode, when no specific binding applies?",
    answer: "In strict mode, 'this' is 'undefined'.",
  },
  {
    question:
      "Why might junior developers struggle to explain how 'this' works?",
    answer:
      "The behavior of 'this' is complex and varies based on how a function is invoked, making it difficult for less experienced developers to grasp.",
  },
  {
    question: "How can the value of 'this' be defined correctly?",
    answer:
      "The value of 'this' can be defined by examining the function's call site and how the function is invoked.",
  },
  {
    question:
      "In what situation does 'this' not follow the standard four binding rules?",
    answer:
      "Arrow functions do not follow the standard four binding rules, as 'this' is bound when the function is declared.",
  },
  {
    question: "What is the second rule in determining 'this' binding?",
    answer:
      "If a function is called using 'call()', 'apply()', or 'bind()', 'this' is bound to the object passed to these methods.",
  },
  {
    question:
      "What is the key difference between arrow functions and regular functions in terms of 'this'?",
    answer:
      "In arrow functions, 'this' is bound at declaration, while in regular functions, 'this' is determined when the function is invoked.",
  },
  {
    question: "How can understanding 'this' help a JS programmer grow?",
    answer:
      "Understanding how 'this' works is crucial to writing correct and efficient JavaScript code, especially in more advanced projects.",
  },
  {
    question:
      "What should you do if you're not fully confident with how 'this' works?",
    answer:
      "Keep practicing and remember that even experienced developers can find 'this' tricky; mastery comes with time and experience.",
  },
  {
    question: "What must be done to render an array of elements in React?",
    answer:
      "You must iterate with the map() method, provide a unique key property to each element, and wrap the rendered JSX in a single tag.",
  },
  {
    question:
      "What is the difference between imperative and declarative programming in React?",
    answer:
      "Imperative programming involves explicitly defining each step to achieve a result, while declarative programming focuses on describing the desired outcome, and React handles the steps behind the scenes.",
  },
  {
    question: "Why is React considered a declarative framework?",
    answer:
      "React is declarative because it allows developers to define what the UI should look like based on the state, and React updates the DOM automatically to reflect changes, without manual DOM manipulation.",
  },
  {
    question: "When would you use an imperative approach in React?",
    answer:
      "An imperative approach is used in React when interacting with the DOM directly, such as focusing an input or scrolling to an element, often achieved through refs.",
  },
  {
    question: "How do React hooks like useRef enable imperative programming?",
    answer:
      "'useRef' allows access to DOM elements directly, enabling imperative commands like focus, scroll, or manipulate elements without triggering re-renders.",
  },
  {
    question: "What is an example of declarative programming in React?",
    answer:
      "Using JSX to describe how the UI should look based on the component’s state is an example of declarative programming in React.",
  },
  {
    question: "What is the purpose of a `.gitignore` file?",
    answer:
      "A `.gitignore` file tells Git which files or directories to ignore and not track in version control.",
  },
  {
    question: "How do you create a `.gitignore` file?",
    answer:
      "Create a file named `.gitignore` in the project’s root directory and list the files or patterns to ignore.",
  },
  {
    question:
      "Can you stop tracking a file already committed by adding it to `.gitignore`?",
    answer:
      "No, you must untrack it using `git rm --cached <file>` first, then add it to `.gitignore`.",
  },
  {
    question: "How do you ignore all files of a certain type in a project?",
    answer:
      "Add the file extension to `.gitignore`, for example, `*.log` to ignore all log files.",
  },
  {
    question: "What should you do if your `.gitignore` contains wrong entries?",
    answer:
      "Update the `.gitignore` file, stage the changes, and commit it again.",
  },
];
