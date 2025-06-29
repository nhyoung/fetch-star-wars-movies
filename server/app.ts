import express, { Request, Response } from 'express'

var app = express();
const port = 3000;
const API_URL = "https://swapi.info/api/films";

type Film = {
    title: string;
    episode_id: number;
    director: string;
    release_date: string;
};

const data: Film[] = [
    {
        title: "A New Hope",
        episode_id: 4,
        director: "George Lucas",
        release_date: "1977-05-25"
    },
        {
        title: "The Empire Strikes Back",
        episode_id: 5,
        director: "Irvin Kershner",
        release_date: "1980-05-17"
    },
    {
        title: "Return of the Jedi",
        episode_id: 6,
        director: "Richard Marquand",
        release_date: "1983-05-25"
    },
    {
        title: "The Phantom Menace",
        episode_id: 1,
        director: "George Lucas",
        release_date: "1999-05-19"
    },
    {
        title: "Attack of the Clones",
        episode_id: 2,
        director: "George Lucas",
        release_date: "2002-05-16"
    },
    {
        title: "Revenge of the Sith",
        episode_id: 3,
        director: "George Lucas",
        release_date: "2005-05-19"
    }
]

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    next();
});

app.get('/starwars', async function (req: Request, res: Response) {
    try {
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});