# Json server

`npx json-server --watch data/db.json --port 8000`

### Endpoints

| url         | Method | desc                |
| ----------- | ------ | ------------------- |
| /blogs      | GET    | Fetch all blogs     |
| /blogs/{id} | GET    | Fetch a single blog |
| /blogs      | POST   | Add a new blog      |
| /blogs/{id} | DELETE | Delete a blog       |
