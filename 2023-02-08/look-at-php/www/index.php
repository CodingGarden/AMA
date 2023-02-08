<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Items</title>
  <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css">
</head>
<body>

<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/vendor/autoload.php';

$client = new MongoDB\Client('mongodb://tyringphp:secret@db/?authSource=admin');

$collection = $client->tryingmongo->items;

$cursor = $collection->find();

?>
<main class="container">
<h1>Hello World</h1>
<h2>These are my things:</h2>

<?php

foreach ($cursor as $document) {
    echo "<p>" . htmlspecialchars($document['name']) . "</p>";
}

?>

<form>
  <label>Name</label>
  <input name="name">
  <button>ADD</button>
</form>

<script>
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    await fetch('/create.php', {
      method: 'POST',
      body: data,
    })
    window.location.href = '/';
  });
</script>

</main>
</body>
</html>