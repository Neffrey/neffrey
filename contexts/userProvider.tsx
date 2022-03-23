// Framework
import React, { createContext, useState } from "react";

// Context Type
interface UserContext {
  loginUser: () => void;
  logoutUser: () => void;
  userId: string;
  userErrorMsg?: string;
  userName?: string;
}
// Context Default State
const defaultState = {
  loginUser: () => {},
  logoutUser: () => {},
  userId: "",
  userErrorMsg: "",
  userName: "",
};

export const UserContext = createContext<UserContext>(defaultState);

// USER Context Component
const UserContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  // State Vars
  const [userErrorMsg, setUserErrorMsg] = useState(defaultState.userErrorMsg);
  const [userId, setUserId] = useState(defaultState.userId);
  const [userName, setUserName] = useState(defaultState.userName);
  //   const [userEmail, setUserEmail] = useState("");
  //   const [userFirstName, setUserFirstName] = useState("");
  //   const [userRoles, setUserRoles] = useState([]);

  // User Funcs
  const loginUser = () => {
    setUserId("12345");
    setUserName("Neffrey");
  };
  const logoutUser = () => {
    setUserId("");
    setUserName("");
  };

  return (
    <UserContext.Provider
      value={{ loginUser, logoutUser, userId, userErrorMsg, userName }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;

// ************* OLD Context ********************//
// // Framework
// import React, { createContext, useContext, useState } from 'react'
// import { useRouter } from 'next/router'
// import { ApolloClient, ApolloLink, ApolloProvider, createHttpLink, InMemoryCache, useMutation, useQuery,  gql } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'

// // GQL
// import { USER_LOGIN } from '../gql/userLogin'
// import { REFRESH_TOKENS } from '../gql/refreshTokens'
// import { CURRENT_VIEWER } from '../gql/currentViewer'

// // Import Context & Store Objects
// import { userStore } from '../contexts/authContext'
// import { authContext } from '../contexts/authContext'

// // Create User Context
// export const userContext = createContext({})

// // USER Context Component
// const userContextProvider = ({ children }) => {
//     // Router
//     const router = useRouter()

//     // AuthContext
//     const { auth, setAuth, authTimer, setAuthTimer, refresh, setRefresh } = useContext(authContext)

//     // GQL
//     const [ userLoginMutation ] = useMutation(USER_LOGIN)
//     const [ refreshTokensMutation ] = useMutation(REFRESH_TOKENS)
//     //const { loading, error, data } = useQuery(CURRENT_VIEWER)

//     // Default Auths & Timers

//     // State Vars
//     const [ userErrorMsg, setUserErrorMsg ] = useState("")
//     const [ userId, setUserId ] = useState("")
//     const [ userEmail, setUserEmail ] = useState("")
//     const [ userName, setUserName ] = useState("")
//     const [ userFirstName, setUserFirstName ] = useState("")
//     const [ userRoles, setUserRoles ] = useState([])

//     // Context Actions
//     // Create Timer
//     const createTimer = ( time, minutes = 3 ) => {
//         time = new Date( time )
//         return new Date( time.setMinutes( time.getMinutes() + minutes ))
//     }

//     // Check User Status
//     const checkUserStatus = () => {
//         const currentTime = new Date( Date.now( ))

//         console.log("checkUserStatus: UserAuth", auth ? auth : "NULL" )
//         console.log("checkUserStatus: UserAuthTimer", authTimer ? authTimer : "NULL" )
//         console.log("checkUserStatus: CurrentTime", currentTime ? currentTime : "NULL" )
//         console.log("checkUserStatus: LogicTest", currentTime < authTimer )

//         // Not logged in at all
//         if( !auth ) {
//             console.log("checkUserStatus: 0 - Not logged in at all")
//             return null
//         }

//         // Active login
//         else if ( auth && authTimer && currentTime < authTimer  ) {
//             console.log("checkUserStatus: 1 - Active login")
//             return "active"
//         }

//         // Stale login
//         else if ( auth && refresh && authTimer && currentTime > authTimer  ) {
//             refreshTokens( refresh )
//             console.log("checkUserStatus: 2 - Stale login")
//             return "stale"
//         }

//         // Error
//         else {
//             console.log("checkUserStatus: 3 - Error")
//             //logout()
//             setUserErrorMsg("There was error while connecting to your account. Please refresh the page and try again.")
//             return "error"
//         }

//     }

//     // Login Func
//     const login = ({ email, password, remember }) => {

//         // Mutation
//         userLoginMutation({ variables: { username: email, password: password }}).then(
//             // Mutation Success
//             resolve => {
//                 // Current Time
//                 const currentTime = new Date( Date.now( ))

//                 // Set User States
//                 setUserId( resolve.data.login.user.id )
//                 setAuthTimer( createTimer( currentTime ))
//                 setAuth( resolve.data.login.user.jwtAuthToken )
//                 setRefresh( resolve.data.login.user.jwtRefreshToken )
//                 setUserEmail( resolve.data.login.user.email )
//                 setUserFirstName( resolve.data.login.user.firstName )
//                 setUserName( resolve.data.login.user.username )
//                 setUserRoles( resolve.data.login.user.roles )

//                 // Store in Local Storage
//                 // Auth
//                 userStore.set( 'auth', resolve.data.login.user.jwtAuthToken )

//                 // Refresh
//                 remember ? userStore.set( 'refresh', resolve.data.login.user.jwtRefreshToken ) : userStore.set( 'refresh', "" )

//                 // Last Login
//                 if ( userStore.get( 'sessionStart' )) userStore.set( 'previousSessionStart', userStore.get( 'sessionStart' ))

//                 // Session Start
//                 userStore.set( 'sessionStart', currentTime )

//                 // authTimer
//                 userStore.set( 'authTimer', createTimer( currentTime ))
//                 console.log( "Login Success", resolve )
//             },
//             // Mutation error
//             error => console.log( `userContext Login error: ${error}` )
//         )

//         // End login
//     }

//     // RefreshToken
//     const refreshTokens = token => {
//         // Mutation
//         refreshTokensMutation({ variables: { jwtRefreshToken: token }}).then(
//             resolve => {
//                 // Store Auth tokens
//                 setAuth( resolve.data.refreshJwtAuthToken.authToken )
//                 setAuthTimer( createTimer( new Date( Date.now( ))))
//                 userStore.set( 'auth', resolve.data.refreshJwtAuthToken.AuthToken )
//                 userStore.set( 'authTimer', createTimer( new Date( Date.now( ))))
//                 console.log("Refresh Tokens ran", resolve )
//             },
//             // Todo handle error
//             error => console.log("userContext RefreshTokensMut: ", error )
//         )
//         //router.push('/login')
//         // End refreshToken
//     }

//     // SetUser
//     const setUserObj = () => {
//         // End setUser
//         setUserId("")
//         setAuth("")
//         setRefresh("")
//         setUserEmail("")
//         setUserFirstName("")
//         setUserName("")
//         setUserRoles("")
//     }

//     // Logout
//     const logout = () => {
//         userStore.clearAll()
//         setUserId("")
//         setAuth("")
//         setRefresh("")
//         setUserEmail("")
//         setUserFirstName("")
//         setUserName("")
//         setUserRoles("")

//         //router.push('/login')
//     }

//     // Render
//     return (
//         <userContext.Provider value={{ checkUserStatus, login, logout, refreshTokens, setUserObj, userErrorMsg, userId, userEmail, userFirstName, userName, userRoles }}>
//             {children}
//         </userContext.Provider>
//     )
// }
// export default userContextProvider
