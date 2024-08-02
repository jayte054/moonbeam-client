import { createContext, useMemo, useState } from "react";

interface UserContextProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<any>(null)

export const UserProvider: React.FC<UserContextProps> = ({children}: UserContextProps) => {
    const [user, setUser] = useState<any>({
        id: "", 
        email: "", 
        firstname: "", 
        lastname: "", 
        isAdmin: "", 
        phoneNumber: "",
        accessToken: ""
    })

    const updateUser = (userData: any) => {
        console.log(userData)
        setUser((data: any) => ({
          ...data,
          id: userData.user.id,
          email: userData.user.email,
          firstname: userData.user.firstname,
          lastname: userData.user.lastname,
          isAdmin: userData.user.isAdmin,
          phoneNumber: userData.user.phoneNumber,
          accessToken: userData.accessToken,
        }));
        console.log(user)
    };

    const contextValue = useMemo(() => ({user, updateUser}), [user]);

    return (
        <AuthContext.Provider value={{ user, updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}