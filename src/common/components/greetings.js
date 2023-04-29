import * as React from 'react'
import PropTypes from 'prop-types'

const Greeting = (props) => {
    return (
        <p>From Greetings component: prop value: {props.name}</p>
    )
}

Greeting.propTypes = {
    name: PropTypes.string,
}

export default Greeting;