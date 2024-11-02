export type OrderObject = {
        orderName: string,
        description: string,
        productFlavour: string,
        type: string,
        designCovering: string,
        layers: string,
        deliveryDate: string,
        inches: string,
        file: any,
}

export type CustomOrderObject = {
        orderName: string,
        description: string,
        productFlavour: string,
        type: string,
        designCovering: string,
        layers: string,
        deliveryDate: string,
        inches: string,
        file: string
}

export type packageObject = {
        packageOrderName: string,
        deliveryDate: string,
        addInfo: string,
}

export type CustomPackageObject = {
        orderName: string,
        item: string[],
        deliveryDate: string,
        addInfo: string,
}

export type chopsObject = {
        orderTitle: string,
        type: string,
        chopPackageType?: any,
        pastryPackageType?: string,
        covering?: any,
        numberOfPacks: string,
        deliveryDate: string,
        description: string,
        file: any
}

export type CustomChopsObject = {
        orderName: string,
        chopType: string,
        numberOfPacks: string,
        deliveryDate: string,
        description: string,
}

export type foilObject = {
        orderName: string,
        quantity: string,
        description: string,
        deliveryDate: string,
        productFlavour: string,
}

export type parfaitObject = {
  orderName: string;
  deliveryDate: "";
  quantity: string;
  description: string;
};

export interface GenericProductOrderDto {
        id?: string,
        orderName: string,
        deliveryDate: string,
        description: string,
        productFlavour: string,
        designCovering: string,
        layers: string,
        inches: string,
        type: string,
        file: any
}

export interface FoilCakeOrderDto {
        orderName: string,
        quantity: string,
        description: string,
        deliveryDate: string,
        productFlavour: string,
}

export interface CakePafaitOrderDto {
  orderName: string;
  quantity: string;
  description: string;
  deliveryDate: string;
}

export interface CartObject {
  itemId: string | undefined | any;
  itemName: string | undefined;
  itemType: string | undefined;
  price: string | undefined;
  imageUrl: string | undefined;
  image?: string | undefined;
  quantity: string | undefined;
  deliveryDate: string | undefined;
  productOrderId?: string | undefined;
  userId: string | undefined;
}

export interface setCartCountProps {
  setCartCount: React.Dispatch<React.SetStateAction<string>>;
  cartCount: string;
  addItemToCart: any;
}

export interface AddressObject {
        deliveryAddressId: string,
        firstName: string,
        lastName: string,
        phoneNumber: number,
        additionalPhoneNumber?:number,
        deliveryAddress: string,
        region: string,
        city: string,
        defaultAddress: boolean,
        userId: string
}

export interface StudioAddressObject {    
  studioId: string;        
  studioTitle: string;
  studioAddress: string;
  LGA: string;
  state: string;
  phoneNumber: string;
  deliveryBaseFee: string;
  deliveryPricePerKm: string;
  defaultStudioAddress: boolean;
  userId: string;
}

export interface CreateDeliveryAddressDto {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  additionalPhoneNumber: string;
  deliveryAddress: string;
  region: string;
  defaultAddress: boolean;
  city: string;
}

export interface bronzePackage {
  packageId: string;
  packageName: string;
  itemOne: string;
  itemTwo: string;
  itemThree: string;
  itemFour: string;
  itemFive: string;
  itemSix: string;
  description: string;
  imageUrl: string;
  price: string;
}

export interface silverPackage {
  packageId: string;
  packageName: string;
  itemOne: string;
  itemTwo: string;
  itemThree: string;
  itemFour: string;
  itemFive: string;
  itemSix: string;
  itemSeven: string;
  itemEight: string;
  description: string;
  imageUrl: string;
  price: string;
}

export interface goldPackage {
  packageId: string;
  packageName: string;
  itemOne: string;
  itemTwo: string;
  itemThree: string;
  itemFour: string;
  itemFive: string;
  itemSix: string;
  itemSeven: string;
  itemEight: string;
  itemNine: string;
  itemTen: string;
  imageUrl: string;
  description: string;
  price: string;
}

export interface diamondPackage {
  packageId: string;
  packageName: string;
  itemOne: string;
  itemTwo: string;
  itemThree: string;
  itemFour: string;
  itemFive: string;
  itemSix: string;
  itemSeven: string;
  itemEight: string;
  itemNine: string;
  itemTen: string;
  itemEleven: string;
  itemTwelve: string;
  imageUrl: string;
  description: string;
  price: string;
}

