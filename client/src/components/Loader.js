import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
    return (
        <div className="mt-5">
            <Spinner className="mt-5" animation="border" role="status" style={{width:'100px' , height : '100px'}}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
