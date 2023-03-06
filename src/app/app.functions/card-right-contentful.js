// For external API calls
const axios = require('axios');

exports.main = async (context = {}, sendResponse) => {
  const { event } = context;
  // const { firstname } = context.propertiesToSend;

const sections = [
  {
    type: "text",
    format: "markdown",
    text: "_An example of a CRM card extension that displays data from Hubspot, uses Contentful API to display content, and demonstrates custom actions using serverless functions. Please note that the demo Contentful API returns city names._",
  },
  {
  type: "form",
  content: [
    {
      type: "input",
      name: "search_term",
      inputType: "text",
      label: "Search for content",
      initialValue: "Paris"
    },
    {
      type: "button",
      text: "Search",
      variant:"primary",
      onClick: {
        type: "SUBMIT",
        serverlessFunction: "card-right-contentful"
      }
    }]
  }];


// Check if this the code is running after the form has been submitted, add the response:
if (event && event.type === 'SUBMIT') {
  
  // Value submitted to the form is accessible at: ${example_input}
  const { search_term } = event.payload.formState;

  try {
    const { data } = await axios.get(`https://cdn.contentful.com/spaces/cfexampleapi/environments/master/entries?query=${search_term}&access_token=b4c0n73n7fu1`);

    let contentfulContent = {
      type: "tile",
      body: [
        {
          type: "text",
          format: "markdown",
          text: `**Response:** ${data.items[0].fields.name}`
        }
      ]
    }

    sections.push(contentfulContent)

    sendResponse({ 
      sections,
      message: {
        type: 'SUCCESS',
        body: `Success! From contentful: ${data.items[0].fields.name}`,
      },
    });

  } catch (error) {
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: 'ERROR',
        body: `Error: ${error.message}`
      },
      sections: [...sectionsArray]
    });
  }
};

sendResponse({ 
  sections
});

};
