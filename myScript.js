var CountryObject =  {
  "India":
  {
   "Kerala":[],
    "Karnataka":[],
    "Tamil Nadu":[]
    },

  "USA":
  {
   "Alabama":[],
    "Alaska":[],
     "Arizona":[]
     },
  "UK" :
  {
  "London":[],
   "Kent":[],
    "Devon":[]
  }
}
window.onload = function(){

  var countrySel = document.getElementById("country");
  var stateSel = document.getElementById("state");
  for (var x in CountryObject)
   {
    countrySel.options[countrySel.options.length] = new Option(x);
  }
  countrySel.onchange = function()
  {
    stateSel.length = 1;

    for (var y in CountryObject[this.value])
    {
      stateSel.options[stateSel.options.length] = new Option(y);
    }
  }

}
function fileValidation()
{
            var fileInput =
                document.getElementById('file');

            var filePath = fileInput.value;

            var allowedExtensions =
                    /(\.docx|\.jpeg|\.pdf|\.jpg)$/i;

            if (!allowedExtensions.exec(filePath)) {
                alert('Invalid file type');
                fileInput.value = '';
                return false;
            }



 }

function Validation(){
var fname=document.myform.name.value;



if(fname==""){

	document.getElementById('nameerr').innerHTML="Name required";
	return false;
}
else{

	document.getElementById('nameerr').innerHTML=" ";
}
