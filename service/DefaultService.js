'use strict';

const db = require('../database/Database');



/**
 * COMIC
 **/




exports.comicsDELETE = function(ids) {
  const idList = JSON.parse(ids);
  console.log(idList);
  return new Promise(function(resolve, reject) {
    db(`DELETE FROM comic WHERE id IN (${idList.join(',')})`, () => {
      resolve();
    });
  });
}


exports.comicsGET = function(page,limit,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT * FROM comic", (results) => {
      examples['application/json'] = {
        "comics" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}



exports.updateComic = function(comic, id) {
  return new Promise(function(resolve, reject) {
    var query = `UPDATE comic SET nombre='${comic.nombre}', autor='${comic.autor}', imagen='${comic.imagen}', descripcion='${comic.descripcion}' WHERE id='${id}'`;
    db(query, (results) => {
      resolve();
    });
  });
}












// MANGA




exports.mangasDELETE = function(ids) {
  const idList = JSON.parse(ids);
  console.log(idList);
  return new Promise(function(resolve, reject) {
    db(`DELETE FROM manga WHERE id IN (${idList.join(',')})`, () => {
      resolve();
    });
  });
}



exports.mangasGET = function(page,limit,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT * FROM manga", (results) => {
      examples['application/json'] = {
        "mangas" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}

exports.updateManga = function(manga, id) {
  return new Promise(function(resolve, reject) {
    var query = `UPDATE manga SET titulo='${manga.titulo}', generos='${manga.generos}', imagen='${manga.imagen}', descripcion='${manga.descripcion}' WHERE id='${id}'`;
    db(query, (results) => {
      resolve();
    });
  });
}








// PELIS

exports.pelisDELETE = function(ids) {
  const idList = JSON.parse(ids);
  console.log(idList);
  return new Promise(function(resolve, reject) {
    db(`DELETE FROM pelis WHERE id IN (${idList.join(',')})`, () => {
      resolve();
    });
  });
}

exports.pelisGET = function(page,limit,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT * FROM pelis", (results) => {
      examples['application/json'] = {
        "pelis" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}



exports.updatePelis = function(peli, id) {
  return new Promise(function(resolve, reject) {
    var query = `UPDATE peli SET pelis='${pelis.titulo}', generos='${pelis.generos}', imagen='${pelis.imagen}', descripcion='${pelis.descripcion}' WHERE id='${id}'`;
    db(query, (results) => {
      resolve();
    });
  });
}










exports.nbPelisPorPaises = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT paises as pais,COUNT(*) as total FROM pelis GROUP BY paises", (results) => {
      examples['application/json'] = {
        "nbPelis" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}

exports.nbPelisPorPaisesPorAnio = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};

    db("SELECT anio AS year, paises as country, COUNT(*) as num_peliculas FROM pelis GROUP BY anio, paises ORDER BY year,country", (results) => {

      const paisesUnicos = [...new Set(results
        .map(pelicula => pelicula.country)
        .filter(pais => pais !== null)
    )];

    const years = results
      .map(pelicula => pelicula.year)
      .filter(year => year !== null && typeof year === 'number');
    const yearMenor = Math.min(...years);
    const yearMayor = Math.max(...years);

    const datosFinal = [];

    let datosAnioActual = { date: yearMenor };
    paisesUnicos.forEach(pais => {
      datosAnioActual[pais] = 0;
    });

    for (let year = yearMenor; year <= yearMayor; year++) {
      let datosAnioActualCopia = JSON.parse(JSON.stringify(datosAnioActual));
      datosAnioActualCopia.date = year;
      const peliculasAnio = results.filter(pelicula => pelicula.year === year);
      for (const peliAnio of peliculasAnio) {
        const pp = peliAnio.country;
        datosAnioActualCopia[pp] += peliAnio.num_peliculas;
      }
      datosFinal.push(datosAnioActualCopia);
      datosAnioActual = JSON.parse(JSON.stringify(datosAnioActualCopia));
    }

    resolve(datosFinal);
    });
  });
}

