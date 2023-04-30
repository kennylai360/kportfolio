import * as React from 'react'
import Layout from '../common/components/layout';


const IndexPage = () => {

  return (
    <Layout pageTitle="Home page">
      <p>This is a page from the index.js file.</p>
    </Layout>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage

