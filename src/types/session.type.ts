interface SessionFields {
  id: string;
  userId: string;
  createdAt: Date;
}

interface SessionCreate {
  userId: number;
}

export { SessionFields, SessionCreate };
