<?php
/**
 * Created by PhpStorm.
 * User: viablesoft
 * Date: 03.05.2018
 * Time: 11:27
 */




$name = $_POST['dataset'];
$root = "";

foreach ($name as $dataset){
    $link = $dataset;
    break;
}

$root = $root.$link;

//echo $root;

header('Location: HTML/'.$root);

/*
 *
 * $command = escapeshellcmd('python HDTrees.py Trees/ancestor.tre');
$output = shell_exec($command);
echo $output;


*/




?>