# restful

# API TableREST

Esta es una API RESTful simple construida con Express.js que realiza varias operaciones matemáticas, incluyendo suma, multiplicación, división, exponentes y resta. Expone puntos finales para realizar estas operaciones.

## Uso

Para utilizar esta API, realiza peticiones HTTP a los siguientes puntos finales:

- **Suma (`GET`):** `/results/:n1/:n2`
  - Realiza una suma proporcionando dos números `n1` y `n2` como parámetros en la URL.
  - Ejemplo: `GET http://localhost:2000/results/3/5`
  - Respuesta: `{"resultado": 8}`

- **Multiplicación (`POST`):** `/results/1/2`
  - Realiza una multiplicación enviando un objeto JSON con `n1` y `n2` en el cuerpo de la solicitud.
  - Ejemplo: `POST http://localhost:2000/results/1/2`
    - Cuerpo de la solicitud: `{"n1": 4, "n2": 7}`
  - Respuesta: `{"resultado": 28}`

- **División (`PUT`):** `/results`
  - Realiza una división enviando un objeto JSON con `n1` y `n2` en el cuerpo de la solicitud.
  - Ejemplo: `PUT http://localhost:2000/results`
    - Cuerpo de la solicitud: `{"n1": 10, "n2": 2}`
  - Respuesta: `{"resultado": 5}`

- **Exponentes (`PATCH`):** `/results`
  - Calcula la potencia de `n1` elevado a la `n2` enviando un objeto JSON con `n1` y `n2` en el cuerpo de la solicitud.
  - Ejemplo: `PATCH http://localhost:2000/results`
    - Cuerpo de la solicitud: `{"n1": 2, "n2": 3}`
  - Respuesta: `{"resultado": 8}`

- **Resta (`DELETE`):** `/results/:n1/:n2`
  - Realiza una resta proporcionando dos números `n1` y `n2` como parámetros en la URL.
  - Ejemplo: `DELETE http://localhost:2000/results/7/3`
  - Respuesta: `{"resultado": 4}`

## Empezar

1. Instala las dependencias necesarias ejecutando `npm install`.

2. Inicia el servidor ejecutando `node index.js`.

3. Ahora puedes realizar peticiones HTTP a los puntos finales especificados como se describe arriba.

## Autor

- Marcela Sigala

## Licencia

Este proyecto está bajo la Licencia ISC. Consulta el archivo [LICENSE](LICENSE) para obtener detalles.
