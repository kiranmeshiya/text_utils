import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function Alertarea(props) {

  const capitalize = (word) =>
  {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    props.alert &&
    <div>
     
      <Alert  variant={props.alert.type}>
         <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </Alert>
    </div>
  )
}
