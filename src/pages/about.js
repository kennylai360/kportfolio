import * as React from 'react'
import { Link } from 'gatsby'

const About = () => {
    return (
    <main>
        <h1>About</h1>
        <Link to='/'>Home</Link>
    </main>
    )
}

export const Head = () => <title>About</title>

export default About;