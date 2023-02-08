<?php

require_once __DIR__ . '/vendor/autoload.php';

$client = new MongoDB\Client('mongodb://tyringphp:secret@db/?authSource=admin');

$collection = $client->tryingmongo->items;

$insertOneResult = $collection->insertOne([
  'name' => htmlspecialchars($_POST["name"]),
]);

header("Location: /");
die();

?>

