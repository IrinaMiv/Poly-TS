"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userinfo_1 = require("./userinfo");
const users_1 = require("./users");
function getUsersJobPositions(usersArray) {
    const newUserArray = [];
    if (Array.isArray(usersArray)) {
        usersArray.forEach((elUser) => {
            const userInfo = userinfo_1.usersInfoArray.find(el => el.userid === elUser.userid);
            if (userInfo) {
                const newUserObject = {
                    name: userInfo.name,
                    position: userInfo.organization.position,
                    age: userInfo.age,
                    gender: 'man'
                };
                newUserArray.push(newUserObject);
            }
        });
    }
    return newUserArray;
}
const usersPositions = getUsersJobPositions(users_1.usersArray);
console.log('userPositions', usersPositions);
//# sourceMappingURL=index.js.map