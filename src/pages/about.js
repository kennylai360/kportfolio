import * as React from 'react'
import Layout from '../common/components/layout'

const About = () => {
    return (
    <Layout pageTitle="About page">
        <p>This is loaded from the about page</p>
    </Layout>
    )
}

export const Head = () => <title>About</title>

export default About;