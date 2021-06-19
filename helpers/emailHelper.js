const Helper = require('@codeceptjs/helper');

class EmailHelper extends Helper {
  endpoint = "https://api.testmail.app/api/json?apikey=c4e00a28-8f3d-493d-bcbd-b126290fe4e0&namespace=pl1ub";
  namespace = "pl1ub"
  apiKey = "4e00a28-8f3d-493d-bcbd-b126290fe4e0"

  generateUniqueEmailAddress() {
    // Random Char function taken from: https://www.codegrepper.com/code-examples/javascript/generate+unique+string+in+javascript

    let randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let tag = '';
    for ( var i = 0; i < 6; i++ ) {
        tag += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return ({ email: `${this.namespace}.${tag}@inbox.testmail.app`, tag: tag });
  }

  async extractLoginConfirmationLink(emailBody) {
    const links = emailBody.match(/\bhttps?:\/\/\S+/gi);
    
    // Third link in the array is the confirmation link
    return links[2];
  }


}

module.exports = EmailHelper;
