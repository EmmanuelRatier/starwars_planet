const BtnNext = ({ setPage }) => {

  const handleBtnNext = () => {
    const url2 = "http://swapi.dev/api/planets/"
    fetch(url2)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Planete introuvable')
        }
        return res.json()
      })
      .then((data2) => {
        console.log(data2.next)

        //setPlanets(data2.results)
      })
      .catch((error) => {
        alert(error.message)
      })
  }


  return (
    <button onClick={handleBtnNext}>Suivantes</button>
  )
}

export default BtnNext