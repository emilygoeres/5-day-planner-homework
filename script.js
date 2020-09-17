            var d = new Date();
            document.getElementById("currentDay").innerHTML = d;

            // added the local storage 
        // if (typeof (Storage) !== "undefined") {
            // localStorage.setItem("textarea", "comments");
            // document.getElementById("result").innerHTML = localStorage.getItem("textarea");
        // } else {
            // document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        // }

        $(".saveBtn").on("click",function(){
            var id=$(this).attr("id")
            var time= id.split("-")[1]
            var i=$("#txt-"+time).val()
            console.log(id,time,"txt-"+time,i)
            localStorage.setItem(time,i)
        })
        for (var i=9; i<=17; i++) {
            var planner = localStorage.getItem(i)
            $("#txt-"+i).val(planner)
        }