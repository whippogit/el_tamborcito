function Watch() {
  const data = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const fecha = data.toLocaleDateString("es-Es", options)
  return <div>{fecha}</div>;
}

export default Watch;