export interface bronzePackageOrderType  {
  packageId: string;
  packageName: string;
  packageOrderName: string;
  bronzePackage: {
    itemOne: string;
    itemTwo: string;
    itemThree: string;
    itemFour: string;
    itemFive: string;
    itemSix: string;
    description: string;
  };
  imageUrl: string;
  price: string;
  orderDate: string;
  deliveryDate: string;
  status: string;
  addInfo: string;
  userId: string;
};

export interface silverPackageOrderType {
  packageId: string;
  packageName: string;
  packageOrderName: string;
  silverPackage: {
    itemOne: string;
    itemTwo: string;
    itemThree: string;
    itemFour: string;
    itemFive: string;
    itemSix: string;
    itemSeven: string;
    itemEight: string;
    description: string;
  };
  imageUrl: string;
  price: string;
  orderDate: string;
  deliveryDate: string;
  status: string;
  addInfo: string;
  userId: string;
};

export interface goldPackageOrderType  {
  packageId: string;
  packageName: string;
  packageOrderName: string;
  goldPackage: {
    itemOne: string;
    itemTwo: string;
    itemThree: string;
    itemFour: string;
    itemFive: string;
    itemSix: string;
    itemSeven: string;
    itemEight: string;
    itemNine: string;
    itemTen: string;
    description: string;
  };
  imageUrl: string;
  price: string;
  orderDate: string;
  deliveryDate: string;
  status: string;
  addInfo: string;
  userId: string;
};

export interface diamondPackageOrderType  {
  packageId: string;
  packageName: string;
  packageOrderName: string;
  diamondPackage: {
    itemOne: string;
    itemTwo: string;
    itemThree: string;
    itemFour: string;
    itemFive: string;
    itemSix: string;
    itemSeven: string;
    itemEight: string;
    itemNine: string;
    itemTen: string;
    itemEleven: string;
    itemTwelve: string;
    description: string;
  };
  imageUrl: string;
  price: string;
  orderDate: string;
  deliveryDate: string;
  status: string;
  addInfo: string;
  userId: string;
};

export interface CakeOrder {
  id: string;
  orderName: string;
  type: string;
  inches: string;
  layers: string;
  productFlavour: string;
  designCovering: string;
  imageUrl: string;
  orderDate: string;
  price: string;
  description: string;
  userId: string;
  deliveryDate: string;
  status: string;
}

export interface ChopsOrderType  {
  id: string;
  orderTitle: string;
  type: string;
  imageUrl: string;
  chopPackageType: string;
  customChopPackage: string;
  numberOfPacks: string;
  customNumberOfPacks: string;
  pastryPackageType: string;
  customPastryPackage: string;
  covering: string;
  price: string;
  deliveryDate: string;
  userId: string;
  description: string;
  status: string;
};

export interface VariantCakeOrder {
  variantId: string;
  orderName: string;
  type: string;
  productFlaovur?: string;
  price: string;
  quantity: string;
  description: string;
  deliveryDate: string;
  userId: string;
};

export interface PaymentDto {
  userId: string | undefined,
  amount: string | number| undefined;
}

export interface verificationDto {
  reference: string | undefined;
  iv: string | undefined;
  paymentId: string;
}

export interface ReferenceObject {
  message: string;
  redirecturl: string;
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
}

export interface RequestObject {
        requestId: string | undefined | any;
        requestTitle: string | undefined;
        orderType: string | undefined;
        content: string[] | undefined;
        quantity?: string | undefined;
        imageUrl?: string | undefined;
        deliveryDate: string | undefined;
        status: string | undefined;
        productOrderId?: string | undefined;
        userId: string | undefined;
}

export interface OrderedObject {
  orderId: string | undefined;
  orderName: string | undefined;
  orderDate: string | undefined;
  imageUrl?: string | undefined;
  quantity: string | undefined;
  price: string | undefined;
  content?: string[] | undefined;
  deliveryDate: string | undefined;
  productOrderId: string | undefined;
  userId: string | undefined;
}

export interface OrderDto {
  orderName: string | undefined;
  imageUrl?: string | undefined;
  quantity: string | undefined;
  price: string | undefined;
  content?: string[] | undefined;
  deliveryDate: string | undefined;
}

export interface rtgProducts {
  rtgId: string;
  rtgName: string;
  rtgType: string;
  rtgPrice: string;
  rtgImageUrl: string;
  rtgDescription: string;
  date: string;
  adminId: string;
}

export interface RtgOrderDto {
  orderName: string;
  orderType: string;
  cakeMessage?: any;
  deliveryDate: string;
  price: string;
  imageUrl: any;
}

