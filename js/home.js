firebase.auth().onAuthStateChanged((user)=>{

    if(user){

        //get userid
        let userid = user.uid;

        //pull all users

        firebase.firestore().collection("users").get().then((querySnapshot)=>{

            let content = '';
            
            querySnapshot.forEach((doc)=>{

                let username = doc.data().name;
                let theUseId = doc.data().userId;

                content += '<div>';
                content += '<h6>'+username+'</h6>';
                content += '</div>';

            })
            $("#allUsers").append(content);
        })

    }else{
        window.location.href = "index.html";
    }
})