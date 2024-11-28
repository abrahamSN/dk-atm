interface UserFields {
  id: string;
  userId: string;
  createdAt: Date;
}

interface UserCreate {
  uname: string;
}

export { UserFields, UserCreate };
