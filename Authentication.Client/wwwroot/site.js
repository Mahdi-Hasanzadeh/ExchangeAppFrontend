window.printElement = function (elementId,ownerName,logo) {
    var printContents = document.getElementById(elementId).innerHTML;
    var printWindow = window.open('', '', 'width=800,height=600');

    if (!printWindow) {
        alert("Unable to open print window. Please check your browser settings.");
        return;
    }

    // Fetch the print.css file and apply it inline
    fetch('print.css')
        .then(response => response.text())
        .then(css => {
            printWindow.document.write('<html><head><title>گزارش</title>');
            printWindow.document.write('<style>' + css + '</style>'); // Inject CSS inline
            printWindow.document.write('</head><body dir="rtl">');

            printWindow.document.write('<div class="page">');

            //// Header Section
            //printWindow.document.write('<div class="header">');
            ////printWindow.document.write('<img src="company-logo.png" class="logo" alt="Company Logo">');
            //printWindow.document.write('<div class="company-name">صرافی حسن زاده</div>');
            //printWindow.document.write('</div>');

            // Header Section
            printWindow.document.write('<div class="header" style="text-align:center; margin-bottom:20px;">');

            // ✅ If logo is provided, add it
            if (logo) {
                printWindow.document.write(`<img src="${logo}" class="logo" alt="Company Logo" style="height:80px; margin-bottom:10px;" />`);
            }

            // ✅ Determine display name
            let displayName = ownerName && ownerName.trim() !== "" ? `${ownerName}` : "صرافی";

            // ✅ Write the name
            printWindow.document.write(`<div class="company-name" style="font-size:1.5rem; font-weight:bold;">${displayName}</div>`);

            // Close header div
            printWindow.document.write('</div>');



            // Content Section
            printWindow.document.write('<div class="content">');
            printWindow.document.write('<div class="receipt-header">رسید تراکنش</div>');
            printWindow.document.write(printContents);

            var currentDate = new Date();
            var persianDate = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentDate);
            var gregorianDate = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentDate);

            printWindow.document.write('<div class="receipt-footer">تاریخ چاپ: میلادی (' + gregorianDate + ') | هجری شمسی (' + persianDate + ')</div>');
            printWindow.document.write('</div>');

            // Footer Section
            printWindow.document.write('<div class="footer">');
            printWindow.document.write('<div class="signature">امضا و مهر شرکت</div>');
            printWindow.document.write('</div>');

            printWindow.document.write('</div>');
            printWindow.document.write('</body></html>');
            printWindow.document.close();

            printWindow.onload = function () {
                setTimeout(function () {
                    printWindow.print();
                    printWindow.close();
                }, 1000);
            };
        })
        .catch(error => {
            console.error("Error loading CSS:", error);
            alert("Failed to load print styles.");
        });
};


window.printListOfElements = function (elementId, ownerName, logo) {
    var printContents = document.getElementById(elementId).innerHTML;
    var printWindow = window.open('', '', 'width=800,height=600');

    if (!printWindow) {
        alert("Unable to open print window. Please check your browser settings.");
        return;
    }

    // Fetch the print.css file and apply it inline
    fetch('print1.css')
        .then(response => response.text())
        .then(css => {
            printWindow.document.write('<html><head><title>گزارش</title>');
            printWindow.document.write('<style>' + css + '</style>'); // Inject CSS inline
            printWindow.document.write('</head><body dir="rtl">');

            printWindow.document.write('<div class="page">');

            // Header Section
            //printWindow.document.write('<div class="header">');
            ////printWindow.document.write('<img src="company-logo.png" class="logo" alt="Company Logo">');
            //printWindow.document.write('<div class="company-name">صرافی حسن زاده</div>');
            //printWindow.document.write('</div>');


            // Header Section
            printWindow.document.write('<div class="header" style="text-align:center; margin-bottom:20px;">');

            

            // ✅ Determine display name
            let displayName = ownerName && ownerName.trim() !== "" ? `${ownerName}` : "صرافی";

            // ✅ Write the name
            printWindow.document.write(`<div class="company-name" style="font-size:1.5rem; font-weight:bold;">${displayName}</div>`);

            // ✅ If logo is provided, add it
            if (logo) {
                printWindow.document.write(`<img src="${logo}" class="logo" alt="Company Logo" style="height:80px; margin-bottom:10px;" />`);
            }

            // Close header div
            printWindow.document.write('</div>');


            // Content Section
            printWindow.document.write('<div class="content">');
            printWindow.document.write('<div class="receipt-header">رسید تراکنش</div>');

            //printWindow.document.write('<div>');
            printWindow.document.write(printContents);
            //printWindow.document.write('</div>');

            var currentDate = new Date();
            var persianDate = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentDate);
            var gregorianDate = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentDate);

            

            // Footer Section
            printWindow.document.write('<div class="footer">');
            printWindow.document.write('<div class="receipt-footer"><p>تاریخ چاپ: میلادی (' + gregorianDate + ') | هجری شمسی (' + persianDate + ')</p><p class="signature">امضا و مهر شرکت</p></div>');
            printWindow.document.write('</div>');
            //printWindow.document.write('<div class="signature">امضا و مهر شرکت</div>');
            //printWindow.document.write('</div>');

            printWindow.document.write('</div>');
            printWindow.document.write('</body></html>');
            printWindow.document.close();

            printWindow.onload = function () {
                setTimeout(function () {
                    printWindow.print();
                    printWindow.close();
                }, 1000);
            };
        })
        .catch(error => {
            console.error("Error loading CSS:", error);
            alert("Failed to load print styles.");
        });
};





