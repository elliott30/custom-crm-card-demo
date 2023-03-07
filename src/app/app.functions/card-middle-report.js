// Customize the report ID with a single object report.

exports.main = async (context = {}, sendResponse) => {

  const introMessage = {
    type: "text",
    format: "markdown",
    text: "Amount of deals in the past year",
  };

  const alertBanner = {
    "type": "alert",
    "title": "Please note:",
    "body": {
      "type": "text",
      "format":"markdown",
      "text": "This report can be edited in reports"
      },
      "variant": "info"
  }

  try {

    const sections = [  {
      "type": "crm::report",
      "reportId": 9424660,
    },
    ];

    sendResponse({ sections: [introMessage, alertBanner, ...sections] });
  } catch (error) {
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: 'ERROR',
        body: `Error: ${error.message}`
      },
      sections: [introMessage]
    });
  }
};