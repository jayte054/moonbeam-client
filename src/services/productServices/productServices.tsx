import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext/cartContext";
import { chopsObject, CustomChopsObject, CustomOrderObject, CustomPackageObject, FoilCakeOrderDto, GenericProductOrderDto, OrderObject, packageObject, parfaitObject } from "../../types";
import { Base_Url } from "../galleryServices/galleryServices";



export const surprisePackageOrderDetails = async () => {
    try{
        const surprisePackage = await axios.get(`${Base_Url}/bareAdminHub/getSurprisePackages`)
        const setPackages = surprisePackage.data.reduce(
           (acc: any, _package: any) => {
             switch (_package.packageName.toLowerCase()) {
               case "bronze":
                 acc.bronzePackage = _package;
                 break;
               case "silver":
                 acc.silverPackage = _package;
                 break;
               case "gold":
                 acc.goldPackage = _package;
                 break;
               case "diamond":
                 acc.diamondPackage = _package;
                 break;
             }
             return acc;
           },
           {
             bronzePackage: null,
             silverPackage: null,
             goldPackage: null,
             diamondPackage: null,
           }
         );
         return setPackages;
    }catch(error){
        throw error;
    }
}

export const cakeVariantRates = async () => {
try {
  const rates = await axios.get(`${Base_Url}/bareAdminHub/getCakeVariantsRates`);
  return rates.data
} catch (error) {
  throw error;
}
}

export const budgetCakeOrder = async (
  accessToken: string,
  genericProductOrderDto: GenericProductOrderDto,
) => {
  const {orderName,
         deliveryDate, 
         description, 
         productFlavour, 
         designCovering, 
         layers, 
         inches, 
         type, 
         file } = genericProductOrderDto
  const config = {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }
  const formData = new FormData();
  formData.append('orderName', orderName)
  formData.append("deliveryDate", deliveryDate);
  formData.append("description", description);
  formData.append("productFlavour", productFlavour);
  formData.append("designCovering", designCovering);
  formData.append("layers", layers);
  formData.append("inches", inches);
  formData.append("type", type);
  formData.append('file', file)
  const budgetOrder = await axios.post(`${Base_Url}/products/budgetCakeOrder`, formData, config);
  try {
    console.log(budgetOrder.data)
    return budgetOrder.data
  } catch(error) {
    console.log(error)
    throw error
  }
};

export const specialCakeOrder = async (
  accessToken: string,
  genericProductOrderDto: OrderObject
) => {
  const {orderName, 
         description, 
         productFlavour, 
         type, 
         designCovering, 
         layers, 
         deliveryDate, 
         inches, 
         file } = genericProductOrderDto;
  const config = {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  }
  const formData = new FormData()
  formData.append("orderName", orderName);
  formData.append("description", description);
  formData.append("productFlavour", productFlavour);
  formData.append("type", type);
  formData.append("designCovering", designCovering);
  formData.append("layers", layers);
  formData.append("deliveryDate", deliveryDate);
  formData.append("inches", inches);
  formData.append("file", file);

  const order = await axios.post(
    `${Base_Url}/products/postGenericOrder`,
    formData,
    config
  );
  try {
    console.log(order.data)
    return order.data;
  } catch(error) {
    console.log(error);
    throw error
  }
}

