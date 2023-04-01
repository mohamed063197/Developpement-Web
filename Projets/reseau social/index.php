

<?php
	// si il a cliquer sur le bouton envoyer
	// isset : pour verifier si ils existes(non vide)
	if(isset($_POST['envoyer'])){// pour verifier si il a cliquer sur envoyer
		if( isset( $_POST['nom'], 
				   $_POST['prenom'], 
				   $_POST['message']
				  )
	      )

			echo $_POST['nom'].' '.$_POST['prenom'].' '.$_POST['message'];
	}

	require('views/index.view.php');
	//connection base de donnes 'PDO:oriente objet'

?>






