import ElasticEmail from '@elasticemail/elasticemail-client';
import "dotenv/config";

const { ELASTICEMAIL_API_KEY, ELASTICEMAIL_FROM } = process.env;

let defaultClient = ElasticEmail.ApiClient.instance;

const { apikey } = defaultClient.authentications;
apikey.apiKey = ELASTICEMAIL_API_KEY;

const api = new ElasticEmail.EmailsApi()

const email = ElasticEmail.EmailMessageData.constructFromObject({
    Recipients: [
        new ElasticEmail.EmailRecipient("lafic23473@viperace.com")
    ],
    Content: {
        Body: [
            ElasticEmail.BodyPart.constructFromObject({
                ContentType: "HTML",
                Content: "<strong>Test email</strong>"
            })
        ],
        Subject: "Test email",
        From: ELASTICEMAIL_FROM,
    }
});

const callback = function (error, data, response) {
    console.log(error);
    if (error) {
        console.error(error.message);
    } else {
        console.log('API called successfully.');
    }
};

api.emailsPost(email, callback);