import "./Banner.css"
export function Banner( {variable} ){
    return (
        <div className="banner">
            <img src={variable} width="100%" height="100%" />
        </div>
    );
}
export default Banner;