exports.pelisGET = function(page,limit,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT * FROM pelis", (results) => {
      examples['application/json'] = {
        "pelis" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}
















// SERIES

exports.pelis2DELETE = function(ids) {
  const idList = JSON.parse(ids);
  console.log(idList);
  return new Promise(function(resolve, reject) {
    db(`DELETE FROM pelis2 WHERE id IN (${idList.join(',')})`, () => {
      resolve();
    });
  });
}


exports.updatePeli2 = function(pelis2, id) {
  return new Promise(function(resolve, reject) {
    var query = `UPDATE pelis2 SET nombre='${pelis.titulo}', autor='${pelis.direciones}', imagen='${pelis.fotografias}', descripcion='${pelis.sinopsises}' WHERE id='${id}'`;
    db(query, (results) => {
      resolve();
    });
  });
}

exports.seriesGET = function(page,limit,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT * FROM pelis2", (results) => {
      examples['application/json'] = {
        "series" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}










//ANIME


exports.nbAnimesPorAnio = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT anio as year, COUNT(*) as count FROM anime GROUP BY anio ORDER BY anio ASC;", (results) => {
      examples['application/json'] = {
        "nbAnimes" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}


exports.nbGenerosAnime = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT generos FROM anime", (results) => {
      examples['application/json'] = {
        "generos" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}

exports.nbDescripcionesLibro = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
   
    db("SELECT descripcion FROM manga", (results) => {
      examples['application/json'] = {
        "descripcion" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}

exports.nbDescripcionesManga = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    // NOTA: Hacemos la query a la columna de autor porque hay una confusion en el webscrapping
    db("SELECT autor FROM libro", (results) => {
      examples['application/json'] = {
        "sinopsis" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}



exports.nbDescripcionesJuego = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    // NOTA: Hacemos la query a la columna de autor porque hay una confusion en el webscrapping
    db("SELECT descripcion FROM juegos", (results) => {
      examples['application/json'] = {
        "descripcion" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}










exports.puntosTotalesPorAutorManga = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT autor, SUM(puntos) as value FROM manga WHERE autor IS NOT NULL AND autor <> '' GROUP BY autor ORDER BY value DESC LIMIT 10", (results) => {
      examples['application/json'] = {
        "autoresManga" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}



exports.nbDescripcionesSerie = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT descripcion FROM serie", (results) => {
      examples['application/json'] = {
        "descripciones" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}



exports.nbDescripcionesComic = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT descripcion FROM comic", (results) => {
      examples['application/json'] = {
        "descripciones" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}


exports.nbDescripcionesEmulador = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT descripcion FROM emulador", (results) => {
      examples['application/json'] = {
        "descripciones" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}



exports.nbAnimesPorPaises = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT paises as pais,COUNT(*) as total FROM anime GROUP BY paises", (results) => {
      examples['application/json'] = {
        "nbAnimes" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}




exports.nbComicsPorAutor = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT nombre, autor FROM comic", (results) => {
      examples['application/json'] = {
        "nbComics" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}


exports.nbDuracionAnioAnime = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT anio, duraciones FROM anime", (results) => {
      examples['application/json'] = {
        "duraciones" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}








//LIBROS

exports.librosGET = function(page,limit,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT * FROM libro", (results) => {
      examples['application/json'] = {
        "libros" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}


exports.librosDELETE = function(ids) {
  const idList = JSON.parse(ids);
  console.log(idList);
  return new Promise(function(resolve, reject) {
    db(`DELETE FROM libro WHERE id IN (${idList.join(',')})`, () => {
      resolve();
    });
  });
}


exports.updatelibros = function(libro, id) {
  return new Promise(function(resolve, reject) {
    var query = `UPDATE libro SET nombre='${libro.titulo}', autor='${libro.autor}', imagen='${libro.imagen}', sinopsis='${libro.descripcion}' WHERE id='${id}'`;
    db(query, (results) => {
      resolve();
    });
  });
}










//JUEGOS

exports.juegosGET = function(page,limit,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT * FROM juegos", (results) => {
      examples['application/json'] = {
        "juegos" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}



exports.juegosDELETE = function(ids) {
  const idList = JSON.parse(ids);
  console.log(idList);
  return new Promise(function(resolve, reject) {
    db(`DELETE FROM juegos WHERE id IN (${idList.join(',')})`, () => {
      resolve();
    });
  });
}


exports.updatejuegos = function(juegos, id) {
  return new Promise(function(resolve, reject) {
    var query = `UPDATE juegos SET nombre='${juegos.titulo}', generos='${juegos.generos}', imagen='${juegos.imagen}', descripcion='${juegos.descripcion}' WHERE id='${id}'`;
    db(query, (results) => {
      resolve();
    });
  });
}









//emulador

exports.emuladorsGET = function(page,limit,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    db("SELECT * FROM emulador", (results) => {
      examples['application/json'] = {
        "emuladors" : results,
      };
          if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
          } else {
            resolve();
          }
    });
  });
}


exports.emuladorDELETE = function(ids) {
  const idList = JSON.parse(ids);
  console.log(idList);
  return new Promise(function(resolve, reject) {
    db(`DELETE FROM emulador WHERE id IN (${idList.join(',')})`, () => {
      resolve();
    });
  });
}


exports.updatePeli2 = function(emulador, id) {
  return new Promise(function(resolve, reject) {
    var query = `UPDATE emulador SET nombre='${emulador.titulo}', autor='${emulador.generos}', imagen='${emulador.imagen}', descripcion='${emulador.descripcion}' WHERE id='${id}'`;
    db(query, (results) => {
      resolve();
    });
  });
}






