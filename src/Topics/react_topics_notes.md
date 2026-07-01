# React Topics
# SYNTHETIC EVENT used by the react


1. JsX_Expression
jsx helps to wwrite the javascript in html which is used to access the javasript variable in html content

2. JSX Rules
   We can't declare js variables but we can acccess it
   we can't use use conditional statement like if else switch
   we can't use loop like for while , do while for in, for of,
2. Props (Properties)
Sending data from parent component to chile components

<Component propName=propValue/>
key value pair

any data type can be send as propvalue

Declarative
imperative

direct destrructure on the component props like const component = ({name})=> { return ( <div> my name is {name.toUpperCase()})}

can give default value const component = ({name="Default value"})=> 

child can not reinitialize the prop

3. Based on the condition which component needs to show is known as conditional rendering
conditional rendering
1. ternary operator (condition? true: false)
2. short circuit logical AND (condition && true)
3. nulish operator ( condition ?? true)  // the condition need to be null value or undefined value
4. optional chaining(?);
5. short circuit logical OR(variavle = true || default  value)



rest and spread
modules named and default
destructuring array and object
shallow copy and deep copy 
stack and heap
spa and mpa

react js 

installation
folder structure
how react works  vdom  and reconcilation process
CBA component based architecture
component types of component 
jsx 
jsx_expression rules
truthy value and falshy value array and aobject
props default and normal
conditionnal rendering
fragments
hooks predefined javascript functionality


feature:
SPA
CBA
Vdom
JSX
Oneway data binding 
Declarative due to hooks




# Props Drilling


# HOC 
A Higher-Order Component (HOC) is an advanced pattern in React for reusing component logic. Concretely, an HOC is a pure function that takes a component as an argument and returns a new, enhanced component.