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
        packageOrderName: string,
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
        orderTitle: string,
        type: string,
        chopPackageType?: string,
        pastryPackageType?: string,
        designCovering?: string,
        numberOfPacks: string,
        deliveryDate: string,
        description: string,
        file: string
}

export type foilObject = {
        orderName: string,
        quantity: string,
        description: string,
        productFlavour: string,
}

export type parfaitObject = {
  orderName: string;
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