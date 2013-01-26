<?php
/*
 * @author CookieMonsta
 * 
 * @prj HybridCMS
 * @file Index
 */
 
 /* Define our security Method. (like RevCMS) */
 define('Hybrid_secure',1);
 
 /* Require the main grid. */
 require_once 'root.core.php';
 
 /* Set directory to tpl and 404 page. */
 define('error', '404');
 define('version', cms_version);
 define('creator', cms_creator);
 define('Hybrid', cms_hybrid);
 define('dir_tpl',dir_pub . $_config['site']['tpl'] . '/');

 /* Request, Print. */
 if(empty($_GET['page'])) 
 {
 	header('Location: '.$_config['site']['url'].'/index');
 } 
 else 
 {
    $page = (preg_match('/[^a-zA-Z0-9\ _-]/', $_GET['page']) || !file_exists(dir_tpl . $_GET['page'] . '.html') ? error : $_GET['page']);
	
 	$tpl->AddFile(htmlspecialchars($page));
	$tpl->Finish();
 }
    require_once dir_tpl . $page . '.html';
?>
<!-- <?php echo Hybrid ?> Build: <?php echo version ?>-->
<!-- <?php echo Hybrid ?>, by <?php echo creator ?>-->
