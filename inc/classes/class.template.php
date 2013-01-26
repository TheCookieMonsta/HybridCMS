<?php
/*
 * @author garetjoey
 * 
 * @prj HybridCMS
 * @file Template class
 */
 namespace HybridCMS;
 if(!defined('Hybrid_secure')) die('Incorrect access level.');
 class Template
 {
 	private $values = Array();
 	private $language;
 	private $tpl;

 	public function __construct()
 	{
  		global $_config;
		
		/* Site params. */
   		$this->addParam('$site->name', $_config['site']['name']);
		$this->addParam('$site->desc', $_config['site']['desc']);
		$this->addParam('$site->path', $_config['site']['url']);
		$this->addParam('$site->tpl',  $_config['site']['tpl']);
		
		/* Emulator params. */
		$this->addParam('$emu->ip',    $_config['emu']['ip']);
		$this->addParam('$emu->port',  $_config['emu']['port']);
		$this->addParam('$emu->mus',   $_config['emu']['mus']);
		
		/* Database params. */
		$this->addParam('$db->driver', $_config['db']['driver']);
		
		/* Hybrid params. */
		$this->addParam('$hybrid->build', cms_version);
		$this->addParam('$hybrid->dude',  cms_creator);
		$this->addParam('$hybrid->name',  cms_hybrid);
    }
 	public function filter($values)
 	{
  		foreach($this->Value as $replace => $value) { $values = str_replace("{" . $replace . "}", $value, $values); }
  		return $values;  
 	}
 	public function Write($data)
 	{
  		$replace = $data.PHP_EOL;
  		$this->tpl .= $replace;
 	}
 	public function addParam($Tag, $Value)
 	{
  		$this->Value[$Tag] = $Value;
 	}
 	public function AddFile($file)
 	{
 		global $_config;
		
  		ob_start();
  		if (file_exists('pub/'.$_config['site']['tpl'].'/' . $file . '.html'))
  	{
   		Require_once('pub/'.$_config['site']['tpl'].'/' . $file . '.html');
  	} 
  	else 
  	{
   		Die("<br /><center> Template: $file.html Doesnt Exists!! </center>");
  	}
  		$this->tpl .= ob_get_contents();
  		ob_end_clean();
 	}
 	public function Finish()
 	{
  		print $this->filter($this->tpl);
 	}
  }
?>

