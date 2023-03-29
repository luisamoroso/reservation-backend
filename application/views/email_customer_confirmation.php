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
    <h3>Vielen Dank für Ihre Reservierung!</h3>
    <p>
        Hiermit bestätigen wir Ihre Reservierung bei <?php if ($location == 'RESTAURANT') { echo "Restaurant"; } else { echo "Taverve"; } ?> Porto Elia <?php if($location == 'RESTAURANT') { echo ""; } else { echo "- Meat & Greek"; } ?>:
    </p>

    <div>
        <p>
            <b>Name: </b> <?php echo $firstname ?> <?php echo $lastname ?>
        </p>
        <p>
            <b>Datum: </b> <?php echo $date ?>
        </p>
        <p>
            <b>Uhrzeit: </b> <?php echo $time ?>
        </p>
        <p>
            <b>Anzahl der Personen: </b> <?php echo $quantity ?>
        </p>
        <p>
            <b>Besondere Wünsche: </b> <?php echo $comment ?>
        </p>
    </div>
    <br>
    <div>
        <div>
            BITTE BEACHTEN!
            <p>
                Sollten Sie Ihre Reservierung stornieren wollen, kontaktieren Sie uns bitte telefonisch oder per WhatsApp unter der Nummer <a href="tel:+491785272501">+491785272501</a>.
                Bitte geben Sie Ihren Namen, das Datum und die Uhrzeit an.
            </p>
        </div>

        <div>
            Wir freuen uns auf Sie! <br>

            <address>
                <?php if ($location == 'RESTAURANT') { echo "Restaurant"; } else { echo "Taverve"; } ?> Porto Elia <?php if ($location == 'RESTAURANT') { echo ""; } else { echo "- Meat & Greek"; } ?><br>
                <?php if ($location == 'RESTAURANT') { echo "Obere Waiblinger Straße 153"; } else { echo "Deckerstr. 51"; } ?><br>
                <?php if ($location == 'RESTAURANT') { echo "70374 Stuttgart"; } else { echo "70372 Stuttgart"; } ?><br>
            </address>
            <p>
                Website: www.porto-elia.de <br>
                Facebook: portoeliataverna <br>
                Instagram: portoelia_stuttgart
            </p>
        </div>
    </div>

</body>

</html>