import {PropsWithChildren} from "react";
import {Provider} from "react-redux";
import store from "@/store/store";

export default function ReduxProvider({ children }: PropsWithChildren) {
    return (
        <Provider store={store}>
            { children }
        </Provider>
    )
}