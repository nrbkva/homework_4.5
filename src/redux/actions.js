import { types } from "./types";

export const changeIncrementFN = () => ({ type: types.INCREMENT });
export const changeDecrementFN = () => ({ type: types.DECREMENT });

export function changeName(name)
{
    return {
        type: types.CHANGE_NAME,
        payload: name
    }
}

export function changeAge(age)
{
    return {
        type: types.CHANGE_AGE,
        payload: age
    }
}

export function changeGender(gender)
{
    return {
        type: types.CHANGE_GENDER,
        payload: gender
    }
}