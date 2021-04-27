import { useEffect, useState } from "react"
import BtnNext from './BtnNext'

const StarwarsPlanet = ({ page }) => {
  const [planets, setPlanets] = useState([])
  useEffect(() => {
    const url = `http://swapi.dev/api/planets/`
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Planete introuvable')
        }
        return res.json()
      })
      .then((data) => {
        //console.log(data.results)
        setPlanets(data.results)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [page])

  return (
    <>
      <section className="container py-5">
        <h1 className="fw-bold">Star Wars Planets</h1>
        <div className="row">
          {
            planets.map((elem) => (
              <div key={elem.name} className="col-md-6  col-lg-4 col-xl-3 mb-4">
                <article className="bg-warning p-3">
                  <h4 >{elem.name}</h4>
                  <p>Population: <b>{elem.population}</b></p>
                  <p>Terrain: <b>{elem.terrain}</b></p>
                  <p>Climate: <b>{elem.climate}</b></p>
                </article>
              </div>
            ))
          }
        </div>
        <BtnNext />
      </section>
    </>
  )
}

export default StarwarsPlanet