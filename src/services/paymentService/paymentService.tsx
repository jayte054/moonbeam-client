import axios from "axios"
import { PaymentDto, verificationDto } from "../../types"
import { Base_Url } from "../galleryServices/galleryServices"

export const paymentService = async (accessToken: string, paymentDto: PaymentDto) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    try {
        const newPayment = await axios.post(
          `${Base_Url}/payment/initiatePayment`,
          paymentDto,
          config
        );
        console.log(newPayment.data)
        // newPayment.data;
        return newPayment.data;
    } catch (error) {
        console.log(error)
    }
}

export const verifyPayment = async (accessToken: string, verificationDto: verificationDto) => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
        const verifyPayment = await axios.patch(`${Base_Url}/payment/verifyPayment`, verificationDto, config)
        console.log(verifyPayment.data)
        return verifyPayment.data;
    } catch (error) {
      console.log(error);
    }
}