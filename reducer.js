export const initialState = {
    user:null,
    playlists: [],
    playing: false,
    item: null,
    // token:"BQBvkJ0dHTQt_R_jvqkL4ppXnQZgH90Y-6bvRI0Pp-dzH4Trnot7QNwYfRaTHyldO2MyZdbbQgbGnobyH6KojPlCKvnReDJ3587z_UElZty-R5fPlh_lt7PyZBSJS8EO66TWqo9HXY-UZLXjBg1ZVCZTxGncsw4jidiFg06RmJMSnuNX",
};

const reducer= (state , action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                }
                case  'SET_PLAYLISTS':
                    return {
                        ...state,
                        playlists: action.playlists,
                    };
                case 'SET_DISCOVER_WEEKLY':
                     return {
                        ...state,
                        discover_weekly: action.discover_weekly,
                    };
            default:
                return state;
    }
}

export  default reducer;