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

    function aire(longueur, largeur){
        let aire =  longueur * largeur
        return aire
    } 

    console.log (aire(3 , 5))

//2°

    function perimetre(longueur, largeur) {
        let perimetre = (longueur + largeur)*2
        return perimetre
    }


//3°

    function aire(base, hauteur) {
        let aire = (base * hauteur)/2
    }

//4°

    function perimetre(cote1, cote2, cote3) {
        let perimetre = cote1 + cote2 + cote3
        return perimetre
    }


//5°

    let kelvins = 1
    let celcius = -273.15

    function kenc(kelvins) {
        let kenc = kelvins - 273.15
        return kenc
    }

//6°

    function perimetre(rayon) {
        let perimetre = 2 * Math.PI * rayon
        return perimetre
    }

//7°

    function aire(rayon) {
        let aire = 2 * Math.PI * rayon**2
        return aire
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
            true
        }
        else {
            false
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