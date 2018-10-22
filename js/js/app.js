
// finir une instruction avec ;
//alert('alert depuis fichier external');

// commentaire monoligne

/*
    commentaire
    multi
    lignes

*/


// declarer une variable dans javascript
var nomDeLaVar;
var nomDeLaVar = "hello";

// exemple:
var X = 25;

// declarer plusieurs variables en meme temps
var a = "azerty", b = true, c = 10.5;

// declarer une variable vide
var z = '';
z = "qwerty";

// montrer la valeur de chaque var dans Console
console.log(`${nomDeLaVar} \n${X} \n${a} \n${b} \n${c} \n${z}`);

// 
var t = null, u = NaN, undefined, tabs = [];

// typeOf ();

//----------------8<-------------[ Exercice 1 ]------------------//
//---------------------------------------------------------------//
//Cree une variable de chaque type puis lui reaffecte une valeur //
//de type differente.--------------------------------------------//
//Afficher le resultat dans la console---------------------------//
//---------------------------------------------------------------//
//----------------8<-------------[ Exercice 1 ]------------------//

// var type string
var hello = "hello";

// var type int
var inte = 5;

// var type boolean
var loveJs = true;

// var type float
var num = 7.4;

// changer la valeur de chaque var
hello = "hello_2.0";
inte += inte; // 10
loveJs = false;
num = num * 5;

// montrer le resultat dans Console
console.clear();
//console.log(`${hello} \n${inte} \n${loveJs} \n${num}`);
console.log(hello + ' ' + typeof (hello) + ' \n' + inte + ' ' + typeof (inte) + ' \n' + loveJs + ' ' + typeof (loveJs) + ' \n' + num + ' ' + typeof (num) + ' \n');

//////////////
// calcules //
//////////////

var x = 5, y = 10, z = -2;

// addition
x += 1; console.log(x);

// soustraction
x -= 2; console.log(x);

// multiplication
y *= 2; console.log(y);
var multiplication = x * y; console.log(multiplication);

// division
var division = y / z; console.log(division);

// modulo - le reste de la division
var modulo = 13 % 3; console.log(modulo);

// conditions

// if () {} | else {}
// operateurs de comparation: 
//  ==: Est egal
//  ===: Est egal en valeur et type
//  !=: Est different de
//  !==: Est different en valeur et en type
//  <: Strictement inferieur
//  >: Strictement superieur
//  <=: Inferieur ou egal
//  =>: Superieur ou egal
//  &&: and
//  ||: or

//----------------8<-------------[ Exercice 2 ]------------------//
//---------------------------------------------------------------//
//- Effectuer une comparison des variables x et y ou => x=4 et---//
// y="4" pour chaque comparateur, renvoye le tous dans une-------//
// alert().------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//----------------8<-------------[ Exercice 2 ]------------------//

// declaration de variables:
var x = 4, y = "4";

// console;
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);

//alert;
/*
alert(x == y);
alert(x === y);
alert(x != y);
alert(x !== y);
alert(x < y);
alert(x > y);
alert(x <= y);
alert(x >= y);
*/

/////////////
// Correction //
/////////////
/*
 var 
    one = x == y, 
    two = x === y, 
    three = x != y, 
    four = x !== y, 
    five = x < y, 
    six = x > y, 
    seven = x <= y, 
    eight = x >= y;

 alert(
       one + '\n' 
     + two + '\n' 
     + three + '\n' 
     + four + '\n' 
     + five + '\n' 
     + six + '\n' 
     + seven + '\n' 
     + eight
);
*/
// effacer la console
console.clear();
/*
// condition 
var a = 12.33, b;

if (a > 15) {
    // code a executer
    alert('il est midi');
}   
    else if (a === "12.33" && a !== "12.33") {
    // code a executer si l'autre condition est verifier
    alert('je suis dans la deuxieme condition');
}   
    else if (a === 12.33 || a == "12.33") {
    // code a executer si l'autre condition est verifier
    alert('je suis dans la 3eme condition');
}   else {
    // code a executer si aucune condition n'est verifier
    alert('fin de condition');
}
*/
//----------------8<-------------[ Exercice 3 ]------------------//
//---------------------------------------------------------------//
//- Cree une condition qui si var X est un nombre, quil est -----//
// inferieur ou egal a 10, quil est du meme type que Y alors-----//
// on fait une alert qui renvoi un msg quelconque=---------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//----------------8<-------------[ Exercice 3 ]------------------//

/*var X = 5,
    Y = 10;

if (typeof(X) == "number" && typeof(Y) == typeof(X) && X <= Y) {
    alert('X <= Y : X est un nombre et Y et aussi un nombre')
}*/

