import React from 'react'

interface Props
{
    children:string;
    color: string;
    onClick: () => void;
}

const Button = (props:Props) => {
  return (
    <button className={'btn btn' + props.color} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button