<!--titre de la page-->
<?php $title='inscription' ?>

<!--les fichiers a includre 'au debut' -->
<?php include('includes/const.php'); ?>
<?php include('partials/_header.php'); ?>

<div id='main-container'>
	<div id='container'>
		<h1> Devener des present un membre ! </h1>
		<form method='post' class="well col-md-6">
			
			<!-- Name Field -->
			<div class="form-group">
					<label for ="name"> Nom :</label>
					<input type="text" name="name" class='from-control' required="required">
			</div>			
				
			<!-- Pseudo Field -->
			<div class="form-group">
				<label for="pseudo"> Prenom :</label>
				<input type='text' name='pseudo' class='from-control' required='required'>
			</div>
			
			<!-- Email Field -->
			<div class="form-group">
				<label for="email"> Email :</label>
				<input type='email' name='email' class='from-control' required='required'>
			</div>
			
			<!-- Password Field -->
			<div class="form-group">
				<label for="password"> Mot de passe :</label>
				<input type='password' name='password' class='from-control' required='required'>
			</div>

			<!--password confirmation Field -->
			<div class="form-group">
				<label for="password_confirm"> Confirmer votre mot de passe :</label>
				<input type='password' name='password_confirm' class='from-control' required='required'>
			</div>



				<input type='submit' value='inscription' name='inscription' class='btn btn-primary'>

		

	</div>
</div>

<!--les fichiers a includre 'a la fin' -->
<?php include('partials/_footer.php'); ?>