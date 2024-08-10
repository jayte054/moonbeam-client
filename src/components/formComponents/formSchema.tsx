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
  description: yup.string()
    .min(8, "description must contain at least 8 letters")
    .required("Required"),
  productFlavour: yup.string()
                     .oneOf(["chcolateCake", "strawberryCake", "vanillaCake", "redvelvetCake"]),
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