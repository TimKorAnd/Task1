'use strict';
/* ******************* Task3_2:
2) Rewrite as async/await pattern
function callApi(){
    return fetch('url/to/api/endpoint') //some amazing endpoint
        .then(resp => resp.json())
        .then(data => {
// datas }).catch(err => {
// errors
        })
}*/
const fetch = require('node-fetch');
const objectEqualiter = require('../arrayAndObjctsTasks/task3/scriptTask3')
const testUser = {name: 'TimKorAnd'}

/**
 * get user data from amazing github endpoint via promise syntax
 * @param username
 * @returns {Promise<any>}
 */
function callApi(username) {
    return fetch(`https://api.github.com/users/${username}`) //some amazing endpoint
        .then(resp => resp.json())
        .then(data => {
           console.log(data);
            return data;
        }).catch(err => {
// errors
        })
}

const userObject1 = callApi(testUser.name);

/**
 * get user data from amazing github endpoint via async/await syntax
 * @param username
 * @returns {Promise<void>}
 */
async function callApiViaAsyncAwait(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`); //some amazing endpoint
        const user = await response.json();
        console.log(user);
        return user;
    } catch (err) {
        // errors
    }
}
const userObject2 = callApiViaAsyncAwait(testUser.name);
(async () => {
        console.log('Does fetched users equals? ' + objectEqualiter.isEqual(await userObject1, await userObject2));
})();


