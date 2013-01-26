<?php
/*
 * @author CookieMonsta
 *
 * @prj HybridCMS
 * @file Core
 */
 
 /* Get the namespaces straight. */
 use HybridCMS as Hybrid;
 
 /* Fancy shortcuts. */
 define('inc','inc.');
 define('pub','pub.');
 define('ext','.php');
 define('root','root.');
 define('aclass','class.');
 
 /* Directory shortening. */
 define('dir_inc','inc/');
 define('dir_pub','pub/');
 define('dir_class','classes/');
 
 /* Call system files */
 require_once dir_inc . inc.'config'.ext;
 require_once dir_inc . inc.'hybrid'.ext;
 require_once dir_inc . dir_class . aclass.'database'.ext;
 require_once dir_inc . dir_class . aclass.'template'.ext;
 
 
 
 /* Copyright check. */
 if(!file_exists(dir_inc . inc.'hybrid'.ext))
 {
 	die('Copyright removed. :(');
 }
 
 /* Objects */
 $mysqli = new Hybrid\Database();
 $tpl    = new Hybrid\Template();
 
 /* Start! */
 $mysqli->mysqliConnect();
?>

