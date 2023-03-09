
import {plantList} from "../datas/plantList";
import '../style/ShoppingList.css';
import PlantItem from './PlantItem';
import Categories from "./Categories";
import {useState} from "react";

const ShoppingList = ({cart, updateCart}) => {
   /*
    *includes() détermine si un tableau comprend une certaine valeur parmi ses entrées, en renvoyant
    *  true ou false selon le cas.
    *
    * La méthode reduce() exécute une fonction de réduction (que vous fournissez) sur chaque élément
    *  du tableau, ce qui produit une valeur de sortie unique.
    La fonction de réduction prend quatre arguments :
    Accumulateur
    Valeur actuelle
    Index courant
    Tableau source
    La valeur renvoyée par la fonction de réduction est affectée à l'accumulateur, dont la valeur est mémorisée à chaque itération dans le tableau, et devient finalement la valeur finale unique.

    Traduit avec www.DeepL.com/Translator (version gratuite)
    */
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )


    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter( (plant) => plant.name !== name )
            updateCart([...cartFilteredCurrentPlant, { name, price, amount: currentPlantSaved.amount + 1 } ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, light, water, price, category}) =>
                    !activeCategory || category === activeCategory ? (
                    (<div key={id}>
                        <PlantItem
                            id={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            price={price}
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>) ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList