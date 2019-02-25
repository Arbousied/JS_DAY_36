//EXO 1 #######################################################################
var FooterClick = document.querySelector('footer');
FooterClick.addEventListener("click",ConsolelogClick);
function ConsolelogClick(){
  console.log("clique")
};
//EXO 1BIS ####################################################################
FooterClick.addEventListener("click",HowManyClicks);
let x = 0
function HowManyClicks(){
  x ++
  console.log("clic numero : " + x)
};
//EXO 2 #######################################################################
let Hamburger = document.getElementsByClassName('navbar-toggler')[0];
var NavbarHead = document.getElementById('navbarHeader')
Hamburger.addEventListener("click",RemoveCollapse);
function RemoveCollapse(){
  NavbarHead.classList.toggle("collapse")
};
//EXO 3 #######################################################################
let CardButton = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];
let Card = document.getElementsByClassName('col-md-4')[0];
CardButton.addEventListener("click",RedZone);
function RedZone(){
  Card.style.color = "red";
};
//EXO 4 #######################################################################
let CardButton2 = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1];
let Card2 = document.getElementsByClassName('col-md-4')[1];
CardButton2.addEventListener("click",GreenToggle);
function GreenToggle(){
  if (Card2.style.color === 'green'){
    Card2.style.color = '';
  }
  else
    Card2.style.color = 'green'
}
//EXO 5 #######################################################################

let Bootstrap = document.getElementsByTagName("link");
let Status = 0;
let Header = document.querySelector('header');
Header.addEventListener("dblclick",RipBootstrap)
function RipBootstrap(){
  if (Status === 0){
    Bootstrap.setAttribute("href", " ");
    Status = 1;
  }
  else {
    Bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    Status = 0;
  }
}
