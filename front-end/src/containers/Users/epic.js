import {
    USERS_REQUEST,
    USERS_RECEIVE
} from './types';
import {
    usersReceive,
    usersFailure
} from './actions';


import {
    Observable
} from 'rxjs/Rx';


const apiUrl = process.env.API_URL;
// https://developer.github.com/v3/search/#search-users
// https://developer.github.com/v3/#pagination
// https://developer.github.com/v3/repos/
const ajax = (query) => Observable.ajax.get(`${apiUrl}/search/users?q=${query}&per_page=100`, {
    'Content-Type': 'text/plain'
});


export const users = function (action$, store) {
    return Observable.merge(
        action$.ofType(USERS_REQUEST)
        // .delay(1000)
        .switchMap(({
                payload
            }) =>
            ajax(payload)
            .map(({
                response
            }) => usersReceive(response))
            .catch(({
                status
            }) => Observable.of(usersFailure(status)))
        )
    );
}