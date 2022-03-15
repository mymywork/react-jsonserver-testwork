import { POSTS } from "../constants"

const initState = ()=> ({
	loaded: false,
	processingMessage: null,
	data: [],
});

export const postsReducer = (state = initState(), action) => {
    switch (action.type){
			case POSTS.MESSAGE:
			return {
				...state,
				processingMessage: action.processingMessage,
			};
			case POSTS.LOAD_SUCCESS:
				return {
					...state,
					data: action.data,
					processingMessage: null,
					errorMessage: null,
					loaded: true
			};
			case POSTS.REMOVE:
				return {
					data: state.data.filter(x => action.ids.indexOf(x.id) == -1 ),
					processingMessage: null,
					errorMessage: null
				};
			default:
				return state;
    }

}