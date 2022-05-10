document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault(); //vérification des évenements
    console.log(e.target); //objet, méthode des paramètres
    //déclarer les variables
    let msg, x, total, ref, letter, texts, parents;

    msg = new String("chargé");
    x = null;
    console.log(typeof x);

    const User = [{
        nom: "Bob",
        age: 35,
        ville: "NY"
    }, {
        nom: "Tom",
        age: 25,
        ville: "Boston"
    }];
    const tables = ["html", "css", true];

    //window.alert(msg) //analyse     
    console.table(User[1].nom);
    /*
    type de donnée
    string
    int
    number
    float
    double
    boolan
    */
    total = 0;
    console.log(total);
    console.log(total = total + 1);

    /*
    BDD NoSQL =>Firebase, Mongo DB, Couch DB
    jSON =>
    DOM => Document Obejct Model
     document.querySelector("html").getAttribute("lang").innerText
     backquote => `` '', ""
     */
    const el = document.querySelector("html");
    letter = document.getElementsByTagName("h1");
    //console.log(el.getAttribute("lang").length)
    console.log(letter[0].innerText += ` en version ${el.getAttribute("lang")}`);
    console.table(el.childNodes[0].children);

    /* afficher le contenu de title */
    ref = "title";
    const contents = document.querySelector(ref);
    console.log(contents.childNodes[0].nodeValue);
    contents.innerText = `Cours ES 6 : facile`;
    letter[0].textContent = ` ${contents.innerText}`;
    console.log(letter[0]);
    /*
    =
    +
    -
    /
    %
    ++
    --
    += ajouter
    -=
    ==
    ===
    <=>
    *
    ||
    &&
     */
    const xNumber = 0;
    const yNumber = "0";
    console.log(typeof yNumber);

    xNumber === yNumber ? console.log(true) : console.log(false);
    let chiffre = 7;
    console.log(chiffre % 3);
    //ajouter un attribut sur l'élément span
    texts = document.querySelector("p");
    console.log(texts);
    //    texts.setAttribute("class","appear")
    //    texts.classList.remove("appear")
    const btn = document.querySelector("footer");

    btn.addEventListener("click", () => {
        console.log("ok");
        // texts.setAttribute("class","desappear")
        texts.classList.toggle("desappear");
    });
    btn.innerText += ` ${new Date().getFullYear()}`;
    console.log(new Date());

    //test parent
    parent = document.querySelector("section");
    let elements = document.createElement("ul");
    //ajouter élément dans section
    parent.appendChild(elements);
    console.log(parent.children);
    //object
    const lang = {
        nom: "C++",
        type: "POO",
        statut: true
    };
    for (let rows in lang) {
        let value = lang[rows];
        elements.innerHTML += `<li>
                                ${rows} : 
                                ${value}
                                </li>`;
        console.log(rows, value);
    }
});