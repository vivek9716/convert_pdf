const xml = require('xml-pdf');
var options = {};

xml.xmlpdf('./files/in.xml', './files/output.pdf', './files/template.mustache', options, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
});
