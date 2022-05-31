// let img_array=["../Images/Image1.jpeg", "../Images/Image2.jpeg", "../Images/Image3.jpeg"]
//NOT NECESSARY TO GIVE FOLDER NAME AS MENTIONED BELOW

let img_array = ["Image1.jpeg", "Image2.jpeg", "Image3.jpeg"];
let count = 0;

function load() {
  setInterval(function update() {
    count++;
    if (count == img_array.length) {
      count = 0;
    }

    document.getElementById("slider_img").src = "../Images/" + img_array[count];
  }, 5000);

  // HERE WE HAVE CREATED A NEW FUNCTION CALLED LOAD WHICH WE WILL CALL ON THE BODY OF THE HTML. THIS LIAD IS OUR CUSTOM FUNCTION

  // document.getElementById("slider_img").src="../Images/"+img_array[0]

  document.getElementById("slider_img").src = "../Images/" + img_array[count];

  //HERE, THE 0 IN IMAGE ARRAY WILL BE REPLACED BY COUNT, WHICH WILL BE OUR CUSTOM INDEX

  // Headers, WE HAVE DEFINED TO LINK VIA ID AND GIVEN Source WE CAN SKIP SOURCE AND DEFINE IT ON TOP ASWELL IF WE WANT TO
}

function previous() {
  count--;
  if (count < 0) {
    count = img_array.length - 1;
  }
  document.getElementById("slider_img").src = "../Images/" + img_array[count];
}

function next() {
  count++;
  // if(count==img_array.length){
  //     count=0
  // }
  count = count % img_array.length;
  //this is using mod
  document.getElementById("slider_img").src = "../Images/" + img_array[count];
}