export const bronzePackageOrder = async (
  accessToken: string,
  surprisePackageOrderDto: packageObject
) => {
  const config = {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  };

  const bronzeOrder = await axios.post(
    `${Base_Url}/products/bronzePackageOrder`,
    surprisePackageOrderDto,
    config
  );
  try {
    
    console.log(bronzeOrder.data);
    return bronzeOrder.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const silverPackageOrder = async (accessToken: string, surprisePackageOrderDto: packageObject) => {
  const config = {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  }
  try {
  const silverOrder = await axios.post(
    `${Base_Url}/products/silverPackageOrder`,
    surprisePackageOrderDto,
    config
  );
  console.log(silverOrder.data);
  return silverOrder.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

  export const goldPackageOrder = async(accessToken: string, surprisePackageOrderDto: packageObject) => {
    const config = {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    }

    try {
      const goldOrder = await axios.post(`${Base_Url}/products/goldPackageOrder`, surprisePackageOrderDto, config);
      console.log(goldOrder.data);
      return goldOrder.data
    }catch (error) {
      console.log(error)
      throw error
    }
  }

  export const diamondPackageOrder = async(accessToken: string,surprisePacakgeOrderDto: packageObject) => {
    const config = {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    }

    try{
        const diamondOrder = await axios.post(`${Base_Url}/products/diamondPackageOrder`, surprisePacakgeOrderDto, config);
        console.log(diamondOrder.data)
        return diamondOrder.data
    } catch (error) {
      console.log(error)
    }
  }

  export const chopsOrder = async(accessToken: string, genericChopsOrderDto: chopsObject) => {
    const {
      orderTitle, 
      type, 
      chopPackageType, 
      numberOfPacks, 
      description, 
      deliveryDate, 
      covering, 
      file} = genericChopsOrderDto;
    
    const config = {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    }
    const formData = new FormData()
    formData.append("orderTitle", orderTitle)
    formData.append("type", type)
    formData.append("chopPackageType", chopPackageType)
    formData.append("numberOfPacks", numberOfPacks)
    formData.append("description", description)
    formData.append("deliveryDate", deliveryDate)
    formData.append("covering", covering)
    formData.append("file", file)
    try {
      const order = await axios.post(`${Base_Url}/products/postGenericChopsOrder`, formData, config);
      console.log(order.data)
      return order.data
    }catch (error) {
      console.log(error)
      throw error;
    }
  }

  export const foilCakeOrder = async(accessToken: string, foilCakeOrderDto: FoilCakeOrderDto) => {
    const config = {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    }
    console.log(foilCakeOrderDto)

    try{
      const foilCakeOrder = await axios.post(
        `${Base_Url}/products/foilCakeOrder`, foilCakeOrderDto, config
      );
      console.log(foilCakeOrder.data)
      return foilCakeOrder.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  export const  cakeParfaitOrder = async(accessToken: string, parfaitOrderDto: parfaitObject) => {
    const config = {
      headers: {
          "Authorization" : `Bearer ${accessToken}`
      }
    }

    try {
      const parfaitOrder = await axios.post(
        `${Base_Url}/products/cakeParfaitOrder`, parfaitOrderDto, config);
        console.log(parfaitOrder.data)
        return parfaitOrder.data;
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  export const customCakeOrder = async (accessToken: string, customProductOrderDto: CustomOrderObject) => {
    const {orderName, productFlavour, type, designCovering, layers, deliveryDate, inches, description, file} = customProductOrderDto;
      const config = {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      }

      const formData = new FormData()
        formData.append("orderName", orderName);
        formData.append("productFlavour", productFlavour);
        formData.append("type", type);
        formData.append("designCovering", designCovering);
        formData.append("layers", layers);
        formData.append("deliveryDate", deliveryDate);
        formData.append("inches", inches);
        formData.append("description", description);
        formData.append("file", file);

      try{
        const customOrder = await axios.post(
          `${Base_Url}/products/postCustomOrder`, formData, config
        );
        console.log(customOrder.data)
        return customOrder.data
      } catch( error ) {
        console.log(error)
        throw error
      }
  } 

  export const customPackageOrder = async(accessToken: string, customPackageDto: CustomPackageObject) => {
    const config = {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    }

    try{
      const packageOrder = await axios.post(`${Base_Url}/products/postCustomPackageOrder`, customPackageDto, config);
      console.log(packageOrder.data)
      return packageOrder.data;
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  export const customChopsOrder = async(accessToken: string, customChopsOrderDto:CustomChopsObject) => {
    const config = {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    }

    try {
      const chopsOrder =await axios.post(`${Base_Url}/products/postCustomChopsOrder`, customChopsOrderDto, config);
      console.log(chopsOrder.data)
      return chopsOrder.data;
    } catch(error) {
      console.log(error)
      throw error
    }
  }