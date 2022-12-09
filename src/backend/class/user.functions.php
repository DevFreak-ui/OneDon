<?php

/*
####################################################

All functions related to project

####################################################
*/



//DATABASE CONNECTION
require_once('dbconfig.php');


class USER
	{
	  //CONNECTION VARIABLE
	  private $conn;

	  //SESSION VARIABLE
	  private $sessionName;

	  // SMTP USEERNAME
	  public $smtpUsername;
	  public $smtpPassword;
	  public $companyName;

	  public function __construct() {
	    $database = new Database();
	    $this->conn = $database->dbConnection();
	    $this->sessionName = $database->session_name();
	    $this->smtpUsername = $database->smtpUsername;
	    $this->smtpPassword = $database->smtpPassword;
	    $this->companyName = $database->companyName;

	}



    //MySQL QUERY TO LOGIN
    public function login($uname, $pass, $tbl = "user") {
        try {
        $stmt = $this->conn->prepare("SELECT * FROM $tbl WHERE MD5(username) = :uname AND MD5(password) = :pass");
        $stmt->execute(array('uname' => md5($uname),'pass' => md5($pass)));
        $userRow = $stmt->fetch(PDO::FETCH_ASSOC);
        if($stmt->rowCount() > 0) {
            if($pass == $userRow['password']) {
            $_SESSION[$this->sessionName] = $userRow['id'];
            return true;
            } else {
            return false;
            }
        }
        } catch(PDOException $e) {
        echo $e->getMessage();
        }
    }




} // END OF USER CLASS

?>