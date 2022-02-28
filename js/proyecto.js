let carrito = [];
let changuito = "";
let productos = [];

document.body.onload = function () {
    document.body.style.backgroundColor = localStorage.backgroundColor;
}
document.body.style.backgroundColor = "lightgray";

let contenido = document.getElementById("contenido");
let titulo = document.getElementById("titulo");
let table = document.getElementById("table");
let nombre = document.getElementById("nombre");
let lista = document.getElementById("lista");
let intro = document.getElementById("intro");
let primerbloque = document.getElementById("primerbloque");
let segundobloque = document.getElementById("segundobloque");
let table2 = document.getElementById("table2");
let divdesc = document.getElementById("divdesc");

titulo.innerText = "SUPERMERCADO ŌKAMI";
contenido.innerText = "Comprá desde donde quieras, pero siempre con las mejores ofertas. Aprovechá todas las ofertas. Comprá desde la tranquilidad de tu casa. Compras Online. AhorraMes. Precios cuidados. Mega Ofertas. Los mejores precios. Envíos a domicilio. Servicios: Envíos a domiclio., Ofertas."
table.classList.add("table", "table-striped", "table-hover");
intro.classList.add("col-12");
intro.align = "center";
intro.style.fontFamily="cursive";
primerbloque.classList.add("col-12");
segundobloque.classList.add("col-3");
table2.classList.add("table", "table-sm");
totales.classList.add("table", "table-sm", "table-dark");
nombre.addEventListener("mouseover", () => nombre.style.cursor = "pointer")
divdesc.style.backgroundColor="lightgray";

function cargarnombre() {
    cnombre = prompt("Ingrese su nombre por favor: ");
    nombre.innerText = cnombre;
}
let grilla = "";
window.onload = function cargarproductos() {
    $("#imgcart").fadeOut(1, function () {
    })
    cargoLista();
}
function agregarProd(prodid) {
    carrito.push(prodid)
    muestroCheckout();
    mostrar_ocultar();
    animacioncarrito();
}
function mostrar_ocultar() {
    if (carrito.length > 0) {
        primerbloque.classList.remove("col-12");
        primerbloque.classList.add("col-9")
        segundobloque.classList.remove("d-lg-none");
        if (carrito.length == 1) {
            $("#segundobloque").fadeOut(1, function () {
                $(this).fadeIn(1000)
            })
        }
    }
}
var iddesc = [];
let suma = 0;
function descuento(desc) {
    let existe = false
    for (let i in iddesc) {
        if (iddesc[i] == desc) {
            alert("Ya aplicaste este descuento!")
            existe = true
            break
        }
    }
    if (existe == false) {
        iddesc.push(desc);
        switch (desc) {
            case 1:
                suma++
                break;
            case 2:
                suma = suma + 2
                break
            default:
                break;
        }
    }
    changuito.aplicoDescuento();
    muestroCheckout();
}
function animacioncarrito() {
    $("#imgcart").fadeIn(900, function () {
        $(this).fadeOut(900)
    })
}
let $imgcart = document.querySelector('#imgcarrito');
let miImage = document.createElement('img');
miImage.setAttribute('id', 'imgcart');
miImage.setAttribute('src', 'imagen/carrito.png');
miImage.style.position = "fixed";
miImage.style.zIndex = "999";
miImage.style.top = "30%";
miImage.style.left = "45%";
miImage.style.width = "150px";
$imgcart.appendChild(miImage);

let $busqueda = document.querySelector('#busqueda');
let miNodo = document.createElement('input');
miNodo.classList.add("form-control");
miNodo.setAttribute('placeholder', 'Ingrese los valores a buscar');
miNodo.setAttribute('id', 'myInput');
miNodo.style.position = "absolute";
miNodo.style.width = "300px";
miNodo.style.top = "10px";
miNodo.style.left = "10px";
$busqueda.appendChild(miNodo);

$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#lista tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


function cargoLista() {
    let HTMLCard = "";
    $.ajax({
        url: "js/api.json",
        dataType: "json",
        success: function (response) {
            productos = response
            $.each(productos, function (i) {
                HTMLCard += `<tr>
             <td><img src='${productos[i].imagen}' width='100px'>${productos[i].nombre}</td>
             <td>$${productos[i].precio}</td>
             <td><button class='btn' onclick='agregarProd(${productos[i].prodid})'><i id='cart' class='fas fa-cart-plus fa-2x'></i></button></td>
             </tr></tr>`
            })
            $("#lista").html(HTMLCard)
        },
        error: function () {
            console.error("Ocurrió un error... :(")
            HTMLCard = `<tr>  
                         <td colspan='3'><h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4><td>
                      <tr>`
            $("#lista").html(HTMLCard)
        }
    })
}
function VaciarCarrito() {
    carrito=[];
    muestroCheckout();
}

$(document).ready(function(){
	$(".confirmar").on("click", function(e){
		e.preventDefault();
		var urlDir=$(this).attr("hsref");
		swal({
		  title: '¿Desea realizar la compra?',
          text: "Click en confirmar si desea realizarla, cancelar para continuar con la compra.",
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Confirmar',
		  cancelButtonText: 'Cancelar'
        })
        .then(function(){
            location.href="http://127.0.0.1:5500/index.html";
        });
        
	});
});