import React from 'react'
import './Card.css'

export const Card: React.FC = () => {
    return (
        <>
            <div className="card">
                <img alt="Avatar" />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
            </div>
        </>
    )
}


