import { FaUnderline } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function About() {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <br/>
            <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">Youtube Tutorial</a>
            <br/>
            <a href="https://github.com/bradtraversy/react-crash-2021/blob/master/src/components/Task.js">Referenced Repository</a> 
            <br/>
            <br/>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
