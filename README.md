# Notify.js

Este es un plugin para la gestión de notificaciones responsivas y minimalistas estilo ```toast```:


## Ejemplos de uso:

Este plugin necesita [jQuery](https://jquery.com/download/).

Se usaron las herramientas de [TinyColor](https://github.com/bgrins/TinyColor) para el manejo de colores.

### Puedes probar el demo [aquí](https://myei.github.io/notify.js/).

```html
<script src="/path/to/jquery.min.js"></script>
<script src="/path/to/notify.min.js"></script>
```

#### Opciones:

```javascript
// Mostrando valores por defecto
var opciones = {
	color: '#323232',	// random, hex, rgb(a), nombre
	position: 'right',	// right, left
	rounded: false,		// boolean
	content: null,		// String del mensaje
	callback: null,		// Función ejecutada al destruir el mensaje
	timeout: 4000		// Tiempo para auto destrucción de notificación
}
```
#### Creando notificaciones:

***Básicas:***

```javascript
Notify('Esta es una notificación');  
```

***Personalizadas:***

```javascript
Notify({
	content: 'Hola usuario',
	color: 'random',
	timeout: 1000
})

Notify({
	content: 'Hey you...',
	color: 'pink',
	position: 'left',
	rounded: true
})
```

### Usando callbacks

```javascript
// Definición local:
Notify({
	content: 'Hola usuario',
	color: 'blue',
	timeout: 5000,
	rounded: true,
	position: 'left',
	callback: function() {
		alert('Mensaje desde callback');
	}
})

// Reutilizando funciones:
Notify({
	content: 'Hola usuario',
	color: 'blue',
	timeout: 5000,
	callback: foo
})

var foo = function () {
	alert('Mensaje de prueba...');
}
```
