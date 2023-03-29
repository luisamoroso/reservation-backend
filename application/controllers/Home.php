<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     *	- or -
     * 		http://example.com/index.php/welcome/index
     *	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function index()
    {
        $this->load->helper('url');
        $this->load->view('home');
    }

    public function reservation()
    {


        if ($this->input->method() == 'post') {
            $errors = array(); //To store errors 
            $form_data = array(); //Pass back the data to `form.php` 
            $location = '';
            $quantity = 0;
            $date = '';
            $time = '';
            $salutation = '';
            $firstname = '';
            $lastname = '';
            $telephone = '';
            $email = '';
            $comment = '';
            $privacy = false;

            // Parse JSON data from request
            $data = json_decode($this->security->xss_clean($this->input->raw_input_stream));

            if (isset($data)) {

                // Validate form data
                $location = html_escape($data->location);
                $quantity = html_escape($data->quantity);
                $date = html_escape($data->date);
                $time = html_escape($data->time);

                $salutation = html_escape($data->salutation);
                $firstname = html_escape($data->firstname);
                $lastname = html_escape($data->lastname);
                $telephone = html_escape($data->telephone);
                $email = html_escape($data->email);
                $comment = html_escape($data->comment);
                $privacy = $data->privacy;

                if (empty($location)) {
                    $errors['location'] = 'Location incorrect';
                }

                if (!filter_var($quantity, FILTER_VALIDATE_INT, array("options" => array("min_range" => 1, "max_range" => 8)))) {
                    $errors['quantity'] = 'Quantity incorrect';
                }

                if (empty($date)) {
                    $errors['date'] = 'Date incorrect';
                }

                if (empty($time)) {
                    $errors['time'] = 'Time incorrect';
                }

                if (empty($salutation) || strlen($salutation) >= 10) {
                    $errors['salutation'] = 'salutation incorrect';
                }

                if (empty($firstname) || strlen($firstname) > 50) {
                    $errors['firstname'] = 'Firstname incorrect';
                }

                if (empty($lastname) || strlen($lastname) >= 50) {
                    $errors['lastname'] = 'Lastname incorrect';
                }

                if (empty($telephone) || (strlen($telephone) < 5 && strlen($telephone) > 20)) {
                    $errors['telephone'] = 'telephone incorrect';
                }

                if (!empty($email)) {
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        $errors['email'] = 'Email incorrect';
                    }
                }

                if (!empty($comment) && strlen($comment) > 150) {
                    $errors['comment'] = 'Comment incorrect';
                }

                if (!filter_var($privacy, FILTER_VALIDATE_BOOLEAN)) {
                    $errors['privacy'] = 'Privacy incorrect';
                }
            }

            if (!empty($errors)) {    // If errors in validation
                $form_data['success'] = false;
                $form_data['errors'] = $errors;
            } else { // If not, process the form, and return true on success 
                $date = DateTime::createFromFormat('Y-m-d', $data->date);
                $data->date = $date->format('d.m.Y');

                // Send emails
                $this->load->library('email');
                $email_config['mailtype'] = 'html';
                $this->email->initialize($email_config);

                if (!empty($data->email) && filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
                    $this->email->from('reservation@porto-elia.de', 'Porto Elia Taverna');

                    // Customer email
                    $this->email->to($data->email);

                    $this->email->subject('Reservierungsbestätigung');
                    $email_customer_confirmation = $this->load->view('email_customer_confirmation', $data, true);
                    $this->email->message($email_customer_confirmation);

                    if (!$this->email->send()) {
                        $form_data['success'] = false;
                        $errors['customerEmail'] = 'Customer Email could not be sent';
                        $form_data['errors'] = $errors;
                    } else {
                        $form_data['success'] = true;
                    }

                    $this->email->clear();
                }


                $this->email->from('reservation@porto-elia.de', 'Porto Elia Taverna');

                // Owner email
                $this->email->to('reservation@porto-elia.de');
                $this->email->subject('Reservierungsbestätigung');

                $email_confirmation = $this->load->view('email_confirmation', $data, true);
                $this->email->message($email_confirmation);

                if (!$this->email->send()) {
                    $form_data['success'] = false;
                    $errors['OwnerEmail'] = 'Owner Email could not be sent';
                    $form_data['errors'] = $errors;
                } else {
                    $form_data['success'] = true;
                }
            }
        }

        //Return the data back to form.php 
        echo json_encode($form_data);
    }

    private function randomStringGenerator($n)
    {
        // Variable which store final string 
        $generated_string = "";

        // Create a string with the help of  
        // small letters, capital letters and 
        // digits. 
        $domain = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

        // Find the length of created string 
        $len = strlen($domain);

        // Loop to create random string 
        for ($i = 0; $i < $n; $i++) {
            // Generate a random index to pick 
            // characters 
            $index = rand(0, $len - 1);

            // Concatenating the character  
            // in resultant string 
            $generated_string = $generated_string . $domain[$index];
        }

        // Return the random generated string 
        return $generated_string;

        /* Driver code to test above function 
            $n = 5; 
            echo "Random String of length " . $n 
            . " = " . randomStringGenerator($n); */
    }
}
