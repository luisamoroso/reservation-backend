<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang=en>

<head>
    <meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge">
    <meta name=viewport content="width=device-width,initial-scale=1">
</head>

<body>
    Neue Reservierung in <?php if($location == '0'): echo "Taverna Porto Elia"; else: "Meat & Greek"; endif; ?>:
    <div>
        <p>
            <b>Vorname: </b> <?php echo $firstname ?>
        </p>
        <p>
            <b>Nachname: </b><?php echo $lastname ?>
        </p>
        <p>
            <b>Datum: </b><?php echo $date ?>
        </p>
        <p>
            <b>Uhrzeit: </b><?php echo $time ?>
        </p>
        <p>
            <b> Anzahl der Personen: </b><?php echo $quantity ?>
        </p>
        <p>
            <b>Telefon: </b><a href="tel:<?php echo $telephone ?>"><?php echo $telephone ?></a>
        </p>
        <p>
            <b>Email: </b> <a href="mailto:<?php echo $email ?>"><?php echo $email ?></a>
        </p>
        <p>
            <b>Besondere Wünsche: </b><?php echo $comment ?>
        </p>
    </div>
</body>

</html>