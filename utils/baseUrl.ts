const baseUrl = process.env.NODE_ENV === 'production'
  ? 'http://deployment-url.now.sh'
  : 'http://localhost:3000'

export default baseUrl;