import React from 'react'
import PropTypes from 'prop-types';

export const FirstApp = ( {title, subtitle} ) => {

    

    return (
        <> 
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
  )
}


// Show the usage of your component by setting property types
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

// If there are no speficication on the props, use these defaults
FirstApp.defaultProps = {
    subtitle: 'There is no subtitle',
}