export interface GalleryProductDto {
  type: string;
  description: string;
  file: any;
}

export interface GalleryProductInterface {
  productId: string;
  type: string;
  imageUrl: string;
  description: string;
  date: string;
  adminId: string;
}

export interface RtgProductDto {
  rtgName: string;
  rtgType: string;
  rtgPrice: string;
  rtgDescription: string;   
  file: any;
}

export interface rtgProductInterface {
  rtgId: string;
  rtgName: string;
  rtgType: string;
  rtgPrice: string;
  rtgImageUrl: string;
  rtgDescription: string;
  date: string;
  adminId: string;
}

export interface ProductRateDto {
  chocolateCakeRate: string;
  strawberryCakeRate: string;
  vanillaCakeRate: string;
  redvelvetCakeRate: string;
  carrotCakeRate: string;
  cheeseCakeRate: string;
  bananaCakeRate: string;
  appleCakeRate: string;
  lemonCakeRate: string;
  coffeeCakeRate: string;
  coconutCakeRate: string;
  blueberryCakeRate: string;
  samosaRate?: string;
  springRollRate?: string;
  samosa_springrollRate?: string;
  puffRate?: string;
  pepperedMeatRate?: string;
  puff_pepperedMeatRate?: string;
  samosa_pepperedMeatRate?: string;
  springroll_pepperedMeatRate?: string;
  meatPieRate?: string;
  donutsRate?: string;
  cinamonRollsRate?: string;
  pancakesRate?: string;
  corndogsRate?: string;
  waffelsRate?: string;
  meatpie_donutsRate?: string;
  pancakes_corndogs_waffelsRate?: string;
}

export interface BudgetRateDto {
  chocolateCakeRate: string;
  strawberryCakeRate: string;
  vanillaCakeRate: string;
  redvelvetCakeRate: string;
  carrotCakeRate: string;
  cheeseCakeRate: string;
  bananaCakeRate: string;
  appleCakeRate: string;
  lemonCakeRate: string;
  coffeeCakeRate: string;
  coconutCakeRate: string;
  blueberryCakeRate: string;
  foilCakeRate: string;
  cakeParfaitRate: string;
}

// export interface updateProductRateDto {
//   chocolateCakeRate: string;
//   strawberryCakeRate: string;
//   vanillaCakeRate: string;
//   redvelvetCakeRate: string;
//   carrotCakeRate: string;
//   cheeseCakeRate: string;
//   bananaCakeRate: string;
//   appleCakeRate: string;
//   lemonCakeRate: string;
//   coffeeCakeRate: string;
//   coconutCakeRate: string;
//   blueberryCakeRate: string;
//   samosaRate?: string;
//   springRollRate?: string;
//   samosa_springrollRate?: string;
//   puffRate?: string;
//   pepperedMeatRate?: string;
//   puff_pepperedMeatRate?: string;
//   samosa_pepperedMeatRate?: string;
//   springroll_pepperedMeatRate?: string;
//   meatPieRate?: string;
//   donutsRate?: string;
//   cinamonRollsRate?: string;
//   pancakesRate?: string;
//   corndogsRate?: string;
//   waffelsRate?: string;
//   meatpie_donutsRate?: string;
//   pancakes_corndogs_waffelsRate?: string;
//   foilCakeRate: string;
//   cakeParfaitRate: string;
// }

export interface ProductRateInterface {
  rateId: string;
  chocolateCakeRate: string;
  strawberryCakeRate: string;
  vanillaCakeRate: string;
  redvelvetCakeRate: string;
  carrotCakeRate: string;
  cheeseCakeRate: string;
  bananaCakeRate: string;
  appleCakeRate: string;
  lemonCakeRate: string;
  coffeeCakeRate: string;
  coconutCakeRate: string;
  blueberryCakeRate: string;
  samosaRate: string;
  springRollRate: string;
  samosa_springrollRate: string;
  puffRate: string;
  pepperedMeatRate: string;
  puff_pepperedMeatRate: string;
  samosa_pepperedMeatRate: string;
  springroll_pepperedMeatRate: string;
  meatPieRate: string;
  donutsRate: string;
  cinamonRollsRate: string;
  pancakesRate: string;
  corndogsRate: string;
  waffelsRate: string;
  meatpie_donutsRate: string;
  pancakes_corndogs_waffelsRate: string;
  adminId: string;
}

export interface ProductRateFormInterface {
     productRate: string,
     price: string,
}

