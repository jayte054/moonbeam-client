import { createContext, ReactNode, useEffect, useState } from "react";
import { OrderStores } from "../../stores/orderStores";

interface PackageContextType {
  packageMap: any[];
}

interface PackageProviderProps {
  children: ReactNode;
}

export const SurprisePackageContext: any = createContext<PackageContextType>({
  packageMap: [],
});

export const PackageProvider = ({children}: PackageProviderProps) => {
    const [packageMap, setPackageMap] = useState<any[]>([])

    useEffect(() => {
        const getPackageMap = async () => {
            const packages: any = await OrderStores.surprisePackageOrder()
            console.log(packages)
            setPackageMap(packages)
        }
        getPackageMap()
    }, [])

    const value = {packageMap}
    return (
      <SurprisePackageContext.Provider value={value}>
        {children}
      </SurprisePackageContext.Provider>
    );
}