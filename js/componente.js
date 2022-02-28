const ComponenteHome = { // Definimos los Componentes
	render: function () {
		return `
		<div class="container-fluid">
        <div id="imgcarrito"></div>
        <div class="row">
            <div id="intro">
                <img style="position: absolute; width: 160px; left:235px;" src="imagen/logo1.png" >
                <img style="position: absolute; width: 160px; left:900px;" src="imagen/logo2.png" >
                <br><h1 style="font-family: 'Langar', cursive;" id="titulo"></h1><br>
                <p id="contenido"></p>
            </div>
            <div id="primerbloque">
                <div align="center">
                    <table id="table">
                        <thead>
                            <tr>
                                <th>Productos</th>
                                <th>Precio</th>
                                <th>¡Comprar!</th>
                            </tr>
                        </thead>
                        <tbody id="lista">
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="segundobloque" class="d-lg-none">
                <div align="center">
                    <table id="table2">
                        <thead class="thead-dark">
                            <tr>
                                <th>Productos</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody id="checkout">

                        </tbody>
                    </table>
                    <table width=100%>
                        <tbody id="totales">

                        </tbody>
                    </table>
                    <div id="divdesc">
                        <br>
                        <strong><p>Aplicar descuentos: </p></strong>
                        <button class="btn btn-info" onclick="descuento(1)">Club Personal %20</button>
                        <br><br>
                        <button style="background-color: orangered; color:white" class="btn btn-warning"
                            onclick="descuento(2)">Tarjeta Naranja %15</button>
                            <br><br>
                    </div>
                    <br><br>
                    <button class="btn btn-success confirmar" style="height: 20mm;"><h4 style="font-family:cursive;">Confirmar Compra</h4></button>
                </div>
            </div>
        </div>
    </div>
				`
	}
}

const ComponentePagina1 = {
	render: function () {
		return `
		<div class="container-fluid">
        <div class="col-12">
        <div class="noticia">
            <img class="izquierda" src="imagen/qsomos.jpg " width="550px">
            <strong><aside>
                Supermercados ŌKAMI. Todo comenzó su actividad en San Carlos de Bariloche en 1980 con su primera sucursal de la
                calle Moreno y Rolando. Poco a poco fue abriendo sucursales en distintos barrios de la ciudad y ciudades
                vecinas, expandiendo su presencia y consolidando su servicio como supermercado de cercanía.
                No solo se sostuvo a través de las diferentes vicisitudes económicas de todos estos años, sino que siguió
                creciendo y hoy cuenta con 24 bocas distribuidas en el Corredor de los Lagos (Bariloche, Dina Huapi, El
                Bolsón, Lago Puelo, El Maitén, Esquel, Villa La Angostura, Junín de los Andes y San Martín de los Andes).
                Su identidad como empresa regional, la caracteriza por ser una de las más representativas de la zona,
                generando servicio a residentes y turistas, y brindando trabajo a más de 400 empleados directos y a otros
                tantos a través de socios y proveedores de servicio.
                Intentando satisfacer día a día las necesidades de sus clientes y siempre comprometido con su comunidad, el
                Todo cumplió 40 años y como dice su slogan quiere estar siempre «a tu lado».
            </aside></strong>
            <div class="reset"></div>
        </div>
    </div>
				`
	}
}

const ComponenteError = { //Creamos un componente de error, por si las moscas
	render: function () {
		return `
				<div class="red darken-4 white-text center z-depth-3">
					<h1>Error</h1>
					<h5>El elemento al cual intenta acceder, no existe.</h5>
					<br>
				</div>
				`
	}
}

const routes = [ // Establecemos nuestras rutas y sus contenedores
	{
        path: '/',
		component: ComponenteHome
	},
	{
		path: '/pagina1',
		component: ComponentePagina1
	}
]