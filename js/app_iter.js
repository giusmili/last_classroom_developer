document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let compteur = 10;
    let i = 0;
    /*for(i; i < compteur; i++){
        console.log(i)
    }*/
    /*do{
        i = i+1
        console.log(i)
    }while(i < compteur)*/
    while (i < compteur) {
        console.log(i);
        i++;
    }
    //tableaux

    const tables = ["Java", 1995, true];
    console.table(tables);
    console.log(tables.length);
    /* for(rows in tables){
        let value = tables[rows]
        console.log(rows, value)
    } */
    tables.map((element, key) => {
        console.log(key, element);
    });
    //
    const Student = {
        nom: "Lee",
        prenom: "Bruce",
        ville: "LA"

    };
    console.table(Student);
    //afficher clé et valeur de Student
    for (let index in Student) {
        let values = Student[index];
        console.log(index, values);
    }
    //méthode split()
    let chaine = "Hello ça va?";
    const printout = chaine.split(" ");

    console.table(printout);

    printout.includes("salut") ? //expression ternaire
    console.log(true) : console.log(false);

    //tableau et traitement
    let saisie_notes_1, saisie_notes_2, saisie_notes_3, note, moyenne, resultat;
    let nombre = 3;

    const notes = [];
    saisie_notes_1 = Number(prompt("saisir votre note"));
    saisie_notes_2 = Number(prompt("saisir votre note"));
    saisie_notes_3 = Number(prompt("saisir votre note"));

    note = 0;
    note += saisie_notes_1 + saisie_notes_2 + saisie_notes_3;
    moyenne = 3;
    resultat = note / moyenne;
    console.log("Moyenne = " + resultat.toFixed(2));

    notes.push(saisie_notes_1, saisie_notes_2, saisie_notes_3);
    console.table(notes);

    /*  let sum;
     let tab = [10,12,10]
     sum = 3
      const total = tab.reduce(
          (a, b) => a + b
        );
       let calc = total / sum
      console.log(calc.toFixed(2));
    */
});