import ApolloClient from "apollo-boost"

const POKEMON_API = 'https://pokemon-samdavies.stylindex.now.sh/'
const client = new ApolloClient({
    uri: `${POKEMON_API}`
})

export default client
