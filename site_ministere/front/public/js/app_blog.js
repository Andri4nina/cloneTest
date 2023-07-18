
//fonction de recherche 
const search = document.querySelector('.searchstyle input');

// Sélection de toutes les lignes de tableau
const table_rows = document.querySelectorAll('.blog_list tbody tr');

search.addEventListener('input', searchTable);

function searchTable() {
  let countrow=0
  let restrow =0
  table_rows.forEach((row, i) => {
    let table_data = row.textContent.toLowerCase();
    let search_data = search.value.toLowerCase();
    restrow = i + 1
    // Masquer les lignes qui ne correspondent pas à la recherche
    row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
    row.style.setProperty('--delay', i / 25 + 's');
    if(table_data.indexOf(search_data) < 0){
      countrow+=1
    }

  });

    //S'il n'y a pas de ligne affichable 
    if(restrow-countrow == 0){
      document.querySelector("#no_match").classList.remove("hidden")
    }else{
      document.querySelector("#no_match").classList.add("hidden")
    }


  // Appliquer un style de couleur alterné aux lignes visibles
    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
    visible_row.style.backgroundColor = i % 2 == 0 ? 'transparent' : '#0000000b';
  });

}


// Récupérer toutes les cases à cocher du tableau
const checkboxes = document.querySelectorAll('.blog_list tbody tr td input[type="checkbox"]');
const enregistrerBtn = document.querySelector('#modif_checkbox');

// Ajouter un écouteur d'événements pour le changement d'état des cases à cocher
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // Vérifier si au moins une case à cocher est cochée
    const isChecked = Array.from(checkboxes).some(function(checkbox) {
      return checkbox.checked;
    });

    // Vérifier si au moins une case à cocher est cochée
    if (isChecked) {
      // Afficher le bouton Enregistrer
      enregistrerBtn.classList.remove("hidden");
    } else {
      // Masquer le bouton Enregistrer
      enregistrerBtn.classList.add("hidden");
    }
  });
});
















// affichage de creation/modification
const CRUD_liste_blog = document.querySelector("#CRUD_liste_blog")
const CRUD_creation_blog = document.querySelector("#CRUD_creation_blog")
const CRUD_modification_blog = document.querySelector("#CRUD_modification_blog")
const CRUD_publication_blog = document.querySelector("#CRUD_publication_blog")
const CRUD_contenu_blog = document.querySelector("#CRUD_contenu_blog")

function add_blog(){
    CRUD_liste_blog.classList.add("hidden");
    CRUD_creation_blog.classList.remove("hidden");

}

function return_add_blog(){
    CRUD_liste_blog.classList.remove("hidden");
    CRUD_creation_blog.classList.add("hidden");
}


function modif_blog(){
  CRUD_liste_blog.classList.add("hidden");
  CRUD_modification_blog.classList.remove("hidden");

}

function return_modif_blog(){
  CRUD_liste_blog.classList.remove("hidden");
  CRUD_contenu_blog.classList.add("hidden");
}




function publi_blog(){
  CRUD_liste_blog.classList.add("hidden");
  CRUD_publication_blog.classList.remove("hidden");

}

function return_publi_blog(){
  CRUD_liste_blog.classList.remove("hidden");
  CRUD_publication_blog.classList.add("hidden");
}


function return_contenu_blog(){
  CRUD_liste_blog.classList.remove("hidden");
  CRUD_publication_blog.classList.add("hidden");
}