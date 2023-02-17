// Components
import Error from '../components/Global/Error/Error'

/**
 * 500: Server error
 */
export default function Custom500() {
  const errorProps = {
    title: '500: Server-side error occurred',
    body: 'Oopsie, woopsies! Something went wrong on our end.',
  }

  return <Error title={errorProps.title} body={errorProps.body} />
}
