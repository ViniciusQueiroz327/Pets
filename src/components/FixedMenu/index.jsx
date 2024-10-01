import { Link } from "react-router-dom"

import { ActionButton, MenuWrapper } from './style'

import { FaHome, FaSearch, FaUser } from 'react-icons/fa'

const FixedMenu = ({isVisible}) => {

  return (
    <MenuWrapper $isVisible={isVisible}>
        <ActionButton><Link to='/Feed'><FaHome style={{ color: '#000000' }}/></Link></ActionButton>
        <ActionButton><Link to='/Search'><FaSearch style={{ color: '#000000' }}/></Link></ActionButton>
        <ActionButton><Link to='/Profile'><FaUser style={{ color: '#000000' }}/></Link></ActionButton>
    </MenuWrapper>
  )
}

export { FixedMenu }

