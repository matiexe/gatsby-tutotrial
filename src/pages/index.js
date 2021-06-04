import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage =()=>{
  return(
    <main>
      <title>Home Page</title>
      <h1>Welcome to my gatsby site!</h1>
      <Link to ="/about">About me</Link>
      <p>I' m making  this by following the Gatsb Tutorial.</p>
    </main>
  )
}


export default IndexPage