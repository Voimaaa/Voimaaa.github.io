(function() {
emailjs.init("f0nUvyb7Jv3BpEuFo"); // Ersetze mit deinem echten Public Key
})();

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_soyq2sg", "template_wg3gpla", this)
      .then(function(response) {
        alert("Nachricht erfolgreich gesendet!");
        form.reset(); // Formular leeren
      }, function(error) {
        alert("Fehler beim Senden: " + JSON.stringify(error));
      });
  });
