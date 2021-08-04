import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Error = ({error}) => {
    return (
        <div>
            <Alert  variant="warning">
                {error}
            </Alert>
        </div>
    )
}

export default Error
