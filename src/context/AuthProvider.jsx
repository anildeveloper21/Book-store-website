// import React, { createContext, useContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const initialAuthUser = localStorage.getItem("Users");
//     const [authUser, setAuthUser] = useState(
//         initialAuthUser ? JSON.parse(initialAuthUser) : null
//     );

//     useEffect(() => {
//         // Save authUser to localStorage whenever it changes
//         localStorage.setItem("Users", JSON.stringify(authUser));
//     }, [authUser]);

//     return (
//         <AuthContext.Provider value={{ authUser, setAuthUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);