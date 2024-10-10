import { createContext, ReactNode, useEffect, useState } from "react";
import { OrderStores } from "../../stores/productStores";

interface PackageContextType {
  packageMap: any[];
}

interface CakeVariantRates {
  foilCake: string;
  cakeParfait: string;
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
            const packages: any = await OrderStores.surprisePackageOrderDetails()
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

export const CakeVariantRatesContext = createContext<CakeVariantRates>({
  foilCake: "",
  cakeParfait: ""
})

export const VariantRatesProvider = ({children}: PackageProviderProps) => {
  const [variantRates, setVariantRates] = useState<CakeVariantRates>({
    foilCake: '',
    cakeParfait: ''
  })

  useEffect(() => {
    const getVariantRates = async () => {
      const rates = await OrderStores.cakeVariantRates()
      console.log(rates)
      setVariantRates(rates)
    }
    getVariantRates()
  }, [])

  const value = variantRates
  return (
    <CakeVariantRatesContext.Provider value={value}>
      {children}
    </CakeVariantRatesContext.Provider>
  )
}