import { setItem } from "../../utlis/utlis"
import type from "../type"

const initialState = {
    appIntro:false
}

export default function appIntro(state = initialState, action) {

    switch (action.type) {

        case type.APP_INTRO:
            {
                setItem('data', state)
                return state = false
            }
        default: return state
    }
}