/*
var x = 5, y = 8;

if(x<=10){
    if(typeof(x) == typeof(y)){
        alert('Msg');
    }
}

if(!x) {
    // executer code
}
*/



//----------------8<-------------[ Exercice 4 ]------------------//
//---------------------------------------------------------------//
//- Cree une variable heure comme suit: var heure = Number( -----//
// prompt("Entrez une valeur comprise entre 0 et 24.)------------//
// Cree une condition qui si heure ce situe entre 0 et 12 re-----//
//envoi une alerte 'c'est le matin' si elle ce situe entre 12 et-//
// 17 "C'est l'apresmidi" entre 17 et 24 "c'est le soir"---------//
//---------------------------------------------------------------//
//----------------8<-------------[ Exercice 4 ]------------------//
/*
var heure = Number(prompt("Entrez une valeur comprise entre 0 et 24."));

if (heure < 12 && heure >= 0) {
    alert("C'est le matin")
}
if (heure <= 17 && heure >= 12) {
    alert("C'est l'apres-midi")
}
if (heure <= 24 && heure > 17) {
    alert("C'est le soir")
}
else {
    //alert("Error!");
}

/////////////////
// SWITCH CASE //
/////////////////

/* Switch c'est semblable a une condition a la difference que celui ci 
    ne peut tester que l'egalite des valeurs 

switch(heure) {
    case 0:
        alert("Il est 0H00");
        break;
    case 1:
        alert("Il est 1H00");
        break;
    case 2:
        alert("Il est 2H00");
        break;
    case 3:
        alert("Il est 3H00");
        break;
    case 4:
        alert("Il est 4H00");
        break;
    case 5:
        alert("Il est 5H00");
        break;
    case 6:
        alert("Il est 6H00");
        break;
    case 7:
        alert("Il est 7H00");
        break;
    case 8:
        alert("Il est 8H00");
        break;
    case 9:
        alert("Il est 9H00");
        break;
    case 10:
        alert("Il est 10H00");
        break;
    case 11:
        alert("Il est 11H00");
        break;
    case 12:
        alert("Il est 12H00");
        break;
    default:
        alert('error!')
}
*/

//----------------8<-------------[ Exercices ]-------------------------------//
//---------------------------------------------------------------------------//
//Exercice: Créez 2 variables nom_etudiant et prenom_etudiant auxquelles vous affecterez respectivement votre nom et prénom. Vous afficherez dans une fonction alert() le message suivant : "Bonjour, je m'appelle prenom_etudiant nom_etudiant".
//---------------------------------------------------------------------------//

//Exercice: Exercice quasi identique au précédent, mais vous n'affectez pas les nom et prénom dans la source, mais en questionnant l'utilisateur pour connaitre son nom et son prénom.
//---------------------------------------------------------------------------//

//Exercice: Créez 2 variables nombre1 et nombre2 auxquelles vous affecterez respectivement des valeurs numériques. Vous en calculerez la somme dont vous affecterez la variable somme et vous afficherez dans une fonction alert() le message suivant : "La somme de nombre1 et de nombre2 est resultat".
//---------------------------------------------------------------------------//

//Exercice: Exercice quasi identique au précédent, mais vous n'affectez pas nombre1 et nombre2 dans la source, mais en questionnant l'utilisateur pour connaitre les deux valeurs numériques nombre1 et nombre2.
//---------------------------------------------------------------------------//

//Exercice quasi identique au précédent, mais sans affecter nombre1 et nombre2 dans la source, mais en questionnant l'utilisateur pour connaitre les deux valeurs numériques nombre1 et nombre2, vous effectuerez les 4 opérations et donnerez 4 messages pour les résultats (addition, soustraction, multiplication et division).
//---------------------------------------------------------------------------//

//Exercice: Ecrire le code d'un fichier HTML qui permet de saisir trois notes (DC1, DC2, DS) puis calcule et affiche la moyenne.
//---------------------------------------------------------------------------//

//Exercice: Ecrire le code d'un fichier HTML qui permet de saisir le numéro du mois et l’année  puis affiche le nombre de jours.
//---------------------------------------------------------------------------//

//Exercice: Ecrire le code d'un fichier HTML permettant d’afficher la table de multiplication d'un entier compris entre 1 et 10.
//---------------------------------------------------------------------------//
/*
Exercice: Échanger les valeurs de deux variables. Si au départ a=7 et b=3, il faudrait qu'à la fin b=7 et a=3.
  Cet exercice semble facile si l'on fait intervenir provisoirement une troisième variable c, qui permettra les étapes :
  1.- lire a et b
  2.- c prend la valeur de a
  3.- a prend la valeur de b
  4.- b prend la valeur de c (ancienne valeur de a)     
  a     b     (c)
  a     b     (a)
  b     b     (a)
  b     a     (a)

  Puis résoudre le même problème sans faire appel à une troisième variable.
  Une suggestion ? La voici :
  1.- lire a et b
  2.- a prend la valeur de a+b
  3.- b prend la valeur de a-b
  4.- a prend la valeur de a-b     
  a                 b
  a+b             b
  a+b             (a+b)-b=a
  (a+b)-a=b     a
*/

