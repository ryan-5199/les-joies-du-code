/**
 *  
//type de variables: number, string
let a = 6; //variable
const b = 2; //constante

//a = 5;

//a = 7;

let vrai = true;
let faux = false;

// Les opérations

let c = b + b;

c = b - a;

const nom = 'LOGAN';

const prénom = ' Ryan';

const nomComplet = nom + prénom;

a += 1;

a++;

a = a + 1;

console.log(a / b);

// scop (environement)

function add(a, b) {
    const result = a + b;
    //
    return result
}

const resultOFAddition = add(8, 12)

const isEqualto20 = a === 20


*/


//1°
    //rectangle

    function airerec(longueur, largeur){
        let airerec =  longueur * largeur
        return airerec
    } 

    console.log (airerec(3 , 5))

//2°

    function perimetrerec(longueur, largeur) {
        let perimetrerec = (longueur + largeur)*2
        return perimetrerec
    }


//3°

    function airetri(base, hauteur) {
        let airetri = (base * hauteur)/2
        return airetri
    }

//4°

    function perimetretri(cote1, cote2) {
        let perimetretri = cote1 + cote2 + Math.sqrt(cote1**2 + cote2**2)
        return perimetretri
    }

    console.log (perimetretri(2, 4))

//5°

    function kenc(kelvins) {
        let kenc = kelvins - 273.15
        return kenc
    }

//6°

    function perimetrecer(rayon) {
        let perimetrecer = 2 * Math.PI * rayon
        return perimetrecer
    }

//7°

    function airecer(rayon) {
        let airecer = 2 * Math.PI * rayon**2
        return airecer
    }

//8°

    function rendu(donner , prix){
        let rendu = donner - prix
        return rendu
    }

//9°

    function vacs(X , Y) {
        let vacs = Y / X
        return vacs
    }

//10°

    function divisible(nbr) {
        if (nbr%2 != 0) {
            return false
        }
        else {
            return true
        }
    }

//11°

    function prem(chaine) {
        let prem = chaine.slice(1)
        return prem
    }
    console.log (prem('chaine'))

//12°

    function der(chaine) {
        let der = chaine.slice(0, chaine.length - 1)
        return der
    }
    console.log (der('chaine'))


/**bonus
conso d'essence 
distance
taille du reservoir
*/

    function plein(conso, distance, taille) {
        if ((conso*taille)/distance <= taille) {
            return true
        }
        else {
            return false
        }
    }

    console.log (plein(3 , 9, 35))