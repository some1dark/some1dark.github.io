<?php
// Create a function to send the correct headers
function redirect($url) {
   header("HTTP/1.1 301 Moved Permanently");
   header("Location: $url");
   exit();
}

// Get the path to the file that was requested
$filename = $_SERVER['REQUEST_URI'];

// Perform the redirects
switch ($filename) {
case "/old-page1.html":
   redirect("http://www.example.com/new-page1");
   break;
case "/old-page2.html":
   redirect("http://www.example.com/new-page2");
   break;
case "/old-page3.html":
   redirect("http://www.example.com/new-page3");
   break;
}
?>