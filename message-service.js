export default class MessageService {

getAllMessages() {
    const request = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {
        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                const threads = JSON.parse(request.responseText);
                resolve(threads);
            } else {
                reject({
                    status: request.status,
                    statusText: request.statusText
                });
            }
        };

        request.open("GET", "http://zipcode.rocks:8085/messages");

        request.send();
    }).then(successCallback, errorCallback);

    function successCallback(response) {
        console.log(response);
    }

    function errorCallback(response) {
        console.log(response);
    }
}

createNewMessage(message) {
    const request = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {
        // Setup our listener to process compeleted requests
        request.onload = function () {
            // Process the response
            if (request.status >= 200 && request.status < 300) {
                // If successful
                resolve(JSON.parse(request.responseText));
            } else {
                reject({
                    status: request.status,
                    statusText: request.statusText
                });
            }
        };

        request.open("POST", `http://zipcode.rocks:8085/ids/${message.fromid}/messages`);

        request.send(JSON.stringify(message));
    });
}


}