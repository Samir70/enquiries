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

Setup `server/server.js` with only `console.log` of port

Make a `.sequelizerc` file on same level as `.env`

Run in root directory: `sequelize db:migrate`. Should get logging. Check database on `supabase` by going to the table-editor tab. Table is empty.

Still in root directory, run `sequelize seed:generate --name enquiries`, fill out some dummy data in commands. (Use `Enquiries` as database name). 

Run `sequelize db:seed:all`

Make an enquiries controller to get all enquiries. Run the server with `node server.js` and test with `postman` or browser with url `http://localhost:4005/api/enquiries`. (Worked after change `tableName` in `models/enquiry.js` to "Enquiries")

Make the frontend (using `react-router` etc)

Run `npm run build`

Setup server to serve `react` app by adding:

```js
app.use(express.static(path.join(__dirname, "../build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"))
})
```

Now you only need to run the server with `node server/server.js` and navigate to `http://localhost:4005/enquiries` to see the app.

## actions for database

Sign-up to `supabase`, new project called `enquiries` (saved the generated password)

Made models:

```bash
server> sequelize model:generate --name Enquiry --attributes enq_id:integer,name:string,email:string,enq_text:string
```

Update `enquiry.js` to have:

```js
Enquiry.init({
    enq_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    enq_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Enquiry',
    tableName: 'enquiries',
    timestamps: false
  });
```

Also make `enq_id` the primary key in the migration file. (Rename the `id` key and delete the original `enq_id`). And remove the `created_at` and `updated_at` columns, since we turned off `timestamps`. Set `allowNull` to false for remaining columns.