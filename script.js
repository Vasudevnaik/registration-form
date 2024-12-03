$(document).ready(function() {
    $('#registration-form').submit(function(e) {
        e.preventDefault();

        // Get form data
        var formData = $(this).serialize();

        // Send form data to the server via AJAX
        $.ajax({
            type: 'POST',
            url: 'process_form.php',
            data: formData,
            success: function(response) {
                $('#result').html(response);
                $('#registration-form')[0].reset();
            },
            error: function() {
                alert('There was an error while processing the form.');
            }
        });
    });
});
