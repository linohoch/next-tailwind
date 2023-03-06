'use client'

import React from "react";
import ReduxProvider from "@/store/ReduxProvider";

export default function ProvidersWrapper({ children }:{children:React.ReactNode}) {
    return (
        <ReduxProvider>
            {children}
        </ReduxProvider>
    )
}