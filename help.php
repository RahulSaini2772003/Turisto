<!DOCTYPE html>
<html>
<head>
	<title>Tourism Report Form</title>
    <link href="help.css" rel="stylesheet">
	<script>
		function submitForm() {
			alert("Your report has been submitted. Thank you for your complaint. Action will be taken ASAP.");
		}
	</script>
</head>
<body>
    <div class="main">
	<h2>Tourism Report Form</h2>
	<form action="help.php" method="post" onsubmit="submitForm()">
		<label for="email">Email:</label>
		<input type="email" id="email" name="email" required><br><br>
		
		<label for="mobile">Mobile Number:</label>
		<input type="tel" id="mobile" name="mobile" required><br><br>
		
		<label for="complaint">Complaint:</label><br>
		<textarea id="complaint" name="complaint" rows="5" cols="50" required></textarea><br><br>
		
		<input type="submit" name='sb' value="Submit">
	</form>
	<?php

if(isset($_POST['sb'])){

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reports";

$conn = mysqli_connect($servername, $username, $password, $dbname);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$email = $_POST['email'];
$mobile = $_POST['mobile'];
$complaint = $_POST['complaint'];

$sql = "INSERT INTO reports (email, mobile, complaint) VALUES ('$email', '$mobile', '$complaint')";

if (mysqli_query($conn, $sql)) {

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
}

?>
    
    </div>
</body>
</html>
