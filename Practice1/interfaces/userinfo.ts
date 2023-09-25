import {GenderTypes} from "./user";

let username = true;
export interface IUserInfo {
    userid: string,
    name: string,
    birthdate: string,
    age: number,
    organization: IUserOrganisation
}
interface IUserOrganisation {
    name: string,
    position: string
}
export interface IUserJobPositions {
    name: string,
    position: string,
    age: number,
    gender: GenderTypes
}

