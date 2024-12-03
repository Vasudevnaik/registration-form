$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        // Prevent form submission to PHP directly
        event.preventDefault();

        // Validate inputs
        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let dob = $("#dob").val();
        let gender = $("#gender").val();
        let address = $("#address").val();

        if (!name || !email || !phone || !dob || !gender || !address) {
            alert("All fields are required!");
            return;
        }

        // Submit form via AJAX
        $.ajax({
            url: "process.php",
            type: "POST",
            data: $(this).serialize(),
            success: function (response) {
                $("#successMessage").html(response).fadeIn();
                $("#registrationForm")[0].reset();
            },
            error: function () {
                alert("Error submitting the form. Please try again.");
            }
        });
    });
});
