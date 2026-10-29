import { useContext } from "react";
import { Atrct } from "./A"
export function B(){
    var sharedData = useContext(Atrct);
    return (
        <section>
            <span>Data shared is {sharedData}</span>
        </section>
    );
}
export default B;