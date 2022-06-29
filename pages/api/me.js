
import auth0 from './utils/auth0'

const me = async () => {
  try {
    await auth0.handleProfile(req, res)
  } catch (error) {
    console.error(error)
    const errorMessage =
      error instanceof Error ? error.message : 'Internal server error'
    res.status(500).end(errorMessage)
  }
}

export default me