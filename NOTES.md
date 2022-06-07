# Notes

## Angular

Client-side errors - On the client side, when something unexpected happens, a JavaScript Error is thrown. It has two important properties that we can use:

- message — Human-readable description of the error.
- stack — Error stack trace with a history (call stack) of what files were ‘responsible’ of causing that Error.

Server-side errors - On the server-side, when something goes wrong, a HttpErrorResponse is returned. As with the JavaScript error, it has a message property that we can use for notifications.
