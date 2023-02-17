// Components
import Error from '../components/Global/Error/Error'

/**
 * 404: Page not found
 */
export default function Custom404() {
  const errorProps = {
    title: '404: Page not found',
    body: 'Oopsie, woopsies! The page you are looking for does not exist.',
  }

  return <Error title={errorProps.title} body={errorProps.body} />
}
