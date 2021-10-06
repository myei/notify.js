# Notify.js

Este es un plugin ligero, personalizable y facil de implementar para la gestión de notificaciones responsivas y minimalistas estilo ```toast```:

>Hecho en `Vanilla Js`

Se integró [TinyColor](https://github.com/bgrins/TinyColor) para el manejo de colores.


## Ejemplos de uso:

### Puedes probar el demo [aquí](https://myei.github.io/notify.js/).


Instalación:
```html
<script src="/path/to/notify.min.js"></script>
```

#### Opciones:

```javascript
// Mostrando valores por defecto
var opciones = {
	color: '#323232',		// random, hex, rgb(a), nombre
	position: 'right',		// right, left
	rounded: 0,				// int, cantidad de pixeles a redondear los bordes
	content: null,			// String del mensaje
	callback: null,			// Función ejecutada al destruir el mensaje
	speedAnimations: 200	// Velocidad de las animaciones (fadeIn/fadeOut)
	timeout: 4000			// Tiempo para auto destrucción de notificación
}
```
## Creando notificaciones:

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
