document.addEventListener("DOMContentLoaded", function() {
  const sapInput = document.getElementById("sap");
  sapInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 15);
  });
});
