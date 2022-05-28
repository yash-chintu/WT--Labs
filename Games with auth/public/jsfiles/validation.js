function validate() {
  let mobileNumLength = String(mobile.value).length
  if (password.value != confirmPassword.value) {
    alert("Password and Confirm password not matching");
  } else if (mobileNumLength > 1 && mobileNumLength != 10) {
    alert("Invalid Mobile Number , you entered less than 10 digits");
  } else {
    submit.click();
  }
}
