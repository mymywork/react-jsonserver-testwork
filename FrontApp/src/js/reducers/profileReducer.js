import { PROFILE } from "../constants"

const initState = ()=> ({
    loaded: false,
	data: [],
	processingMessage: null,
});

export const profileReducer = (state = initState(), action) => {
    switch (action.type){
			case PROFILE.MESSAGE:
				return {
					...state,
					processingMessage: action.processingMessage,
				};
			case PROFILE.LOAD_SUCCESS:
				return {
					...state,
					data: action.data,
					processingMessage: null,
					errorMessage: null,
					loaded: true
			};
			
			default:
				return state;
    }

}