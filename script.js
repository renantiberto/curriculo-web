const btnDownloadCv = document.getElementById("download_cv")

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