exports.main = async (context, sendResponse) => {
 
  sendResponse({

    sections: [

      {
        "type": "tile",
        "content": [
          {
            "type": "text",
            "format": "markdown",
            "text": "**Custom Quotes One**"
          },
          {
            "type": "text",
            "format": "markdown",
            "text": "**Published:** Jan 1, 2022"
          },
          {
            "type": "tag",
            "text": "Published",
            "variant": "success",
      
           },
           {
            type: 'button',
            text: 'View quote',
            onClick: {
              type: 'IFRAME',
              label: 'Create Quote',
              // Width and height of the iframe (in pixels)
              width: 700,
              height: 600,
              uri: 'https://quotes.demolytics.site/create-quote',
              label: "View Quote",
            },
          }
        ]
      },
      
      {
        "type": "buttonRow",
        "buttons": [
          {
            type: 'button',
            variant: 'primary',
            text: 'Create quote ',
            onClick: {
              type: 'IFRAME',
              // Width and height of the iframe (in pixels)
              width: 700,
              height: 600,
              uri: 'https://quotes.demolytics.site/create-quote',
              label: "Create Quote",
            },
          },
          
        ]
      }
    
    ],
  });
};