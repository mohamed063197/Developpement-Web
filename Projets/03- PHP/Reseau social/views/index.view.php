<!--titre de la page-->
<?php $title='Acceuil' ?>

<!--les fichiers a includre-->
<?php include('includes/const.php'); ?>
<?php include('partials/_header.php'); ?>

<!DOCTYPE html>
<html>
	<head>

		<title>
			<?php
				echo isset($title) ? $title .' - '. WEBSITE_NAME: WEBSITE_NAME .'  '.WEBSITE_SLOGAN
			?>
		</title>

		<link rel="stylesheet" href="css/style.css">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
		<!-- action : pour dire lors de envoie il ne renvoie vers qu'elle pas /par defaut la meme page-->
		<form method='post'>
			
			<p>
				<label for ="nom"> Nom :</label>
				<input type="text" name="nom" id='nom' required="required">

				<label for="prenom"> Prenom :</label>
				<input type='text' name='prenom' id='prenom' required='required'>

				<label for='message'> Message </label>
				<textarea name='message' id='message' rows='5' required='required'></textarea>

				<input type='submit' name='envoyer' id='envoyer'>

			</p>

		</form>
			
	</body>
	
</html>

<?php include('partials/_footer.php'); ?>