const url = "https://whippo.online/api/leyendas";

export async function getAllLeyendas() {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      console.log(data.results);
      return data.results.reverse();
    } catch (error) {
      console.log(error);
    }
  }

  export async function getNewsById(id) {
    try {
      const response = await fetch(`${url}/${id}`);
      const peticion = await response.json();
      console.log(peticion.noticia);
      return peticion.noticia;
    } catch (error) {
      console.log(error);
    }
  }