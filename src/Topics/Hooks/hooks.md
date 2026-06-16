# what is hooks in react.js 
Hooks are nothing but javascript predefined function.

# Types of hooks
There are 2 types of hooks in react js
1. Predefined Hooks
2. Custom Hooks

# Rules of hooks
1. Always hoos prefix with 'use' word
2. Hooks are always need to call at the top level of the component

# 1. Predefined hooks
1. useState()
    a. it is used to manage the state inside a component
    ex - it helps to store the data and update the data dynamically
    b. this hook always returns an array having two values 
    c. first value is initial value  2nd value is a function to update the initial value

    const [initial values, update function] = useState(initial value )
2. 

once updated it will rerender the component 
if directly call the use state function then it will stuck in a infinite loop and react will terminate the program
if parent is rerender child will rerender
if child is render then parent won't effect

# use state task

data = await fetch(api.github.com/users)
