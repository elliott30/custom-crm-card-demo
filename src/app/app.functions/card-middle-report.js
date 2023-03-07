// Customize the report ID with a single object report.

exports.main = async (context = {}, sendResponse) => {

  sendResponse({
    sections: [
{
    "type": "alert",
    "title": "Please note:",
    "body": {
      "type": "text",
      "format":"markdown",
      "text": "This report can be edited in reports"
      },
      "variant": "info"
},
{
  type: "text",
  format: "markdown",
  text: "Amount of deals in the past year",
},
  
      {
      "type": "crm::report",
      "reportId": 94246220,
      }
    ]
    
})
}