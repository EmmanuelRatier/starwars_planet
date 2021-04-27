import { useEffect, useState } from "react"

const StarwarsPlanet = ({ planet }) => {
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
        console.log(data.next)
        setPlanets(data.results)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [planet])

  const handleBtnNext1 = () => {
    const url2 = "http://swapi.dev/api/planets/?page=1"
    fetch(url2)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Planete introuvable')
        }
        return res.json()
      })
      .then((data2) => {
        console.log(data2.results)
        setPlanets(data2.results)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const handleBtnNext2 = () => {
    const url2 = "http://swapi.dev/api/planets/?page=2"
    fetch(url2)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Planete introuvable')
        }
        return res.json()
      })
      .then((data2) => {
        console.log(data2.results)
        setPlanets(data2.results)
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  const handleBtnNext3 = () => {
    const url2 = "http://swapi.dev/api/planets/?page=3"
    fetch(url2)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Planete introuvable')
        }
        return res.json()
      })
      .then((data2) => {
        console.log(data2.results)
        setPlanets(data2.results)
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  const handleBtnNext4 = () => {
    const url2 = "http://swapi.dev/api/planets/?page=4"
    fetch(url2)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Planete introuvable')
        }
        return res.json()
      })
      .then((data2) => {
        console.log(data2.results)
        setPlanets(data2.results)
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  const handleBtnNext5 = () => {
    const url2 = "http://swapi.dev/api/planets/?page=5"
    fetch(url2)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Planete introuvable')
        }
        return res.json()
      })
      .then((data2) => {
        console.log(data2.results)
        setPlanets(data2.results)
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  const handleBtnNext6 = () => {
    const url2 = "http://swapi.dev/api/planets/?page=6"
    fetch(url2)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Planete introuvable')
        }
        return res.json()
      })
      .then((data2) => {
        console.log(data2.results)
        setPlanets(data2.results)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

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
        <nav aria-label="...">
          <ul class="pagination pagination-lg">
            <li class="page-item">
              <button onClick={handleBtnNext1} className="btn text-white bg-dark">1</button>
            </li>
            <li class="page-item">
              <button onClick={handleBtnNext2} className="btn text-white bg-dark">2</button>
            </li>
            <li class="page-item">
              <button onClick={handleBtnNext3} className="btn text-white bg-dark">3</button>
            </li>
            <li class="page-item">
              <button onClick={handleBtnNext4} className="btn text-white bg-dark">4</button>
            </li>
            <li class="page-item">
              <button onClick={handleBtnNext5} className="btn text-white bg-dark">5</button>
            </li>
            <li class="page-item">
              <button onClick={handleBtnNext6} className="btn text-white bg-dark">6</button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default StarwarsPlanet