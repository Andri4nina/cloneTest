<?php
   @session_start();
   $db_dist="mysql:host=localhost;dbname=gpubli";
   $db_user="root";
   $db_mdp="4ndo";

   try{
      $db=new PDO($db_dist,$db_user,$db_mdp);

   /*  echo"connexion etablie"; */
   }
   catch(PDOException $pe){
      echo'erreur' .$pe->getMessage();
   }
?>