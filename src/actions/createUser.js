// ACTION TO BE PERFORMED ACCORDING TO THEIR TYPE

export const createdUser = ( userData ) => {
    console.log(userData);
    return {
        type : 'USERCREATED',
        payload: userData   
    };
}