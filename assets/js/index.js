document.getElementById('convert_file').onclick = function(){
    if(document.getElementById('my_file').value !== ""){
        document.getElementById('status').innerHTML = "Status: Loading Success!";
        var cx = document.querySelector("canvas").getContext("2d");
                                cx.font = "28px Georgia";
                                cx.fillStyle = "fuchsia";
                                cx.fillText("Yo Jason~ hahahaha", 10, 50);
    }
    else{
        document.getElementById('status').innerHTML = "Status: Loading Failed!";
    }
}

var img;
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // $('in')
                //     .attr('src', e.target.result)
                //     .width(350)
                //     .height(300);
                img = document.getElementById('in');
                img.src = e.target.result;
            };

            reader.readAsDataURL(input.files[0]);
        }
}

function clickConvert(){
    document.getElementById("convert_file").click();
}
function clickLoad(){
    document.getElementById("my_file").click();
}