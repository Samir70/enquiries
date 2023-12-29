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