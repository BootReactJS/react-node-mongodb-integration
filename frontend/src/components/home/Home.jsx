import ProductShelf from "./productshelf/ProductShelf.jsx"
import Header from  "../header/Header.jsx";
 

export function Home(){

    const showHeaderComponent =  () => {
        alert("Header Clicked")
    }

    return (
        <div>
            <ProductShelf />
            <ProductShelf />
            <ProductShelf />
            <ProductShelf />

             <button type="submit" onClick={showHeaderComponent}>
                Header
            </button>

            <Header />



        </div>
    );
}
export default Home;