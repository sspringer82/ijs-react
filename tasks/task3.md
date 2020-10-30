# Task 3 - delete data on the server

Include a functionality to delete data on your server. As soon as the data is deleted update your view.

## Hint

```
fetch('http://localhost:3001/logs/1', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
});
```
