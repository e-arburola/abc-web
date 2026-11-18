# abc-web
Landing Page 

## Agregar una publicación en /info/

1. Copie `info/index.html` como `info/DDMMAA-titulo-corto.html` (por ejemplo `info/181126-anuncio-hacienda-cambio.html`).
2. En la copia, cambie el `<title>`, deje solo el contenido dentro de `<main>` y use esta estructura:

```html
<main class="container legal">
  <p class="muted"><time datetime="2026-11-18">18 de noviembre de 2026</time></p>
  <h1>Título de la publicación</h1>
  <p>Contenido.</p>
  <section class="legal-sec">
    <p><strong>Fuente:</strong> <a href="https://enlace-oficial">nombre de la fuente</a>, consultada el 18 de noviembre de 2026.</p>
  </section>
</main>
```

3. En `info/index.html`, agregue una entrada dentro de `<ul class="info-list">`, arriba de las demás:

```html
<li><time datetime="2026-11-18">18 de noviembre de 2026</time><a href="181126-anuncio-hacienda-cambio.html">Título</a><p>Resumen breve.</p></li>
```

4. Verifique el enlace de la fuente antes de publicar. Para temas tributarios, use solo fuentes oficiales.

