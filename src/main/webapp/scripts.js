function generateCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [11, 8.5]  // Standard certificate size in inches
    });

    const name = document.getElementById("student-name").value || "Student Name";

    // Customize the certificate design
    const title = "Certificate of Completion";
    const subtitle = "AWS DevOps Cloud Bootcamp";
    const awardedText = "This certifies that";
    const courseText = `has successfully completed the AWS DevOps Cloud Bootcamp, 
demonstrating exceptional skills and dedication.`;
    const date = `Date: ${new Date().toLocaleDateString()}`;
    const instructorText = "Instructor:";
    const instructorName = "George Yendluri";
    const signatureText = "VYYOMA TRAININGS";

    // Define margins and spacing
    const margin = 0.5; // Margin around the border
    const lineSpacing = 0.3; // Space between lines of text
    const titleY = 1.5;
    const subtitleY = titleY + lineSpacing * 2;
    const awardedTextY = subtitleY + lineSpacing * 4;
    const nameY = awardedTextY + lineSpacing * 1.5;
    const courseTextY = nameY + lineSpacing * 1.5;
    const dateY = courseTextY + lineSpacing * 8.7;
    const instructorY = 6.9;
    const signatureY = 7;

    // Certificate Border
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.1);
    doc.rect(margin, margin, 11 - margin * 2, 8.5 - margin * 2);  // Outer Border

    // Decorative Border (Inner)
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.02);
    doc.rect(margin + 0.2, margin + 0.2, 11 - margin * 2 - 0.4, 8.5 - margin * 2 - 0.4);

    // Title
    doc.setFont("Times", "bolditalic");
    doc.setFontSize(30);
    doc.setTextColor(30, 30, 30);
    doc.text(title, 5.5, titleY, null, null, "center");

    // Subtitle
    doc.setFont("Times", "italic");
    doc.setFontSize(20);
    doc.text(subtitle, 5.5, subtitleY, null, null, "center");

    // Awarded Text
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(awardedText, 5.5, awardedTextY, null, null, "center");

    // Student Name
    doc.setLineWidth(0.02);
    doc.line(7.7, nameY, 3, nameY);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(24);
    doc.text(name, 5.5, nameY - 0.05, null, null, "center");

    // Course Completion Text
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(16);
    doc.text(courseText, 5.5, courseTextY, null, null, "center");

    // Date
    doc.setFont("Helvetica", "italic");
    doc.setFontSize(14);
    doc.text(date, 8.5, dateY, null, null, "center");

    // Instructor Signature
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text(instructorText, 1.5, instructorY);

    doc.setFont("Helvetica", "bold");
    doc.text(instructorName, 1.5, instructorY + lineSpacing);

    // Signature Placeholder
    // Signature Line
    doc.setLineWidth(0.02);
    doc.line(7.5, signatureY, 9.5, signatureY);
    doc.setFont("Helvetica", "bold");
    doc.text(signatureText, 8.5, signatureY + lineSpacing, null, null, "center");

    const pdfData = doc.output("blob");
    const downloadLink = document.getElementById("download-link");
    downloadLink.href = URL.createObjectURL(pdfData);

    // Display the download link
    document.getElementById("certificate-container").style.display = "block";
}

// New function to handle the click event on the download link
document.getElementById("download-link").addEventListener("click", function() {
    // Hide the certificate section and show the thank you message
    document.querySelector(".certificate-section").style.display = "none";
    document.querySelector(".thank-you-message").style.display = "block";
});
