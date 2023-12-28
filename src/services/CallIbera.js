const url = "https://datakrakenibera.onrender.com/api";

export async function getAllIbera() {
    try {
      const response = await fetch(`${url}/esteros-del-ibera`);
      const data = await response.json();
      console.log(data.results);
      return data.results.reverse();
    } catch (error) {
      console.log(error);
    }
  }

  export async function getNewsById(id) {
    try {
      const response = await fetch(`${url}/noticias/${id}`);
      const peticion = await response.json();
      console.log(peticion.noticia);
      return peticion.noticia;
    } catch (error) {
      console.log(error);
    }
  }