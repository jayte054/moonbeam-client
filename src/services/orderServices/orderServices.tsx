import axios from "axios";
import { Base_Url } from "../galleryServices/galleryServices";

export const surprisePackageOrder = async () => {
    // const config = {
    //     headers: {
    //         "Authorization": `Bearer ${user}`
    //     }
    // }
    try{
        const surprisePackage = await axios.get(`${Base_Url}/bareAdminHub/getSurprisePackages`)
        const setPackages = surprisePackage.data.reduce(
           (acc: any, _package: any) => {
             switch (_package.packageName.toLowerCase()) {
               case "bronze":
                 acc.bronzePackage = _package;
                 break;
               case "silver":
                 acc.bronzePackage = _package;
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