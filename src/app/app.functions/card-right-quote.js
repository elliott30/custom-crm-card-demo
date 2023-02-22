exports.main = async (context, sendResponse) => {
 
  sendResponse({

    sections: [
      {
        type: 'text',
        text: 'Create a quote',
      },
      {
        type: 'button',
        text: 'Open iframe',
        onClick: {
          type: 'IFRAME',
          // Width and height of the iframe (in pixels)
          width: 1200,
          height: 600,
          uri: 'https://tuanpham-dev.github.io/react-invoice-generator/',
        },
      },
      {
        type: 'button',
        text: 'Open iframe',
        onClick: {
          type: 'IFRAME',
          // Width and height of the iframe (in pixels)
          width: 12000,
          height: 600,
          uri: 'https://quotes.demolytics.site/create-quote',
        },
      }
    ],
  });
};