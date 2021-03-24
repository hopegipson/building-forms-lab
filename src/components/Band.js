import React from 'react'

const Band = props => {
    console.log(props.text.text)
  return (
    <li>{props.text.text}</li>
  );
};

export default Band; 