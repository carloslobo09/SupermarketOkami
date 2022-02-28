const parseLocation = function (){
	return location.hash.slice(1).toLowerCase() || '/' // Detectamos la URL de destino
}

const findComponent = function(path, routes) {                         // Buscamos el componente correspondiente a la URL de destino
	return routes.find(route => route.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined; //g=global m=multiline
}

// Función de ruteo
function router() {
	const path = parseLocation();
	const { component = ComponenteError } = findComponent(path, routes) || {}
	$('#app').html(component.render())
}

document.addEventListener('DOMContentLoaded', router)
window.addEventListener('hashchange', router)