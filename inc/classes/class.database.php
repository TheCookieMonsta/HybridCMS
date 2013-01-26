<?php
/*
 * @author CookieMonsta
 * 
 * @prj HybridCMS
 * @file Database Class
 */
 namespace HybridCMS;
 if(!defined('Hybrid_secure')) die('Incorrect access level.');
 class Database
 {
     protected $mysqli;
     
     public function __construct()
     {
     	 global $_config;
		
   		 $this->host = $_config['db']['host'];
   		 $this->user = $_config['db']['user'];
   		 $this->pass = $_config['db']['pass'];
   		 $this->db   = $_config['db']['database'];
 	 }
	 public function mysqliConnect()
	 {
	 	 $this->connect = mysqli_connect($this->host, $this->user, $this->pass, $this->db); 
	 }
     public function query($query) 
     {
         return $this->mysqli->query($query);
     }
 }
?>
 