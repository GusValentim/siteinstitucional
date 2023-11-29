<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $intext = $_POST["intext"];

    // Load existing data from JSON file
    $jsonData = file_get_contents("form.json");
    $data = json_decode($jsonData, true);

    // Add new entry to data array
    $data[] = array(
        'name' => $name,
        'email' => $email,
        'intext' => $intext
    );

    // Convert data array to JSON and save it back to the file
    file_put_contents("form.json", json_encode($data));

    // Display success message
    header("Location: thank.html");
} else {
    // Redirect to the form if accessed directly
    header("Location: index.html");
}
?>
