      
Webcam.attach( '#camera' );

//Crie a variável que guarda a camera 
camera = document.getElementById("camera");
      
  Webcam.set({
    //Defina a largura e a altura como 300 e 500 
   width:300,
    height:500,
    //Defina o formato da foto como 'png'
    image_format : png
   
  });

  function imgtake(){

  

    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
  }


//Inicializa o método Image Classifier com MobileNet
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EnOV9oRv7/model.json',modelLoaded);

  
  function modelLoaded() {
    console.log('Modelo Carregado!');
  }
      
 function imgident(){

    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }


// Uma função a ser executada quando obtemos algum erro e os resultados
function gotResult(error, results) {
 if(error){

  console.log(error)
  } else {
  console.log(results)
  
   //Utilize o código que altera o HTML com javascript 
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
