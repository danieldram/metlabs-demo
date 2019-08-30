# API Docs

It is a small API. There are currently only two endpoints:

## GET /pokemon
Returns a list of all Pokemon in the database. Example response:

```
[
  {
    "id": 1,
    "identifier": "bulbasaur",
    "types": [
      {"id": 12, "identifier": "grass"},
      {"id": 4, "identifier": "poison"}
    ]
  },
  {
    "id": 2,
    "identifier": "ivysaur",
    "types": [
      {"id": 12, "identifier": "grass"},
      {"id": 4, "identifier": "poison"}
    ]
  },
  ...
```

## GET /pokemon/:id/evolutions
Returns the evolution data for the Pokemon with `id`. You will receive an array of evolution data. Depending on the evolution stage of this Pokemon, each object will contain either a `evolves_from` or `evolves_into` id that maps to a Pokemon's `id`.

For example, fetching Ivysaur's evolution data will return:

```
[
  {
    "evolves_from": 1,
    "trigger": "at level 16"
  },
  {
    "evolves_into": 3,
    "trigger": "at level 32"
  }
]
```
