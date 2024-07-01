import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs"

inquirer
  .prompt([
    {
        message:"Please Enter your URL",
        name:"URL"
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url= answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("QR.png"));
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });