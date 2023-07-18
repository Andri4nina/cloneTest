<?php
require_once("../../controller/connectDB.php");


$takestudentlast=$db->prepare('SELECT * FROM etudiant
ORDER BY id_etu DESC
LIMIT 5;');
$executestudentlast = $takestudentlast->execute();
$studentlast = $takestudentlast->fetchAll();

?>