<?php
    header('Content-Type: text/xml');       //header describes the what kind of output that is return by this php file
    echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
    echo '<response>';

    $name = $_GET['name'];
    $username = array('ANOJA','MADUSANKA','KURUPPU');

    if(in_array(strtoupper($name), $username)) {
        echo 'Hello Welcome ' . htmlentities($name) . '.';      //when there is space like thing by htmlentities it converts to the html character
    }else if(trim($name == '')) {
        echo 'We need your name. Please enter your name.';
    }else {
        echo htmlentities($name) .' You are not a member';
    }
    echo '</response>';
?>