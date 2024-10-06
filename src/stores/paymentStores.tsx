import { paymentService, verifyPayment } from "../services/paymentService/paymentService";
import { PaymentDto, verificationDto } from "../types";

export const paymentStores = {
    initiatePayment: async (accessToken: string, paymentDto: PaymentDto) => {
        return await paymentService(accessToken, paymentDto)
    },

    verifyPayment: async (accessToken: string, verificationDto: verificationDto) => {
        return await verifyPayment( accessToken, verificationDto)
    }
}