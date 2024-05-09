
export interface Note {
    id: string,
    title: string,
    createdBy: string,
    description: string,
    dateLimit: Date,
    createdAt: Date,
    deletedAt: Date,
    categoryId: string,
}

export interface User {
    id: string,
    name: string,
    lastname: string,
    email:string
}

export interface Category {
    id: string,
    title: string
}

export default interface IJwt {
    access_token: string;
    expires_in: number;
    token_type: string;
  }
  
