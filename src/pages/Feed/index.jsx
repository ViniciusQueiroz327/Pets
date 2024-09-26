//import { Link } from "react-router-dom"

import { Stories } from '../../components/Stories'

import { FeedWrapper } from './style'

const Feed = () => {
    return (<>
        <FeedWrapper>
            <Stories />
        </FeedWrapper>
    </>)
}

export { Feed }