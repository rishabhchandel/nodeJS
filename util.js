## sentPushNotification

var sender = new gcm.Sender('GFgfhjkgggbhgyutUHJLKEFJxCIr6IxrmD80Nl7YK2vmxq7anuFI');

var message = new gcm.Message({
  notification: {
    title: 'rishabh notification',
    icon: 'icon',
    body: 'notification data'
  }
});

message.addData({
  key1: 'message1',
  key2: 'message2'
});

sender.send(message, { registrationTokens: registrationTokens }, function(err, response) {
  if (err) console.error(err);
  else console.log(response);
});
