import React from 'react'
import { useParams } from 'react-router-dom'

function Contact() {
  const params = useParams();
  console.log(params);
  return (
    <>
        <h1>Contact us </h1>
    </>
  )
}

export default Contact