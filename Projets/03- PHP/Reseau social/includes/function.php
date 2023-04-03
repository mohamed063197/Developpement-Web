<?php
if(defined('is_already_in_use')){
	function is_already_in_use($field,$value,$table){
		$query->prepare('SELECT id_user FROM '.$table.' WHERE '.$field.'= ?');
		$query->execute([$value]);
		$nbr_query=$query-> rowCount()

		$query->closeCursor();
		return $nbr_query
		
	}
}
	

?>

/*
CREATE TABLE users(
	id_user INT PRIMARY KEY AUTO INCREMENT,
	name VARCHAR(255),
	pseudo VARCHAR(255) UNIQUE,
	email VARCHAR(255) UNIQUE,
	password VARCHAR(255)
);

ALTER TABLE users ADD COLUMN active ENUM('0','1') DEFAULT '0';


*/