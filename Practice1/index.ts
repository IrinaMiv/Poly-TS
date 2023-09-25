import {GenderTypes, IUser} from "./interfaces/user";
import {IUserInfo, IUserJobPositions} from "./interfaces/userinfo";
import {usersInfoArray} from "./userinfo";
import {usersArray} from "./users";

function getUsersJobPositions(usersArray: IUser[]): IUserJobPositions [] {
    const newUserArray: IUserJobPositions[] = [];

    if (Array.isArray(usersArray)){

        usersArray.forEach((elUser) => {
            const userInfo = usersInfoArray.find (el => el.userid === elUser.userid);

            if (userInfo) {
                const newUserObject: IUserJobPositions = {
                    name: userInfo.name,
                    position: userInfo.organization.position,
                    age: userInfo.age,
                    gender: 'man'
                }
            newUserArray.push(newUserObject);
            }

        })
    }
    return newUserArray;
}
const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions)


