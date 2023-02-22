exports.main = async (context, sendResponse) => {
    sendResponse({
      sections: [
        {
          type: 'text',
          text: 'Clicking the button will open a modal dialog with an iframe that displays the content at the provided URL.',
        },
        {
          type: 'button',
          text: 'Open iframe',
          onClick: {
            type: 'IFRAME',
            // Width and height of the iframe (in pixels)
            width: 700,
            height: 400,
            uri: 'https://www.youtube.com/embed/FDumsLFwyNM',
          },
        },
        {
          "type": "alert",
          "title": "This is an alert component. Use it to communicate important or timely info.",
          "body": {
            "type": "text",
            "text": "Use the variant property to change the color and purpose of the alert. Options are 'info', 'success', 'warning', and 'error'."
          }
        },
        {
          "type": "button",
          "text": "Click to trigger an action",
          "href": "https://hubspot.com",
          "onClick": {
            "type": "SERVERLESS_ACTION_HOOK",
            "serverlessFunction": "exampleFunction"
          }
        },
        {
          "type": "buttonRow",
          "buttons": [
            {
              "type": "button",
              "variant": "primary",
              "text": "Primary action"
            },
            {
              "type": "button",
              "text": "Action 2"
            },
            {
              "type": "button",
              "text": "Action 3"
            },
            {
              "type": "button",
              "text": "Action 4"
            }
          ]
        },
        {
          "type": "divider",
          "distance": "small"
        },
        {
          "type": "heading",
          "text": "Heading text"
        },
        {
          "type": "image",
          "src": "https://www.ui-extensibility.com/hubfs/welcome-sign.png",
          "alt": "A Welcome Sign sample image",
          "onClick": {
            "type": "SERVERLESS_ACTION_HOOK",
            "serverlessFunction": "exampleFunction"
          }
        },
        {
          "type": "progressBar",
          "variant": "success",
          "valueMax": 100,
          "value": 35,
          "title": "Success with value desc",
          "valueDescription": "35 of 150",
          "showPercentage": true
        },
        {
          "type": "progressBar",
          "variant": "success",
          "valueMax": 100,
          "value": 35,
          "title": "Success with value desc",
          "valueDescription": "35 of 150",
          "showPercentage": true
        },
        {
          "type": "form",
          "content": [
            {
              "type": "select",
              "name": "select_input",
              "label": "Single select list",
              "placeholder": "Select a value",
              "options": [
                {
                  "value": 42,
                  "label": "Option 1"
                },
                {
                  "value": true,
                  "label": "Option 2"
                },
                {
                  "value": "a string",
                  "label": "Option 3"
                }
              ]
            },
            {
              "type": "button",
              "text": "Submit form",
              "onClick": {
                "type": "SUBMIT",
                "serverlessFunction": "exampleFunction"
              }
            }
          ]
        },
        {
          "type": "statistics",
          "items": [
            {
              "label": "Statistics example",
              "number": "347",
              "description": {
                "type": "text",
                "format": "markdown",
                "text": "[Learn more about this component](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
              }
            },
            {
              "label": "Bounce Rate",
              "number": "18.4%",
              "description": {
                "type": "trend",
                "value": "2.25%",
                "direction": "decrease"
              }
            },
            {
              "label": "Time Spent",
              "number": "64.2",
              "description": {
                "type": "trend",
                "value": "2.1 seconds",
                "direction": "increase"
              }
            }
          ]
        },
        {
          "type": "stack",
          "distance": "flush",
          "content": [
            {
              "type": "heading",
              "text": "Stack example"
            },
            {
              "type": "text",
              "format": "markdown",
              "text": "`stack` can be used to alter the vertical spacing between components."
            }
          ]
        },
        {
          "type": "tag",
          "text": "completed",
          "variant": "success",
          "onClick": {
            "type": "SERVERLESS_ACTION_HOOK",
            "serverlessFunction": "exampleFunction"
          }
        },
        {
          "type": "text",
          "format": "markdown",
          "text": "Use the `markdown` variant to style text. This component can also be used with other components like tiles. Different styles include *bold*, _italics_, or `code`. You can also insert links. [Learn more about this component.](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
        },
        {
          "type": "form",
          "content": [
            {
              "type": "input",
              "name": "example_input",
              "inputType": "text",
              "label": "Example input field",
              "initialValue": "This is the default value for this field."
            },
            {
              "type": "button",
              "text": "Submit form",
              "onClick": {
                "type": "SUBMIT",
                "serverlessFunction": "exampleFunction"
              }
            }
          ]
        },
        {
          "type": "tile",
          "content": [
            {
              "type": "text",
              "text": "Use tiles to group related content together within a single card."
            },
            {
              "type": "text",
              "format": "markdown",
              "text": "You can customize the content by adding other components, such as: text, images, etc. [Learn more about the tile component.](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
            }
          ]
        }
      ],
    });
  };




