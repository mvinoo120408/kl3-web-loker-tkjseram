document.getElementById("locationSelect").addEventListener("change", function() {
    var selectedValue = this.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
});