import * as React from 'react'
import PropTypes from 'prop-types'
import { blueText } from './greetings.module.css'

const Greeting = (props) => {
    return (
        <p className={blueText}>From Greetings component: prop value: {props.name}</p>
    )
}

Greeting.propTypes = {
    name: PropTypes.string,
}

export default Greeting;