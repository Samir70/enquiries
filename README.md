# enquiries

A `PERN` app following the example of [library @ Azzion-tech](https://www.youtube.com/watch?v=fBcqjYfVCdY)

## actions for setup

Made a new repo, then installed `React` with:

```bash
enquiries> npx create-react-app .
```

Then install deps with:
```bash
npm i cors dotenv express pg pg-hstore sequelize react-router-dom
```

Sequalise:

```bash
npm i -g sequelize-cli
cd server
sequelize init
```

Make `server.js` and `controllers` folder in server folder.

Rename `config.json` to `config.js`, making necessary changes to export an object. Also change values to `process.env.???` (and require `dotenv`) and update `require` in `server/index.js`

## actions for database

Sign-up to `supabase`, new project called `enquiries` (saved the generated password)