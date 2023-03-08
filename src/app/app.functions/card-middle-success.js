exports.main = async (context, sendResponse) => {
  const { event } = context;

// Handle submit actions
if (event && event.type === 'SUBMIT') {
    sendResponse({ 
      message: {
        type: 'SUCCESS',
        body: `Success!`,
      },
    });
};



  // Make some api calls here, get the data.
  sendResponse({
    sections: [
      {
        "type": "alert",
        "title": "Custom CRM Card Mockup",
        "body": {
          "type": "text",
          "text": "A mockup if a custom crm card to display information from HubSpot and external systems about your customer subscription."
        }
      },
      {
        type: 'text',
        "format": "markdown",
        text: 'Quickly access **information** about your customer subscription and take action below. Use the `markdown` variant to style text. This component can also be used with other components like tiles. Different styles include *bold*, _italics_, or `code`. You can also insert links. [Learn more about this component.](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)',
      },
 

      {
        "type": "divider",
        "distance": "small"
      },
      {
        "type": "heading",
        "format": "markdown",
        "text": "**Usage**"
       },
      {
        "type": "heading",
        "format": "markdown",
        "text": "*Key Statistics*"
      },
      {
        "type": "tile",
        "content": [
          {
            "type": "statistics",
            "items": [
             {
              "label": "Logins last week",
              "number": "55",
              "description": "Apr 11 - Apr 17"
             },
             {
              "label": "Usage this month",
              "number": "203",
              "description": {
                "type": "trend",
                "value": "23.36%",
                "direction": "increase"
                }
              },
              {
                "label": "Markdown syntax",
                "number": "405",
                "description": {
                   "type": "text",
                   "format": "markdown",
                   "text": "[Feb 12 - Feb 19](https://app.hubspot.com/)"
               }
             }
            ]
          }
        ]
      },

      {
        "type": "heading",
        "format": "markdown",
        "text": "*Usage*"
      },
      {
        "type": "tile",
        "content": [
          {
            "type": "progressBar",
            "variant": "success",
            "valueMax": 1000,
            "value": 350,
            "title": "Seats Used",
            "valueDescription": "350 of 1000",
            "showPercentage": true
          },
          {
            "type": "progressBar",
            "variant": "warning",
            "valueMax": 1000,
            "value": 750,
            "title": "Courses Created",
            "valueDescription": "750 of 1000",
            "showPercentage": false
          },
          {
            "type": "progressBar",
            "variant": "danger",
            "valueMax": 9,
            "value": 10,
            "title": "Users",
            "valueDescription": "9 of 10",
            "showPercentage": false
          }
        ]},
      
            
{
  "type": "divider",
  "distance": "small"
},
{
  "type": "heading",
  "format": "markdown",
  "text": "**Subscription details**"
},
{
  type: 'text',
  text: 'Displaying external data in a description list component',
},
{
  "type": "tile",
  "body": [
{
  "type": "descriptionList",
  "direction":"row",
  "items": [
    {
      "label": "ID",
      "value": {
        "type": "text",
        "format": "markdown",
        "text": "[#00000001](https://www.hubspot.com/)"
       }
     },
    {
     "label": "Product",
     "value": "Starter Pack"
   },
   {
     "label": "Start Date",
     "value": "2/13/2021"
   }
  ]
}
]
},
{
  "type": "tile",
  "body": [
{
  "type": "descriptionList",
  "direction":"row",
  "items": [
    {
      "label": "ID",
      "value": {
        "type": "text",
        "format": "markdown",
        "text": "[#00000001](https://www.hubspot.com/)"
       }
     },
    {
     "label": "Product",
     "value": "Starter Pack"
   },
   {
     "label": "Start Date",
     "value": "2/13/2021"
   }
  ]
}
]
},
{
  type: 'text',
  text: 'Display a table of a specific object. Not currently filtered.',
},
{
  "type": "crm::table",
  "objectTypeId": "deals",
  "properties": [
    "dealname",
    "hubspot_owner_id",
    "amount"
  ],
  "pageSize": 3
},


      {
        "type": "divider",
        "distance": "small"
      },
      {
        "type": "heading",
        "format": "markdown",
        "text": "**Reports**"
      },
      {
        "type": "tile",
        "content": [
          {
            "type": "heading",
            "format": "markdown",
            "text": "*Tableau report embed*"
          },
          {
            "type": "text",
            "format": "markdown",
            "text": "Tableau allows you to embed reports as an image that refreshes each time the page is loaded."
          },
          {
            "type": "alert",
            "title": "Please note:",
            "body": {
              "type": "text",
              "text": "This image will only appear if you're logged into Tableau."
            }
          },
          {
            "type": "image",
            "src": "https://prod-apsoutheast-a.online.tableau.com/t/demolytics/views/SalesforceSalesCloudSalesPipeline1/Embed_1.png",
            "alt": "A Welcome Sign sample image",
            onClick: {
              type: 'IFRAME',
              // Width and height of the iframe (in pixels)
              width: 1200,
              height: 600,
              uri: 'https://prod-apsoutheast-a.online.tableau.com/t/demolytics/views/SalesforceSalesCloudSalesPipeline1/Embed_1.png',
            },
          }
        ]
      },
      {
        "type": "tile",
        "content": [
          {
            "type": "heading",
            "format": "markdown",
            "text": "*HubSpot single object report*"
          },
      {
        type: 'text',
        "format": "markdown",
        text: 'Embed single object reports, filetered by the record you are on',
      },
      {
        "type": "crm::report",
        "reportId": 94244435,
      }]},
      {
        "type": "divider",
        "distance": "small"
      },

      {
        "type": "divider",
        "distance": "small"
      },
      {
        "type": "heading",
        "format": "markdown",
        "text": "**Actions**"
      },
      {
        "type": "heading",
        "format": "markdown",
        "text": "*Quick Actions*"
      },
      {
        "type": "tile",
        "content": [     
      {
        "type": "buttonRow",
        "buttons": [
          {
            "type": "button",
            "text": "View account",
            onClick: {
              type: 'IFRAME',
              // Width and height of the iframe (in pixels)
              width: 700,
              height: 400,
              uri: 'https://quotes.demolytics.site/create-quote',
            },
          },
          {
            "type": "button",
            "text": "Enroll in workflow",
            "onClick": {
              "type": "SUBMIT",
              "serverlessFunction": "card-middle-success"
            }
          },
          {
            "type": "button",
            "text": "Remind me in 3 days",
            "onClick": {
              "type": "SUBMIT",
              "serverlessFunction": "card-middle-success"
            }
          },
          {
            "type": "button",
            "variant":"destructive",
            "text": "Deactivate account",
            "onClick": {
              "type": "SUBMIT",
              "serverlessFunction": "card-middle-success"
            }
          }
        ]
      }]},
      {
        "type": "heading",
        "format": "markdown",
        "text": "*Add user*"
      },
      {
        "type": "tile",
        "content": [
      {
        "type": "form",
        "content": [
          {
            "type": "input",
            "name": "adduser_email",
            "inputType": "text",
            "label": "Email address",
            "initialValue": "b.brown@example.com"
          },
      {
        "type": "button",
        "variant":"primary",
        "text": "Add user",
        "onClick": {
          "type": "SUBMIT",
          "serverlessFunction": "card-middle-success"
        }
       }
    ]
  },
      ]},
      {
        "type": "heading",
        "format": "markdown",
        "text": "*Deactivate user*"
      },
      {
        "type": "tile",
        "content": [
      {
        "type": "form",
        "content": [
      {
        "type": "select",
        "name": "deactivate_user",
        "label": "Select a user",
        "placeholder": "Select an option",
        "description": "Please select a user from the list to decativate",
        "options": [
          {
            "value": 1,
            "label": "Bobby Brown"
          },
          {
            "value": 2,
            "label": "Sarah Smith"
          }
        ]
      },
      {
        "type": "button",
        "variant":"destructive",
        "text": "Deactivate user",
        "onClick": {
          "type": "SUBMIT",
          "serverlessFunction": "card-middle-success"
        }
       }
    ]
  },
      ]},
  {
    "type": "heading",
    "format": "markdown",
    "text": "*Create support escalation*"
  },
  {
    "type": "tile",
    "content": [

      {
        "type": "form",
        "content": [
          {
            "type": "input",
            "name": "escalation_subject",
            "inputType": "text",
            "label": "Subject",
            "initialValue": "This is the default value for this field."
          },
          {
            "type": "textarea",
            "name": "escalation_message",
            "label": "Message",
            "initialValue": "This is the default value for this field."
           },
           {
            "type": "button",
            "text": "Submit form",
            "onClick": {
              "type": "SUBMIT",
              "serverlessFunction": "card-middle-success"
            }
           }
        ]
      }]},
      {
        "type": "divider",
        "distance": "small"
      },
      {
        "type": "heading",
        "format": "markdown",

        "text": "**Customer Information**"
      },
      {
        "type": "tile",
        "content": [
          {
            "type": "tag",
            "text": "Customer",
            "variant": "success"
          },
          {
            "type": "descriptionList",
            "items": [
             {
               "label": "Company name",
               "value": "Oscar"
             },
             {
               "label": "Start date",
               "value": "2/13/2021"
             },
             {
               "label": "Champion",
               "value": {
                 "type": "text",
                 "format": "markdown",
                 "text": "[Jenny](https://www.hubspot.com/)"
                }
              }
            ]
          },
        
          {
            "type": "image",
            "src": "https://logo.clearbit.com/hubspot.com",
            "alt": "A Welcome Sign sample image",
            "onClick": {
              "type": "SERVERLESS_ACTION_HOOK",
              "serverlessFunction": "exampleFunction"
            }
          }
        ]
      }
      
    
  



  
     
  
    
  
    ],
  });
};






