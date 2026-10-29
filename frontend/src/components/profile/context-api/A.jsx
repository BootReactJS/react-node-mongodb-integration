import React from 'react'
import B from "./B"

import { useState }  from "react"
import { createContext } from "react";

export function A(){
   var [ change, setChange]  =  useState("buffer")
    
    return (
        <section>
            <Atrct value={change}>
                <B />

            </Atrct>

        </section>
    );
}
export default A;

export const Atrct = createContext();