<?php
$uploadSuccess = false;
$uploadError = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $targetDir = "uploads/";
    $file = $_FILES['image'];

    $allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

    if (in_array($file['type'], $allowedTypes)) {
        $fileName = basename($file["name"]);
        $targetFile = $targetDir . time() . "-" . $fileName;

        if (move_uploaded_file($file["tmp_name"], $targetFile)) {
            $uploadSuccess = true;
        } else {
            $uploadError = "Échec de l'upload du fichier.";
        }
    } else {
        $uploadError = "Type de fichier non autorisé.";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Uploader une image</title>
</head>
<body>
    <h1>Uploader une image</h1>

    <?php if ($uploadSuccess): ?>
        <p style="color:green;">Image envoyée avec succès !</p>
    <?php elseif ($uploadError): ?>
        <p style="color:red;"><?= $uploadError ?></p>
    <?php endif; ?>

    <form method="POST" enctype="multipart/form-data">
        <input type="file" name="image" accept="image/*" required>
        <button type="submit">Envoyer</button>
    </form>
</body>
</html>
