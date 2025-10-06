import { Plan } from "./subscription"

export enum Provider {
    MTN = 'MTN',
    AIRTEL = 'AIRTEL',
}

export interface PaymentMethod {
    provider: Provider
    active: boolean
    name: string
    number: string
    createdAt: string
    updatedAt: string
}

export interface Payment {
    plan: Plan
    paidAt: string
    paymentMethod: PaymentMethod
    amount: number
    expiresAt: string
    createdAt: string
    updatedAt: string
}
