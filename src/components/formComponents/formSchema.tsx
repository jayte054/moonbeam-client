import * as yup from "yup"
import { startOfToday, addDays } from 'date-fns';

const CUTOFF_HOUR = 14; // 2 PM

export const quickOrderSchema = yup.object().shape({
        orderName: yup.string()
                      .min(6, "order name must contain at least 6 letters")
                      .required("Required"),
        description: yup.string()
                        .min(8, "description must contain at least 8 letters")
                        .required("Required"),
        productFlavour: yup.string()
                           .oneOf(['chocolateCake',
                                'strawberryCake',
                                'vanillaCake',
                                'redvelvetCake',
                                'carrotCake',
                                'cheeseCake',
                                'bananaCake',
                                'appleCake',
                                'lemonCake',
                                'coffeeCake',
                                'coconutCake',
                                'blueberryCake'],"invalid flavour type")
                           .required("Required"),
        type: yup.string()
                 .oneOf(["Traditional",
                        "Wedding", 
                        "Birthday", 
                        "Anniversary",
                        "Chops_Pastries"], "invalid type")
                 .required("Required"),
        designCovering: yup.string()
                            .oneOf(["naked", 
                                   "butterCream",
                                   "fundant"], "invalid covering" )
                            .required("Required"),
        layers: yup.string()
                   .oneOf(["1","2","3","4","5","6"], "invalid number of layers")
                   .required(),
        deliveryDate: yup.date()
                         .required("Required")
                         .min(new Date(), "Delivery Date must be in the future")
                         .typeError("invalid delivery date format"),
        
        //same day delivery datef ormatting
        // deliveryDate: yup
        // .date()
        // .required("Required")
        // .test("deliveryDate", "Delivery Date must be today or in the future", function(value) {
        // const now = new Date();
        // const today = startOfToday();
        // const cutoffTime = new Date(today);
        // cutoffTime.setHours(CUTOFF_HOUR, 0, 0, 0);

        // if (now > cutoffTime) {
        //     // If current time is past cutoff, minimum delivery date is tomorrow
        //     return value >= addDays(today, 1);
        // } else {
        //     // If current time is before cutoff, minimum delivery date is today
        //     return value >= today;
        // }
        // })
        // .typeError("Invalid delivery date format"),                 
        inches: yup.string()
                   .oneOf(["6", "8", "10", "12", "14", "16", "18", "20"], "invaid inch selection")   
                   .required('Required'),
        file: yup.mixed<File>()
                 .required("File is required")
                 .test("fileSize", "File is too large", (value) => value && value.size <= 5 * 1024 * 1024)  // example file size limit: 5MB
                 .test("fileFormat", "Unsupported File Format", (value) => value && ['image/jpeg', 'image/png'].includes(value.type))  // example file type validation

})

export const packageOrderSchema = yup.object().shape({
  packageOrderName: yup.string()
                       .min(6, "order name must contain at least 6 letters")
                       .required("Required"),
  deliveryDate: yup.date()
                   .required("Required")
                   .min(new Date(), "Delivery Date must be in the future")
                   .typeError("invalid delivery date format"),
  addInfo: yup.string()
              .min(8, "description must contain at least 8 letters")
              .required("Required"),
});

export const chopsOrderSchema = yup.object().shape({
  orderTitle: yup
    .string()
    .min(6, "order name must contain at least 6 letters")
    .required("Required"),
  type: yup
    .string()
    .oneOf(
      ["Traditional", "Wedding", "Birthday", "Anniversary", "Chops_Pastries"],
      "invalid type"
    )
    .required("Required"),
  chopPackageType: yup
    .string()
    .oneOf([
      "samosa",
      "springroll",
      "puff",
      "pepperedMeat",
      "samosa_spingroll",
      "puff_pepperedMeat",
      "samosa_pepperedMeat",
      "springroll_pepperedMeat",
    ])
    .required("Required"),
  pastryPackageType: yup
    .string()
    .oneOf([
      "meatPie",
      "donuts",
      "cinamonRolls",
      "pancakes",
      "corndogs",
      "waffels",
      "meatPie_donuts",
      "pancakes_corndogs_waffels",
    ])
    .required("Required"),
  designCovering: yup.string().oneOf(["true", "false"]).required("required"),
  numberOfPacks: yup.string().required("required"),
  deliveryDate: yup
    .date()
    .required("Required")
    .min(new Date(), "Delivery Date must be in the future")
    .typeError("invalid delivery date format"),
  description: yup
    .string()
    .min(8, "description must contain at least 8 letters")
    .required("Required"),
  file: yup
    .mixed<File>()
    .required("File is required")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    ) // example file size limit: 5MB
    .test(
      "fileFormat",
      "Unsupported File Format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),
});

