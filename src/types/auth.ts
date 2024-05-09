export type LoginMutationData = {
  email: string;
  password: string;
};

export type RegisterMutationData = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};

export type DecodeTokenData = {
  name: string;
  id: number;
  iat: number;
  exp: number;
};
