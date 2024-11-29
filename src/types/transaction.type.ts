interface TransactionFields {
  id: string;
  amount: number;
  type: string;
  userId: number;
  toUserId: number;
  createdAt: Date;
}

interface TransactionCreate {
  amount: number;
  type: string;
  userId: number;
  toUserId?: number;
}

export { TransactionFields, TransactionCreate };
