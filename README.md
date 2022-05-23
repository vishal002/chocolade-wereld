# ChocoladeWereld

Run `npm install` for all the depedencies then

## Development server

Run `npm start` OR `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Mock Server
[mock-json-server](https://www.npmjs.com/package/mock-json-server)

for server instalation use this: `npm i mock-json-server`

data required in below format:
{
  "/chocolates": {
    "get": {
      "data": [
        {
          "pagination": {
            "offset": 0,
            "limit": 25,
            "total": 10
          },
          "data": [ ... ]
        }
      ]
    }
  }
}

command: `mock-json-server mock-server/data.json --port=3000`