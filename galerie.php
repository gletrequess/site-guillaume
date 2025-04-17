<?php
$images = glob("uploads/*.{jpg,jpeg,png,webp,gif}", GLOB_BRACE);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Galerie</title>
    <style>
        body {
            font-family: sans-serif;
        }
        .grid {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .grid img {
            width: 200px;
            height: auto;
            border: 1px solid #ccc;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>Galerie d'images</h1>
    <div class="grid">
        <?php foreach ($images as $img): ?>
            <img src="<?= $img ?>" alt="Image">
        <?php endforeach; ?>
    </div>
</body>
</html>