export interface BudgetRateFormInterface {
  budgetRate: string;
  price: string;
}

export interface DesignRateFormInterface {
  designRate: string;
  price: string;
}

export interface designRateDto  {
  nakedRate: string;

  butterCreamRate: string;

  fundantRate: string;

  covering: string;
}

export interface DesignRateInterface {
  designId: string;
  butterCreamRate: string;
  fundantRate: string;
  nakedrate: string;
  covering: string;
  adminId: string;
}

export interface BudgetRateInterface {
  rateId: string;
  chocolateCakeRate: string;
  strawberryCakeRate: string;
  vanillaCakeRate: string;
  redvelvetCakeRate: string;
  carrotCakeRate: string;
  cheeseCakeRate: string;
  bananaCakeRate: string;
  appleCakeRate: string;
  lemonCakeRate: string;
  coffeeCakeRate: string;
  coconutCakeRate: string;
  blueberryCakeRate: string;
  foilCakeRate: string;
  cakeParfaitRate: string;
  adminId: string;
}

export interface PackageRatesDto {
  packageName: string;
  itemOne: string;
  itemTwo: string;
  itemThree: string;
  itemFour: string;
  itemFive: string;
  itemSix: string;
  itemSeven?: string | any;
  itemEight?: string | any;
  itemNine?: string | any;
  itemTen?: string | any;
  itemEleven?: string | any;
  itemTwelve?: string | any;
  file: any;
  price: string;
  description: string;
}



export interface PackageRatesInterface {
  packageId: string;
  packageName: string;
  itemOne: string;
  itemTwo: string;
  itemThree: string;
  itemFour: string;
  itemFive: string;
  itemSix: string;
  itemSeven?: string;
  itemEight?: string;
  itemNine?: string;
  itemTen?: string;
  itemEleven?: string;
  itemTwelve?: string;
  file: any;
  price: string;
  description: string;
  date: string;
  adminId: string;
}

export interface StudioDetailsDto {
  studioTitle: string;
  studioAddress: string;
  LGA: string;
  state: string;
  phoneNumber: string;
  deliveryBaseFee: string;
  deliveryPricePerKm: string;
  defaultStudioAddress: boolean;
}

export interface StudioDetailsInterface {
  studioTitle: string;
  studioAddress: string;
  LGA: string;
  state: string;
  phoneNumber: string;
  deliveryBaseFee: string;
  deliveryPricePerKm: string;
  defaultStudioAddress: boolean;
  adminId: string;
}

export interface UpdateProductDto  {
  type?: string | any;

  file?: any;

  description?: string | any;
}

export interface UpdateRtgProductDto {
  rtgName?: string | any;
  rtgType?: string | any;
  rtgPrice?: string | any;
  file?: any;
  rtgDescription?: string | any;
}

export interface updateProductRateDto {
  chocolateCakeRate?: string | any;
  strawberryCakeRate?: string;
  vanillaCakeRate?: string;
  redvelvetCakeRate?: string;
  carrotCakeRate?: string;
  cheeseCakeRate?: string;
  bananaCakeRate?: string;
  appleCakeRate?: string;
  lemonCakeRate?: string;
  coffeeCakeRate?: string;
  coconutCakeRate?: string;
  blueberryCakeRate?: string;
  samosaRate?: string;
  springRollRate?: string;
  samosa_springrollRate?: string;
  puffRate?: string;
  pepperedMeatRate?: string;
  puff_pepperedMeatRate?: string;
  samosa_pepperedMeatRate?: string;
  springroll_pepperedMeatRate?: string;
  meatPieRate?: string;
  donutsRate?: string;
  cinamonRollsRate?: string;
  pancakesRate?: string;
  corndogsRate?: string;
  waffelsRate?: string;
  meatpie_donutsRate?: string;
  pancakes_corndogs_waffelsRate?: string;
  foilCakeRate?: string;
  cakeParfaitRate?: string;
}

export interface UpdateDesignRateDto {
  butterCreamRate?: string;
  fundantRate?: string;
  nakedrate?: string;
  covering?: string;
}

export interface SurprisePackageInterface {
  packageId: string;
  packageName: string;
  itemOne: string;
  itemTwo: string;
  itemThree: string;
  itemFour: string;
  itemFive: string;
  itemSix: string;
  itemSeven: string;
  itemEight: string;
  itemNine: string;
  itemTen: string;
  itemEleven: string;
  itemTwelve: string;
  imageUrl: string;
  price: string;
  description: string;
  date: string;
  adminId: string;
}