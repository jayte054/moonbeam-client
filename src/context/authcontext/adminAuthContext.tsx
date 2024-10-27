import { createContext, useMemo, useState } from "react";

interface UserContextProps {
  children: React.ReactNode;
}

export const AdminAuthContext = createContext<any>(null);

export const AdminProvider: React.FC<UserContextProps> = ({
  children,
}: UserContextProps) => {
  const [admin, setAdmin] = useState<any>({
    id: "",
    email: "",
    firstname: "",
    lastname: "",
    isAdmin: "",
    phoneNumber: "",
    accessToken: "",
  });

  const updateAdmin = (adminData: any) => {
    console.log(adminData);
    setAdmin((data: any) => ({
      ...data,
      id: adminData.admin.id,
      email: adminData.admin.email,
      firstname: adminData.admin.firstname,
      lastname: adminData.admin.lastname,
      isAdmin: adminData.admin.isAdmin,
      phoneNumber: adminData.admin.phoneNumber,
      accessToken: adminData.accessToken,
    }));
    console.log(admin);
  };

  const contextValue = useMemo(() => ({ admin, updateAdmin }), [admin]);

  return (
    <AdminAuthContext.Provider value={{ admin, updateAdmin }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
