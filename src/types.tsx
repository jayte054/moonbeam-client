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
  itemId: string;
  itemName: string;
  itemType: string;
  price: string;
  imageUrl: string;
  image?: string;
  quantity: string;
  productOrderId: string;
  userId: string
}

export interface setCartCountProps {
  setCartCount: React.Dispatch<React.SetStateAction<string>>;
  cartCount: string;
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