<?php
@session_start();
require_once("../../back/connectDB.php");
if(isset($_POST["connectbtn"])){
    if(!empty($_POST["nomuser"]) && !empty($_POST["mdpuser"])){  
        $user=htmlspecialchars($_POST["nomuser"]);
        $mdp=htmlspecialchars($_POST["mdpuser"]);
        $select=$db->prepare('SELECT * FROM user WHERE username=? and passworduser=?' );
        $select->execute(array($user,$mdp,$mail));
        if ($select->rowCount()>0) {
            $_SESSION['username']=$user;
            $_SESSION['passworduser']=$mdp;
            $_SESSION['id']=$select-> fetch()['id'];
            header('Location: index.php');
            exit();
        }
        else{
            $err = "Le nom d'utilisateur ou le mot de passe est incorrect.";
            echo $err;
        }
    }
    else
    {
        echo'remplir le formulaire';
    }
} 

?>