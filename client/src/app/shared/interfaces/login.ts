export interface Login {
    email: string;
    password: string;
  }
  
  export interface User {
    id: number;
    email: string;
    firstName?: string;
    lastName?: string;
    password?: string;
  }
  
  export interface LoginResponse{
    accessToken: string;
    user: User
  }