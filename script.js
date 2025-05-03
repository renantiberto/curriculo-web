const btnDownloadCv = document.getElementById("download_cv");
const admissionDate = new Date("2021-12-20");

btnDownloadCv.addEventListener("click", () => {
    //const cv = document.getElementById("app")
    const cv = document.getElementById("app")

    const options = {
        margin: [10,10,10,10],
        filename: "curriculo-renantiberto.pdf",
        image: { 
            type: 'jpeg', 
            quality: 0.98
        },
        html2canvas: { 
            scale: 2 
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        },
    }

    html2pdf().set(options).from(cv).save();
})

function experienceTime( referenceDate ) {
    const currentDate = new Date();
    const fixedDate = new Date( referenceDate );

    let years = currentDate.getFullYear() - fixedDate.getFullYear();

    const currentMounth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const fixedMounth = fixedDate.getMonth();
    const fixedDay = fixedDate.getDate();

    if ( currentMounth < fixedMounth || (currentMounth === fixedMounth && currentDay < fixedDay)) {
        years--;
    }

    return years;
}

document.getElementById("time-exp").textContent = experienceTime( admissionDate );