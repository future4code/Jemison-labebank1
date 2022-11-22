export enum ACCOUNT_TYPE{

    CHECKING = "CHECKING",
    SAVINGS = "SAVINGS"
}

export type Users = {
    id: number,
    name: string,
    dob: string,
    cpf: string,
    type: string,
    balance: number
}

