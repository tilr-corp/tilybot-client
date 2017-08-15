This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

This is a sample client/front-end for tilybot. Documentation on response/payload formatting should be included in the `tilybot-webservice` README. Use the helper function `getTilybotPayload` to extract the payload from a response. The components should be fairly replaceable, with the attributes/props required being the only thing that must be consistent.

## Api.Ai

To make a request to Api.Ai, import `api`. The imported object has methods `textRequest` and `eventRequest`.


### textRequest(query[, data])

Calling `textRequest` will send a request with the given `query` to the Api.Ai agent. The response returned should contain a `tilybot` payload (something went wrong with the intent if not). Data to be passed along can include additional `contexts` (a `creds` context with user authentication info should usually be included).


### eventRequest(eventName[, data[, eventParams]])

Calling `eventRequest` will send a request and trigger an intent by the given `eventName`. The response returned should contain a `tilybot` payload (something went wrong with the intent if not). Data to be passed along can include additional `contexts` (a `creds` context with user authentication info should usually be included). Additional parameters can also be included in the `eventParams` parameter as a set of key-value pairs.


## Actions

### inputHandler(input)

Handles all of the processes that user input should entail (including sending a textRequest to Api.Ai and handling the response).


### logMessage(message)

Adds a message by `author` to the message log. `message` should have the following structure:

    {
        'author': "TILYBOT",
        'body': "Hello world"
    }

The `author` is either **TILYBOT** or **YOU**.


### nextAction()

If the received payload contains a `next` entry with value `true` then the next action queued up (if one exists) will be sent as an eventRequest immediately. Handling is otherwise the same as `inputHandler`.


### textSubmitHandler(input)

Adds the user's message to the message log and dispatched `inputHandler(input)` to handle the message.