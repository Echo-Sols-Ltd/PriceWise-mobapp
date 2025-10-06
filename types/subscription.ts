export enum PlanType {
    FREE = 'FREE',
    PREMIUM = 'PREMIUM',
    PRO = 'PRO'
}

export enum PerPeriod {
    MONTH = 'MONTH',
    YEAR = 'YEAR'
}

export interface Plan {
    id: string;
    name: string;
    type: PlanType;
    price: number;
    perPeriod: PerPeriod;
    popular: boolean
    features: string[];
    createdAt: string;
    updatedAt: string;
}