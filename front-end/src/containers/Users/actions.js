import {
	USERS_REQUEST,
	USERS_RECEIVE,
	USERS_FAILURE
} from './types';

export function usersRequest(query) {
	return {
		type: USERS_REQUEST,
		payload: query
	}
}

export function usersReceive(found) {
	return {
		type: USERS_RECEIVE,
		payload: found
	}
}

export function usersFailure(errorMessage) {
	return {
		type: USERS_FAILURE,
		payload: errorMessage,
		error: true
	}
}