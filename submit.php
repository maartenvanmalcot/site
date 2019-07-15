<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">

    <title>The HTML5 Herald</title>
    <meta name="description" content="The HTML5 Herald">
    <meta name="author" content="SitePoint">

    <style>
        body {
            font: 1.475em Nevis, Sans-serif; 
            
            color: white;
            background: -webkit-linear-gradient(left, #083358, #083358);
            /* For Safari 5.1 to 6.0 */
            background: -o-linear-gradient(right, #083358, #083358);
            /* For Opera 11.1 to 12.0 */
            background: -moz-linear-gradient(right, #083358, #083358);
            /* For Firefox 3.6 to 15 */
            background: linear-gradient(to right, #083358, #083358);
            /* Standard syntax */
        }
        p {
            margin: 30px;
        }
    </style>

    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
</head>

<body>



    <?php



if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = $email; 
    $to = 'm_vanmalcot@hotmail.com'; 
    $subject = 'Contact form : ' .$name;
    
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
    
    
    
    
    
    if ($name != '' && $email != '' &&$message != '') {
    /*
    echo '<p>'.$name.'</p>'; 
        echo '<p>'.$email.'</p>';  
        echo '<p>'.$message.'</p>';  
        echo '<p>'.$from.'</p>';  
        echo '<p>'.$to.'</p>';  
        echo '<p>'.$subject.'</p>'; 
        
        
     */   
        
    
    if (mail($to, $subject, $body, $from)) { 
        echo '<p>Your message has been sent!</p>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }
    }
        else {
            echo '<p>Something went wrong, go back and try again : complete all the fields</p>';
        }

}
else {
    echo '<p>not submitted</p>';
}
?>

</body>

</html>