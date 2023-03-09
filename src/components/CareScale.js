
// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

function CareScale(props) {
    /* On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
     const scaleValue = props.scaleValue et
     const careType = props.careType

      On pouvait aussi faire function CareScale({scaleValue, careType}) direectement
     */

    const {scaleValue, careType} = props

    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={() =>
            alert(
                `Cette plante requiert ${quantityLabel[scaleValue]} ${
                    careType === 'light' ? 'de lumière' : "d'arrosage"
                }`
            )
        }>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale