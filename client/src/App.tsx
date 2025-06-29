import { useState, useEffect, Key } from 'react'
import darthVader from './assets/darth-vader.svg'
import './App.css'

type Film = {
    title: string;
    episode_id: number;
    director: string;
    release_date: string;
};

interface TableProps {
  data: Film[];
}

function Table({data}: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Episode Number</th>
          <th>Director</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((film: Film) => (
          <tr key={film.episode_id}>
            <td>{film.title}</td>
            <td>{film.episode_id}</td>
            <td>{film.director}</td>
            <td>{film.release_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [data, setData] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setLoading(true);
    fetch("http://localhost:3000/starwars")
      .then(async (res) => {
        const json = await res.json();
        return json;
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  return (
    <>
      <h1>React + Vite App</h1>
      <img src={darthVader} className="logo" alt="Darth Vader logo" width="100" />
      <button onClick={handleClick}>Fetch Star Wars movies</button>
      <div className="table">
        {loading ? "Loading" : (data.length > 0 ? <Table data={data}/> : null)}
      </div>
    </>
  )
}

export default App