export const foilOrderSchema = yup.object().shape({
  orderName: yup
    .string()
    .min(6, "order name must contain at least 6 letters")
    .required("Required"),
  quantity: yup
    .string()
    .min(1, "order name must contain at least one number")
    .required("Required"),
  deliveryDate: yup
    .date()
    .required("Required")
    .min(new Date(), "Delivery Date must be in the future")
    .typeError("invalid delivery date format"),
  description: yup
    .string()
    .min(8, "description must contain at least 8 letters")
    .required("Required"),
  productFlavour: yup
    .string()
    .oneOf(["chocolateCake", "strawberryCake", "vanillaCake", "redvelvetCake"]),
});

export const parfaitOrderSchema = yup.object().shape({
  orderName: yup
    .string()
    .min(6, "order name must contain at least 6 letters")
    .required("Required"),
  quantity: yup
    .string()
    .min(1, "order name must contain at least one number")
    .required("Required"),
  description: yup
    .string()
    .min(8, "description must contain at least 8 letters")
    .required("Required"),
});

export const createAddressSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(4, "order name must contain at least 6 letters")
    .required("Required"),
  lastName: yup
    .string()
    .min(4, "order name must contain at least 6 letters")
    .required("Required"),
  phoneNumber: yup
    .string()
    .min(11, "phone number must contain 11 numbers")
    .required("Required"),
  addititonalPhoneNumber: yup
    .string()
    .min(11, "phone number must contain 11 numbers")
    .required("Required"),
  deliveryAddress: yup
    .string()
    .max(30, "order name must contain at least 6 letters")
    .required("Required"),
  region: yup
    .string()
    .required("Required"),
  city: yup
    .string()
    .required("Required"),
  defaultAddress: yup
    .boolean()
    .required("Required")
});

export const galleryProductFormSchema = yup.object().shape({
  type: yup
    .string()
    .oneOf([
      "wedding",
      "birthday",
      "anniversary",
      "chops / pastries",
      "suprise package",
    ])
    .required("Required"),
  description: yup
    .string()
    .required("Required")
    .min(6, "description must contain at least 6 letters")
    .max(20, "maximum number of letters should not exceed 20"),
  file: yup
    .mixed<File>()
    .required("File is required")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    ) // example file size limit: 5MB
    .test(
      "fileFormat",
      "Unsupported File Format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ), // example file type validation
});

export const RtgProductSchema = yup.object().shape({
  rtgName: yup.string().required("Required"),
  rtgType: yup.string().oneOf(["Cakes", "Chops"]),
  rtgPrice: yup.string().required("Required"),
  rgDescription: yup
    .string()
    .min(15, "description must be at least contain 15 letters")
    .max(25, "description must be at least contain 25 letters")
    .required("Required"),
  file: yup
    .mixed<File>()
    .required("File is required")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    ) // example file size limit: 5MB
    .test(
      "fileFormat",
      "Unsupported File Format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),
});

export const productRateValidationSchema = yup.object().shape({
  chocolateCakeRate: yup.string().required("Required"),
  strawberryCakeRate: yup.string().required("Required"),
  vanillaCakeRate: yup.string().required("Required"),
  redvelvetCakeRate: yup.string().required("Required"),
  carrotCakeRate: yup.string().required("Required"),
  cheeseCakeRate: yup.string().required("Required"),
  bananaCakeRate: yup.string().required("Required"),
  appleCakeRate: yup.string().required("Required"),
  lemonCakeRate: yup.string().required("Required"),
  coffeeCakeRate: yup.string().required("Required"),
  coconutCakeRate: yup.string().required("Required"),
  blueberryCakeRate: yup.string().required("Required"),
  samosaRate: yup.string().required("Required"),
  springRollRate: yup.string().required("Required"),
  samosa_springrollRate: yup.string().required("Required"),
  puffRate: yup.string().required("Required"),
  pepperedMeatRate: yup.string().required("Required"),
  puff_pepperedMeatRate: yup.string().required("Required"),
  samosa_pepperedMeatRate: yup.string().required("Required"),
  springroll_pepperedMeatRate: yup.string().required("Required"),
  meatPieRate: yup.string().required("Required"),
  donutsRate: yup.string().required("Required"),
  cinamonRollsRate: yup.string().required("Required"),
  pancakesRate: yup.string().required("Required"),
  corndogsRate: yup.string().required("Required"),
  waffelsRate: yup.string().required("Required"),
  meatpie_donutsRate: yup.string().required("Required"),
  pancakes_corndogs_waffelsRate: yup.string().required("Required"),
});

