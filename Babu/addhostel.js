function submitForm() {
    var hostelName = document.getElementById("hostelName").value;
    var wardenName = document.getElementById("wardenName").value;
    var wardenPhone = document.getElementById("wardenPhone").value;
    var messManager = document.getElementById("messManager").value;
    var hostelPassword = document.getElementById("hostelPassword").value;


    var hostelImage = document.getElementById("hostelImage").files[0];
    var storageRef = firebase.storage().ref('hostel_images/' + hostelName + '_' + hostelImage.name);

    var uploadTask = storageRef.put(hostelImage);


    uploadTask.then(function (snapshot) {

        snapshot.ref.getDownloadURL().then(function (downloadURL) {

            firebase.database().ref('hostels/' + hostelName).set({
                hostelName: hostelName,
                wardenName: wardenName,
                wardenPhone: wardenPhone,
                messManager: messManager,
                hostelPassword: hostelPassword,
                hostelImage: downloadURL
            }).then(function () {
                alert("Hostel registered successfully!");

            }).catch(function (error) {
                alert("Error adding hostel: ", error);
            });
        })
    }).catch(function (error) {
        alert("Error uploading image: " + error.message);
    });
}