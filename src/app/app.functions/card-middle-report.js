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
      "text": "Single object reports are supported. For associated object types, only records associated with the current record are shown."
      },
      "variant": "info"
},
  
      {
      "type": "crm::report",
      "reportId": 94244435,
      }
    ]
    
})
}