export const designRateValidationSchema = yup.object().shape({
  nakedRate: yup.string().required("Required"),

  butterCreamRate: yup.string().required("Required"),

  fundantRate: yup.string().required("Required"),

  covering: yup.string().required("Required")
}); 

export const budgetCakeRateValidationSchema = yup.object().shape({
  chocolateCakeRate: yup.string().required("Required"),
  strawberryCakeRate: yup.string().required("Required"),
  vanillaCakeRate: yup.string().required("Required"),
  redvelvetCakeRate: yup.string().required("Required"),
  carrotCakeRate: yup.string().required("Required"),
  cheeseCakeRate: yup.string().required("Required"),
  bananaCakeRate: yup.string().required("Required"),
  appleCakeRate: yup.string().required("Required"),
  lemonCakeRate: yup.string().required("Required"),
  coffeeCakeRate: yup.string().required("Required"),
  coconutCakeRate: yup.string().required("Required"),
  blueberryCakeRate: yup.string().required("Required"),
  foilCakeRate: yup.string().required("Required"),
  cakeParfaitRate: yup.string().required("Required")
});

export const bonzePackageRatesValidationSchema = yup.object().shape({
  packageName: yup.string().required("Required"),
  itemOne: yup.string().required("Required"),
  itemTwo: yup.string().required("Required"),
  itemThree: yup.string().required("Required"),
  itemFour: yup.string().required("Required"),
  itemFive: yup.string().required("Required"),
  itemSix: yup.string().required("Required"),
  file: yup
    .mixed<File>()
    .required("File is required")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    ) // example file size limit: 5MB
    .test(
      "fileFormat",
      "Unsupported File Format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),
  price: yup.string().required("Required"),
  description: yup.string().required("Required"),
});

export const silverPackageRatesValidationSchema = yup.object().shape({
  packageName: yup.string().required("Required"),
  itemOne: yup.string().required("Required"),
  itemTwo: yup.string().required("Required"),
  itemThree: yup.string().required("Required"),
  itemFour: yup.string().required("Required"),
  itemFive: yup.string().required("Required"),
  itemSix: yup.string().required("Required"),
  itemSeven: yup.string().required("Required"),
  itemEight: yup.string().required("Required"),
  file: yup
    .mixed<File>()
    .required("File is required")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    ) // example file size limit: 5MB
    .test(
      "fileFormat",
      "Unsupported File Format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),
  price: yup.string().required("Required"),
  description: yup.string().required("Required"),
});

export const goldPackageRatesValidationSchema = yup.object().shape({
  packageName: yup.string().required("Required"),
  itemOne: yup.string().required("Required"),
  itemTwo: yup.string().required("Required"),
  itemThree: yup.string().required("Required"),
  itemFour: yup.string().required("Required"),
  itemFive: yup.string().required("Required"),
  itemSix: yup.string().required("Required"),
  itemSeven: yup.string().required("Required"),
  itemEight: yup.string().required("Required"),
  itemNine: yup.string().required("Required"),
  itemTen: yup.string().required("Required"),
  file: yup
    .mixed<File>()
    .required("File is required")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    ) // example file size limit: 5MB
    .test(
      "fileFormat",
      "Unsupported File Format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),
  price: yup.string().required("Required"),
  description: yup.string().required("Required"),
});

export const diamondPackageRatesValidationSchema = yup.object().shape({
  packageName: yup.string().required("Required"),
  itemOne: yup.string().required("Required"),
  itemTwo: yup.string().required("Required"),
  itemThree: yup.string().required("Required"),
  itemFour: yup.string().required("Required"),
  itemFive: yup.string().required("Required"),
  itemSix: yup.string().required("Required"),
  itemSeven: yup.string().required("Required"),
  itemEight: yup.string().required("Required"),
  itemNine: yup.string().required("Required"),
  itemTen: yup.string().required("Required"),
  itemEleven: yup.string().required("Required"),
  itemTwelve: yup.string().required("Required"),
  file: yup
    .mixed<File>()
    .required("File is required")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    ) // example file size limit: 5MB
    .test(
      "fileFormat",
      "Unsupported File Format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),
  price: yup.string().required("Required"),
  description: yup.string().required("Required"),
})