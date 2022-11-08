# Swayze API

## Project setup
step 1:

```
$> docker run --name db -e POSTGRES_USER=YOUR_USERNAME -e POSTGRES_PASSWORD=YOUR_PASSWROD -p 5432:5432 -v /data:/var/lib/postgresql/data -d postgres
```
step 2:

in file `dApp/api/.env` set access to the database
```
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWROD@localhost:5432/postgres?schema=public"
```
step 3:

```
npm install
```
step 4:
Run :
```
npm run migrate
```
step 5:
Run :
```
npm run start
```
