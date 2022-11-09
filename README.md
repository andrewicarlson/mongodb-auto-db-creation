# MongoDB will create a database when using authSource=admin and root credentials

Observe that when using `authSource=admin` that a database is created on first write if it doesn't yet exist.

*Note:* A .env file has been intentionally added to this repo with a connection string that references the MongoDB database created by Docker.

## Steps
1. From the repo root run `docker-compose up -d` to start MongoDB. 
2. Connect to the MongoDB instance (mongodb://localhost:27018) via the command line or a GUI like TablePlus and observe that there are 3 databases created by default: `local`, `config`, `admin`
3. Open the `admin` database and observe 
4. Run `npx prisma db pull --force` and observe the following error in the CLI: `Error: Error in connector: SCRAM failure: Authentication failed.`
5. Add `authSource=admin` to the connection string in `.env`
6. Run `npx prisma db pull --force` and observe that there is no error in the CLI. 
7. Run `npm run seed` (executes `seed.ts`) and observe that a new `mydb` database is created with 3 collections