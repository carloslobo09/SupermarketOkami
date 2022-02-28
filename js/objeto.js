class Compras {
    constructor(carrito, productos) {
        this.carrito = carrito;
        this.productos = productos;
        let subtot = 0;
        this.verCompra = function () {
            let grilla = "";
            let arraysinduplicados = [... new Set(carrito)]
            for (let i in this.carrito) {
                for (let j in this.productos) {
                    if (this.productos[j].prodid === this.carrito[i]) {
                        subtot += productos[j].precio;
                    }
                }
            }
            for (let i in arraysinduplicados) {
                let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                    return itemId === arraysinduplicados[i] ? total += 1 : total;
                }, 0);
                for (let j in this.productos) {
                    if (this.productos[j].prodid === arraysinduplicados[i]) {
                        grilla += `<tr>  
                                  <td>x ${numeroUnidadesItem}  ${productos[j].nombre}</td>   
                                  <td>$ ${productos[j].precio}</td> 
                                  </tr>`
                    }
                }
            }
            $("#checkout").html(grilla)
        }
        this.verTotales = function () {
            let grilla = `<tr><td>SUBTOTAL</td><td>$ ${this.subtotal().toFixed(0)}</td></tr> 
                         <tr><td>DESCUENTO</td><td>-$ ${this.aplicoDescuento().toFixed(0)}</td></tr>
                         <tr class='blue lighten-4'><td>TOTAL</td><td>$ ${this.total().toFixed(0)}</td></tr>
                         <tr><td colspan="2" rowspan="2" align="center"><br><button  class="btn btn-danger" onclick="VaciarCarrito()">Vaciar lista <i class="fas fa-trash-alt"></i></button><br><br>
                         </td></tr>`
            $("#totales").html(grilla)
        }
        this.subtotal = function () {
            return subtot
        }
        this.aplicoDescuento = function () {
            switch (suma) {
                case 1:
                    return (subtot - (subtot * 0.80))
                    break;
                case 2:
                    return (subtot - (subtot * 0.85))
                    break;
                case 3:
                    return (subtot - (subtot * 0.65))
                    break;
                default:
                    return (0)
                    break;
            }
        }
        this.total = function () {
            return Number(subtot - this.aplicoDescuento())
        }
    }
}