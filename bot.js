
const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder(message => {
  if (message.type === 'facebook') {
      response = [];
      if (message.text === 'hey'){
        var greeting = new fbTemplate.Text('Hey there! I\'m Iyanla, a conversation friend to help you with conflicts.').get();
        var q = new fbTemplate.Button('What\'s going on today?')
          .addButton('micro-aggressions', 'AGGRESSION')
          .addButton('advice', 'ADVICE')
          .get();
       response.push(greeting, q);
      }
      if(message.text === 'AGGRESSION'){
        message = new fbTemplate.Text('That sounds shitty. Know that you are a powerful and beautiful being. ');
        response.push('That sounds shitty. Know that you are a powerful and beautiful being.');
      }
      if(message.text === 'ADVICE'){
        message = new fbTemplate.Text('I\'m sorry' );
        response.push('I\'m sorry.');
      }
       return response;
  }
});
