const url = "https://appwhippo.onrender.com/api";

export async function getAllIbera() {
    try {
      const response = await fetch(`${url}/noticias`);
      const data = await response.json();
      console.log(data.results);
      return data.results.reverse();
    } catch (error) {
      console.log(error);
    }
  }