/**
Que vaudront chacune des variables a, b et c à la fin du script suivant :
a = "HTML";
b = "PHP";
c = a;
a = "Javascript";
b = a;

Et dans ce cas-ci :
a = "HTML";
b = "PHP";
a = "Javascript";
c = a;
b = a;
**/
//----------------8<-------------[ Exercices ]-------------------------------//

// EXO1
//var prenom_etudiant = 'Mohamed', nom_etudiant = 'AAROUS';
//alert("je m'appelle " + prenom_etudiant + ' ' + nom_etudiant + ".");

// EXO2
//var prenom_etudiant = String(prompt("Entrez votre nom et prenom!"));
//var splitted = prenom_etudiant.split(' ');
//console.log(splitted);
//alert("je m'appelle " + splitted[0] + ' ' + splitted[1]);

//Exercice3: Créez 2 variables nombre1 et nombre2 auxquelles vous affecterez respectivement des valeurs numériques. Vous en calculerez la somme dont vous affecterez la variable somme et vous afficherez dans une fonction alert() le message suivant : "La somme de nombre1 et de nombre2 est resultat".
/*
var nombre1 = parseInt(Math.random() * 10), 
    nombre2 = parseInt(Math.random() * 20);
    resultat = nombre1 + nombre2;
alert("La somme de nombre1 => " + nombre1 + " et nombre2 => " + nombre2 + " est " + "\n" + resultat);
*/
//Exercice4: Exercice quasi identique au précédent, mais vous n'affectez pas nombre1 et nombre2 dans la source, mais en questionnant l'utilisateur pour connaitre les deux valeurs numériques nombre1 et nombre2.
/*
var nombre1 = Number(prompt("Nombre 1"));
var nombre2 = Number(prompt("Nombre 2"));

var resultat = nombre1 + nombre2;
alert("Le resultat de la somme entre nombre1 => " + nombre1 + " nombre2=> " + nombre2 + " Est egale a: \n" + resultat);
*/
//Exercice5 quasi identique au précédent, mais sans affecter nombre1 et nombre2 dans la source, mais en questionnant l'utilisateur pour connaitre les deux valeurs numériques nombre1 et nombre2, vous effectuerez les 4 opérations et donnerez 4 messages pour les résultats (addition, soustraction, multiplication et division).
/*
var nombre1 = Number(prompt("Nombre 1"));
var nombre2 = Number(prompt("Nombre 2"));

var resultat1 = nombre1 + nombre2;
var resultat2 = nombre1 - nombre2;
var resultat3 = nombre1 / nombre2;
var resultat4 = nombre1 * nombre2;
alert("Le resultat d'operations entre nombre1 => " + nombre1 + " nombre2=> " + nombre2 + 
" Est: \n addition " + resultat1 + 
"\n soustraction " + resultat2 + 
"\n division " + resultat3 + 
"\n multiplication " + resultat4 + "\n");*/

//Exercice: Ecrire le code d'un fichier HTML qui permet de saisir trois notes (DC1, DC2, DS) puis calcule et affiche la moyenne.

/*
function moyenne() {
    var case1 = parseFloat(document.getElementById('case1').value);
    var case2 = parseFloat(document.getElementById('case2').value);
    var case3 = parseFloat(document.getElementById('case3').value);
    var resultatInput = document.getElementById('resultat');
    var somme = case1 + case2 + case3;
    console.log(somme);
    var resultat = somme / 3;
    console.log(resultat);
    resultatInput.value = resultat;
    console.log(resultat);
}
*/
//console.log(case1 + case2 + case3);

//Exercice7: Ecrire le code d'un fichier HTML qui permet de saisir le numéro du mois et l’année  puis affiche le nombre de jours.
/*
var mois = Number (prompt("Entrez un mois en chiffre")), annee = Number(prompt("Entrez L'annnee"));

switch(mois) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12: j = 31; break;
    case 4: case 6: case 9: case 11: j = 30; break;
    case 2: if(annee%4==0) {
        j= 29;
    } else {
        j= 28;
    }
    break;
}

alert("Le mois de " + mois + " a " + j);

//Exercice: Ecrire le code d'un fichier HTML permettant d’afficher la table de multiplication d'un entier compris entre 1 et 10.

var n = Number(prompt("Saisir un entier"));
*/