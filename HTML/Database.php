<?php 

	$conn=new mysqli("pstud0","abz212","abz212","abz212");
	if($conn->connect_error){
		die("Connection failed: ".$conn->connect_error);
	}
//	echo "Connection successful";
?>