import '../style/Banner.css';
import logo from '../assets/logo.png';

function Banner({children}){
    const titre = "La maison Jungle"
    const currentMounth = new Date().getMonth()
    const isSpring = currentMounth >= 2 && currentMounth <= 5
    const recommendation = isSpring ? (<div>C'est le printemps, rempotez</div>) : (<div>Ce n'est pas le moment de rempoter</div>)
    return  (
            <div className='lmj-banner'>
                {children}
                {
                    /*<img src={logo} alt="la maison jungle" className='lmj-logo'/>
                <h1 className='lmj-titre'> {titre} </h1>
                */}

                {/*recommendation*/}
            </div>
    )
}

/*Syntaxe qui nous epargne d'utiliser les accolades au moment de l'import */
export default Banner