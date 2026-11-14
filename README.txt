MI DEX - PWA PARA IPHONE
========================
Version inicial: catalogo de expansiones, cartas, busqueda, coleccion personal, cantidades, filtros, copia de seguridad JSON.
Fuente de datos: TCGdex https://tcgdex.dev/ - API publica gratuita. El catalogo requiere Internet la primera vez. Las expansiones abiertas se guardan localmente, pero las imagenes externas y expansiones no visitadas pueden necesitar conexion.

INSTALAR EN IPHONE
1. Sube todo el CONTENIDO de esta carpeta a un alojamiento web HTTPS que sirva archivos estaticos (por ejemplo, GitHub Pages, Netlify o Cloudflare Pages).
2. Abre la direccion HTTPS publicada en Safari en tu iPhone.
3. Compartir > Anadir a pantalla de inicio > Abrir como app web > Anadir.
4. La coleccion se guarda localmente en ese dispositivo. Exporta copias de seguridad desde la pestana Mi coleccion.

PRUEBAS EN WINDOWS
Con Python instalado, dentro de esta carpeta: python -m http.server 8000
Visita http://localhost:8000 en el navegador del PC. Para el iPhone, utiliza alojamiento HTTPS publico.

LIMITACIONES
- No se ha implementado el escaner ni precios.
- No se ha probado la ejecucion en un iPhone fisico.
- La API puede variar o no disponer de determinadas cartas en espanol.
- Es una app personal independiente, no afiliada a Dex ni a The Pokemon Company.
- No borres los datos del navegador sin exportar tu coleccion.
