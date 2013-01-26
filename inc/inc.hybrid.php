<?php
/*
 * @author CookieMonsta
 * 
 * @prj HybridCMS
 * @file Hybrid's Copyright
 * 
 * -------------------------------------------
 * Hey there, this is the Copyright file.
 * This will show the cms' version, name,
 * etc.
 * -------------------------------------------
 * 
 * Do NOT, edit this file. It will break the
 * cms.
 */
 
 define('cms_version', '1.0.5b');
 define('cms_creator', 'CookieMonsta');
 define('cms_hybrid', 'HybridCMS');
 
 /* Hardcoded if statements. */
 
 /* Make sure the user don't change the cms name. */
 if(cms_hybrid == 'HybridCMS')
 {
 	$hybrid = true;
 }
 else
 {
 	die('HybridCMS Copyright error: Don\'t change the name of the cms!');
 }
 
 /* Make sure the user don't change the my name! */
 if(cms_creator == 'CookieMonsta')
 {
 	$creator = true;
 }
 else
 {
 	die('HybridCMS Copyright error: Don\'t change my name!');
 }
 
 /* Make sure the version is correct. */
 if(cms_version == '1.0.5b')
 {
 	$version = true;
 }
 else 
 {
 	die('HybridCMS Version is Wrong. Don\'t touch inc.hybrid.php!');
 }

?>