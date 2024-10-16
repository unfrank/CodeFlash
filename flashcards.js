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

  // Functional Components and Props
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
];
