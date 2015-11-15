document.getElementById('convert_file').onclick = function(){
  document.getElementById('status').innerHTML += " Success!";
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