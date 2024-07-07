'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService.js');

module.exports.comicsDELETE = function comicsDELETE (req, res, next, ids) {
  Default.comicsDELETE(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.comicsGET = function comicsGET (req, res, next, page, limit, id) {
  Default.comicsGET(page, limit, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateComic = function updateComic (req, res, next, comic, id) {
  Default.updateComic(comic, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nbAutoComic = function nbAutoComic (req, res, next) {

  function separateWordsAndCounts(words) {
      const wordCount = {};
      const uniqueWords = [];
      const repeatedWordsCount = [];

      // Contar la frecuencia de cada palabra
      words.forEach(word => {
          wordCount[word] = (wordCount[word] || 0) + 1;
      });

      // Separar en palabras únicas y frecuencias de palabras repetidas
      for (const [word, count] of Object.entries(wordCount)) {
          if (count === 1) {
              uniqueWords.push(word);
          } else {
              repeatedWordsCount.push({ word, count });
          }
      }

      return { uniqueWords, repeatedWordsCount };
  }


}

//    Emulador
module.exports.emuladorsDELETE = function emuladorsDELETE (req, res, next, ids) {
  Default.emuladorsDELETE(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emuladorsGET = function emuladorsGET (req, res, next, page, limit, id) {
  Default.emuladorsGET(page, limit, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEmulador = function updateemulador (req, res, next, emulador, id) {
  Default.updateEmulador(emulador, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//   Juego
module.exports.juegosDELETE = function juegosDELETE (req, res, next, ids) {
  Default.juegosDELETE(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.juegosGET = function juegosGET (req, res, next, page, limit, id) {
  Default.juegosGET(page, limit, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateJuego = function updatejuego (req, res, next, juego, id) {
  Default.updateJuego(juego, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//    libros
module.exports.librosDELETE = function librosDELETE (req, res, next, ids) {
  Default.librosDELETE(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.librosGET = function librosGET (req, res, next, page, limit, id) {
  Default.librosGET(page, limit, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatelibros = function updateLibros (req, res, next, libro, id) {
  Default.updatelibros(Libro, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//    Pelis 2
module.exports.updatePeli2 = function updatePeli2 (req, res, next, comic, id) {
  Default.updatePeli2(comic, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pelis2DELETE = function pelis2DELETE (req, res, next, ids) {
  Default.peli2sDELETE(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pelis2GET = function peli2sGET (req, res, next, page, limit, id) {
  Default.pelis2GET(page, limit, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePeli = function updatePeli (req, res, next, comic, id) {
  Default.updatePeli(comic, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pelisDELETE = function pelisDELETE (req, res, next, ids) {
  Default.pelisDELETE(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pelisGET = function pelisGET (req, res, next, page, limit, id) {
  Default.pelisGET(page, limit, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mangasDELETE = function mangasDELETE (req, res, next, ids) {
  Default.mangasDELETE(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mangasGET = function mangasGET (req, res, next, page, limit, id) {
  Default.mangasGET(page, limit, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateManga = function updateManga (req, res, next, comic, id) {
  Default.updateManga(manga, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.seriesDELETE = function seriesDELETE (req, res, next, ids) {
  Default.seriesDELETE(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.seriesGET = function seriesGET (req, res, next, page, limit, id) {
  Default.seriesGET(page, limit, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSerie = function updateSerie (req, res, next, serie, id) {
  Default.updateComic(serie, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// LAS ESTADISTICAS DE ANIME
module.exports.nbAnimesPorAnio = function nbAnimesPorAnio (req, res, next) {
  Default.nbAnimesPorAnio()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nbDuracionAnioAnime = function nbDuracionAnioAnime (req, res, next) {
  Default.nbDuracionAnioAnime()
    .then(function (response) {
      const duracs = response.duraciones;
      let salida = [];
      for (let dura of duracs) {
        let r = dura.duraciones;
        if (!r || r === '') continue;
        let rCleaned = r.replace(' min.', '');
        salida.push({
          anio: dura.anio,
          duraciones: rCleaned
        })
      }
      utils.writeJson(res, { duraciones: salida });
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nbAnimesPorPaises = function nbAnimesPorPaises (req, res, next) {
  Default.nbAnimesPorPaises()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Este mapa de palabras ya está funcionando
module.exports.nbGenerosAnime = function nbGenerosAnime (req, res, next) {

  function separateWordsAndCounts(words) {
      const wordCount = {};
      const uniqueWords = [];
      const repeatedWordsCount = [];

      // Contar la frecuencia de cada palabra
      words.forEach(word => {
          wordCount[word] = (wordCount[word] || 0) + 1;
      });

      // Separar en palabras únicas y frecuencias de palabras repetidas
      for (const [word, count] of Object.entries(wordCount)) {
          if (count === 1) {
              uniqueWords.push(word);
          } else {
              repeatedWordsCount.push({ word, count });
          }
      }

      return { uniqueWords, repeatedWordsCount };
  }

  Default.nbGenerosAnime()
    .then(function (response) {
      const gens = response.generos;
      let words = [];
      for (let gen of gens) {
        let r = gen.generos;
        if (!r) continue;
        r = r.replace('|', '.');
        const rParts = r.split('.');
        for (let part of rParts) {
          const partTrimmed = part.trim();
          words.push(partTrimmed);
          
        }
      }
      const result = separateWordsAndCounts(words);
      utils.writeJson(res, result);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Este mapa de palabras ya está funcionando
module.exports.nbDescripcionesLibro = function nbDescripcionesLibro (req, res, next) {

  function separateWordsAndCounts(words) {
      const wordCount = {};
      const uniqueWords = [];
      const repeatedWordsCount = [];

      // Contar la frecuencia de cada palabra
      words.forEach(word => {
          wordCount[word] = (wordCount[word] || 0) + 1;
      });

      // Separar en palabras únicas y frecuencias de palabras repetidas
      for (const [word, count] of Object.entries(wordCount)) {
          if (count === 1) {
              uniqueWords.push(word);
          } else {
              repeatedWordsCount.push({ word, count });
          }
      }

      return { uniqueWords, repeatedWordsCount };
  }

  Default.nbDescripcionesLibro()
    .then(function (response) {
      const gens = response.sinopsis;
      let words = [];
      for (let gen of gens) {
        let r = gen.autor;
        if (!r) continue;
        r = r.replace('/<br>/g', '');
        r = r.replace('/<b>/g', '');
        r = r.replace('/</b>/g', '');
        r = r.replace('/<i>/g', '');
        r = r.replace('/</i>/g', '');
        r = r.replace('/<p>/g', '');
        r = r.replace('/</p>/g', '');
        r = r.replace('/<div>/g', '');
        r = r.replace('/</div>/g', '');
        r = r.replace('/|/g', '.');
        const rParts = r.split(' ');
        for (let part of rParts) {
          const partTrimmed = part.trim();
          words.push(partTrimmed);
          
        }
      }
      const result = separateWordsAndCounts(words);
      utils.writeJson(res, result);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nbPelisPorPaises = function nbPelisPorPaises (req, res, next) {
  Default.nbPelisPorPaises()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.puntosTotalesPorAutorManga = function puntosTotalesPorAutorManga (req, res, next) {
  Default.puntosTotalesPorAutorManga()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
  
module.exports.nbPelisPorPaisesPorAnio = function nbPelisPorPaisesPorAnio (req, res, next) {
  Default.nbPelisPorPaisesPorAnio()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Numero de comic po autores 
  // Desepararlos por Comas
  module.exports.nbComicsPorAutor = function nbComicsPorAutor (req, res, next) {
    Default.nbComicsPorAutor()
      .then(function (response) {
        let result = {};
  
        const resData = response.nbComics;
        
        for (const row of resData) {
          if (!row.autor) continue;
          const autoresRegistro = row.autor.split(',');
          for (const autReg of autoresRegistro) {
            const autFiltered = autReg.trim();
            if (!result[autFiltered]) result[autFiltered] = 1;
            else result[autFiltered]++;
          }
        }

        const entries = Object.entries(result);
        entries.sort((a, b) => b[1] - a[1]);
        const top10Entries = entries.slice(0, 10);
        const autoresOrdenados = Object.fromEntries(top10Entries);


        utils.writeJson(res, autoresOrdenados);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };

// Mapa de palabras para la pagina de Estadisticas Comics
module.exports.nbDescripcionesComic = function nbDescripcionesComic (req, res, next) {

  function separateWordsAndCounts(words) {
      const wordCount = {};
      const uniqueWords = [];
      const repeatedWordsCount = [];

      // Contar la frecuencia de cada palabra
      words.forEach(word => {
          wordCount[word] = (wordCount[word] || 0) + 1;
      });

      // Separar en palabras únicas y frecuencias de palabras repetidas
      for (const [word, count] of Object.entries(wordCount)) {
          if (count === 1) {
              uniqueWords.push(word);
          } else {
              repeatedWordsCount.push({ word, count });
          }
      }

      return { uniqueWords, repeatedWordsCount };
  }

  Default.nbDescripcionesComic()
    .then(function (response) {
      const descs = response.descripciones;
      let words = [];
      for (let desc of descs) {
        let r = desc.descripcion;
        if (!r) continue;
        r = r.replace('<p>', '');
        r = r.replace('</p>', '');
        r = r.replace('<strong>', '');
        r = r.replace('</strong>', '');
        r = r.replace('&nbsp;', '');
        r = r.replace('|', '.');
        const rParts = r.split(' ');
        for (let part of rParts) {
          const partTrimmed = part.trim();
          // Cojo palabras que se repitan mas de 3 veces
          if (partTrimmed.length > 3) words.push(partTrimmed);
          
        }
      }
      const result = separateWordsAndCounts(words);
      utils.writeJson(res, result);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};