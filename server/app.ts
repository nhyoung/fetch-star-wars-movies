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

app.get('/', async function (req: Request, res: Response) {
    try {
        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error(`Failed to fetch from Star Wars API. Status: ${response.status}`);
        }   
        const data = await response.json();
        let result: Film[] = [];
        for (const film of data) {
            const curr: Film = {
                title: film.title,
                episode_id: film.episode_id,
                director: film.director,
                release_date: film.release_date
            }
            result.push(curr);
        }
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
    
});
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});