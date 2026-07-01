import React from 'react'
import Card from './Card';
import Title from './Title';

const Hoc = () => {
  return (
    
    <div>
        {/* A Higher-Order Component (HOC) is an advanced pattern in React for reusing component logic. Concretely, an HOC is a pure function that takes a component as an argument and returns a new, enhanced component.
        Hoc */}
        <Card/><hr/>
        <Title color="red" visibility="true">
            <Card/>
        </Title>
        <hr/>
        <Card/>
    </div>
  )
}

export default Hoc;