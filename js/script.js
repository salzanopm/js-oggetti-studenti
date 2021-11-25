// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo 
// oggetto studente inserendo nell’ordine: nome, cognome e età.


// [x] Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

const student = {
    nome: 'Paolo',
    cognome: 'Salzano',
    eta: 27
}

//  [x] Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(let key in student) {
    console.log(student[key]);
}

// [x] Creare un array di oggetti di studenti.
const studenti =
[
    {
      
        nome: 'Giacomo',
        cognome: 'Leopardi',
        eta: 20
    },
    {
        
        nome: 'Italo',
        cognome: 'Svevo',
        eta: 21
    },
    {
        
        nome: 'Francesco',
        cognome: 'Bergoglio',
        eta: 23
    }
]
// controllo array studenti
// console.log(studenti);

// [x] Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for(let key in studenti){
console.log(studenti[key].nome);
console.log(studenti[key].cognome)
}

// [x] Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo
// oggetto studente inserendo nell’ordine: nome, cognome e età.

// dichiaro variabili da inserire dentro oggetto
let newNome;
let newCognome;
let newAge;

    // avviso l'utente per l'inserimento dati nuovo studente
    alert('inserisci un nuovo studente')

    let thisNewNome = prompt('inserisci il nome');
    
    let thisNewCognome = prompt('inserisci il cognome ');
    
    let thisNewAge = prompt("inserisci l'eta");
    // nuovo oggetto
    const newStudent = {
        nome: thisNewNome,
        cognome: thisNewCognome,
        eta: thisNewAge
    }
    // pusho nuovo oggetto dentro array studenti
    studenti.push(newStudent)
// stampo array per controllo inserimento nuovo oggetto
console.log(studenti)

