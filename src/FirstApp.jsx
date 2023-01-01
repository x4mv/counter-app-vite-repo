import PropTypes from 'prop-Types'

export const FirstApp = ( {title, subtitle} ) => {

  
if (!title) {
  throw new Error('El titulo no existe');
}

  return (
    <>
    <h1 data-testid="test-title">{ title }</h1>
    <p>{ subtitle }</p>
    <p>{ subtitle }</p>
    <p>{ subtitle }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.any
}

FirstApp.defaultProps = { 
  // title: 'No hay titulo', 
  subtitle: 'El es un estudiante de la UNA'
}