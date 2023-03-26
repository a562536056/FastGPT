export enum UserNumberEnum {
  phone = 'phone',
  wx = 'wx'
}

export interface UserType {
  _id: string;
  email: string;
  accounts: {
    type: string;
    value: string;
  }[];
  balance: number;
}

export interface UserUpdateParams {
  balance?: number;
  accounts?: {
    type: string;
    value: string;
  }[];
}

export interface UserBillType {
  id: string;
  time: string;
  type: 'chat' | 'splitData' | 'return';
  textLen: number;
  tokenLen: number;
  userId: string;
  chatId: string;
  price: number;
}