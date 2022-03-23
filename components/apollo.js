// Framework
import React, { useContext } from 'react'
import { ApolloClient, ApolloLink, ApolloProvider, createHttpLink, InMemoryCache, useMutation, gql } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { userStore } from '../contexts/userContext'

// Context
import { authContext } from '../contexts/authContext'

// Rendered Component
const Apollo = ({ children }) => {

    // Context
    const { auth, authTimer, refresh } = useContext(authContext)

    // HttpLink
    const httpLink = createHttpLink({
        uri: 'https://pt.neffrey.com/graphql'
    })
    // Auth Header Middleware
    const authMiddleware = setContext((_, { headers }) => {
        const timer1 = new Date()
        if( auth && new Date() < authTimer ) {
            console.log( "Apollo: Yes authToken", auth )
            return {
                headers: {
                    ...headers, 
                    authorization: `Bearer ${ auth }`
                }
            }
        }
        else {
            console.log( "Apollo: No authToken", auth )

            return {
                headers: {
                    ...headers, 
                    authorization: ""
                }
            }
        }
    })
    // Client
    const client = new ApolloClient({
        cache: new InMemoryCache({}),
        link: authMiddleware.concat(httpLink)
    })


    // Render
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
export default Apollo