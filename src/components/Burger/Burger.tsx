import React from 'react'
type Props = {
    click: boolean
}
const Burger = ({ click }: Props) => {
    return(
        <div id="nav-icon" className={click ? 'open' : null} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger