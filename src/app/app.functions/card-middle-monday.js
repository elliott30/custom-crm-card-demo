const axios = require('axios');

exports.main = async (context = {}, sendResponse) => {
  const { firstname, lastname } = context.propertiesToSend;

  try {

/*
    var data = JSON.stringify({
      "query": "query {items_by_column_values (board_id: 3906981690, column_id: \"integration\", column_value: \"11956120172\") {id name}}"
    });
    
    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: 'https://api.monday.com/v2',
      headers: { 
        'Authorization': 'YOUR-KEY', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    const mondayItems = await axios(config);
*/

    const items = await axios.get("https://jsonplaceholder.typicode.com/todos");

    let section = [];

    if (items.data.length === 0) {
      section = [
        {
          type: 'heading',
          text: 'No tasks found for ' + firstname + ' ' + lastname + '...',
        }
      ];
    } else {
      section = items.data.slice(0,3).map((item) => {
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
      sections: [...section],
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
