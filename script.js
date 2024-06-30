function generateCertificate() {
 
    var myName = document.getElementById('myName').value;
    var myCourse = document.getElementById('myCourse').value;
    var myDate = document.getElementById('myDate').value;

  
    document.getElementById('name').innerText = myName;
    document.getElementById('course').innerText = myCourse;
    document.getElementById('date').innerText = myDate;

  
    document.getElementById('certificate').style.display = 'block';
}