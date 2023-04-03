<?php
	require('includes/function.php');
	require('includes/const.php');
?>


<?php
	$errors=[];
	if(isset($_POST['inscription'])){
		if(!empty($_POST['name']) &&
		   !empty($_POST['pseudo']) &&
		   !empty($_POST['email']) &&
		   !empty($_POST['password']) &&
		   !empty($_POST['password_confirm'])){

			$errors=[]
			extract($_POST)

			if(mb_strlen($pseudo) < 3){
				$errors[]=' le pseudo est trop court (Minimum 3 caractere)';
			}

			if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
				$errors[]=' addresse mail non valide';
			}

			if(mb_strlen($password) < 6){
				$errors[]=' le mot de passe est trop court (Minimum 6 caractere)';
			}else{
				if($password != $password_confirm){
					$errors[]=' les deux mot de passe ne sont pas egaux';
				}
			}

			if(is_already_in_use('pseudo',$pseudo,'users')){
				$errors[]=' pseudo deja utilise !';
			}

			if(is_already_in_use('email',$pseudo,'users')){
				$errors[]=' email deja utilise !';
			}

			if(count($errors)==0){
				// enregister l'utilisateur 
				//message de bienvenue 
				// diriger vers sa page de profil


				//envoie d'un mail d'activation
				$to=$email;

				$subject=WEBSITE_NAME.'- ACTIVATION DE COMPTE';
				// shal : concatenation
				$token=shal($pseudo,$email,$password);
				
				// sert a recuperer le contenu sans l'afficher
				ob_start();
				require('templates/emails/activation.view.php');
				$content=ob_get_clean(); 

				//informer l'utilisateur pour qu'il verifie sa boite de reception
			}


   		}else{

   			$errors[]='Veuillez Remplir tout les champs';

   		}
			}

	}
?>

<?php require('views/inscription.view.php'); ?>
