const axios = require('axios');

exports.main = async (context = {}, sendResponse) => {

  // Create variable  to store properties from the record.
   const { hs_object_id } = context.propertiesToSend;
  









  try {
    // Get from placeholder
    const items = await axios.get("https://jsonplaceholder.typicode.com/todos");

// Get from HubSpot
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://api.hubapi.com/crm/v4/objects/deals/${hs_object_id}/associations/contacts`,
  headers: { 
    'Authorization': `Bearer ${context.secrets.PRIVATE_APP_ACCESS_TOKEN}`
  }
};
const hubspotItems = await axios(config)



// HubSpot section

let hubspotSection = []

if (hubspotItems.data.length === 0) {
  hubspotSection = [
    {
      type: 'heading',
      text: 'No contacts found...',
    }
  ];
} else {
  hubspotSection = hubspotItems.data.results.slice(0,3).map((item) => {
    return {
      type: 'tile',
      content: [
        {
          type: 'descriptionList',
          direction: 'row',
          items: [
            {
              label: 'Associated Contact ID',
              value: {
                type: 'text',
                format: 'markdown',
                text: '**[' + item.toObjectId + '](' + `https://app.hubspot.com/contacts/7476511/contact/${item.id}` + ')**',
              },
            },
          ],
        },
      ],
    };
  });
}



// Dummy section




    let todos = [];

    if (items.data.length === 0) {
      todos = [
        {
          type: 'heading',
          text: 'No todos found...',
        }
      ];
    } else {
      todos = items.data.slice(0,3).map((item) => {
        return {
          type: 'tile',
          content: [
            {
              type: 'descriptionList',
              direction: 'row',
              items: [
                {
                  label: 'Title',
                  value: {
                    type: 'text',
                    format: 'markdown',
                    text: '**[' + item.title + '](' + `https://jsonplaceholder.typicode.com/posts/${item.id}` + ')**',
                  },
                },
                {
                  label: 'Status',
                  value: item.completed ? 'Complete' : 'Incomplete',
                },
              ],
            },
          ],
        };
      });
    }

    sendResponse({
      sections: [...hubspotSection, ...todos],
    });
  } catch (error) {
    sendResponse({
      message: {
        type: 'ERROR',
        body: `Error: ${error.message}`,
      },
      sections: [
        {
          type: 'text',
          text: error.message,
        },
      ],
    });
  }
};
