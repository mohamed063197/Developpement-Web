<?php
// permet de voir tout les drivers
var_dump(PDO::getAvailableDrivers());
/** Connection a la data base **
driver : mysql
nom_host : localhost
nom_db : nom_db
nom utilisateur : root
mot de passe : ''
*/
try{
	define('DB_HOST','localhost')
	define('DB_NAME','nom_db')
	define('DB_USERNAME','root')
	define('DB_PASSWORD','')
	$db=new PDO('mysql:host='.localhost
			   .';dbname='.DB_NAME,DB_USERNAME,DB_PASSWORD);

	// afficher EXception en cas d'erreur
	$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);


}catch(PDOException $e){

	die('Erreur:' .$e->getMessage());

}
//se connecter: mysql -uroot -p
?>