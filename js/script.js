// ini javascript

function calculateBMI() {

    // Get Value from input form  
    const berat = parseFloat(document.getElementById("berat-badan").value);
    const tinggi = parseFloat(document.getElementById("tinggi-badan").value)/100; // cm to meter conversion

    // Get Value for Gender 
    const gender = document.querySelector('input[name="jen-kel"]:checked').value;

    // Validasi Input
    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <=0) {
        document.getElementById("result").innerHTML= "<h4>Silahkan Masukkan nilai berat dan tinggi yang valid</h4>"
        document.getElementById("advice").textContent = "";
        return;
    } 
    

    // BMI Calculations 
    const bmi = berat / (tinggi*tinggi)
    const roundedBMI = bmi.toFixed(1);  // result will be rounded to 1 decimal point

    // Determining BMI Category 
    let Category ;
    let advice ;
    if (bmi < 18.5) {
        Category = "Kekurangan Berat Badan"
        advice = "Anda berada dalam kategori kekurangan berat badan. Pertimbangkan untuk makan makanan bergizi dan menambah asupan kalori.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        Category = "normal (sehat)";
        advice = "Anda memiliki berat badan yang sehat dan ideal. Pertahankan pola makan yang seimbang dan rutin berolahraga.";
    } else if (bmi >=25 && bmi <29.9) {
        Category = "berat badan berlebih"
        advice = "Anda memiliki berat badan berlebih. Cobalah berolahraga secara teratur dan jaga pola makan untuk mencapai berat badan yang sehat."
    } else {
        Category = "obesitas";
        advice = "Hasil BMI Anda menunjukkan obesitas. Sebaiknya anda menjaga pola makan sehat dan berkonsultasi dengan profesional untuk bimbingan lebih lanjut.";
    }

    const header = document.createElement("h3");
    header.textContent = `Hasil Perhitungan BMI (${gender})`;
    
    const resultBMIText = document.createElement("p");
    resultBMIText.innerHTML = `Hasil BMI Anda ${roundedBMI} <br> Anda masuk dalam kategori ${Category}`;

    // Find element div result  
    const resultBMIDiv = document.getElementById("result");

    // Empty ResultBMIDiv to prevent stacking of results 
    resultBMIDiv.innerHTML = "";

    // Add header, result, and gender text to resultBMIDiv 
    resultBMIDiv.appendChild(header);
    resultBMIDiv.appendChild(resultBMIText)
    document.getElementById("advice").textContent = advice;

 }