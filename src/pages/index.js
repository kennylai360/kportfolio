import * as React from 'react'
import Button from '@mui/material/Button';
import Greeting from '../common/components/greetings';
import { Link } from 'gatsby'


const IndexPage = () => {

  return (
    <>
      <Button variant="contained">Hello World!</Button>
      <Link to='about'>About</Link>
      <Greeting name='Kenny'></Greeting>
      <Greeting name='Kristy'></Greeting>
    </>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage

