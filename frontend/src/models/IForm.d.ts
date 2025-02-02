export interface IFormInputs {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
    gender: Gender;
}

export type Gender = "male" | "female" | "";

export type ILoginFormInputs = Pick<IFormInputs, "username" | "password">;
