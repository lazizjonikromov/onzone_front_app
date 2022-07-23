import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const MyCards = () => {
    return (
        <>
            <h2>Mening kartalarim</h2>

            <div id="addBtn" className="cards">
                <div className="plus"><FontAwesomeIcon icon={faPlus} /></div>
                <h3>Karta qoʻshish</h3>
            </div>
        </>
    )
}

export default MyCards
