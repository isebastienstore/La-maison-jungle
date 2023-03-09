import CareScale from "./CareScale";
import '../style/PlantItem.css';

const PlantItem = ({id, cover, name, light, water, price}) => {
    return(
        <li className='lmj-plant-item' onClick={(e) => handleClick(name)}>
            <span className='lmj-plant-item-price'>{price} £</span>
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover'/>
            {name}
            {/*(plant.isBestSale && plant.category === "classique") && <span>🔥</span> on pouvait aussi ecrire l'operation ternaire : (plant.isBestSale && plant.category === "classique") ? <span>🔥</span> : null*/}
            {/*plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>*/}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>

        </li>
    )
}

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

export default PlantItem