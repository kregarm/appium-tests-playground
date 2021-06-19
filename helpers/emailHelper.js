const Helper = require('@codeceptjs/helper');

class EmailHelper extends Helper {

  generateUniqueEmailAddress() {
    // Random Char function taken from: https://www.codegrepper.com/code-examples/javascript/generate+unique+string+in+javascript
    let randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let tag = '';
    for ( var i = 0; i < 6; i++ ) {
        tag += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return ({ email: `${process.env.EMAIL_API_NAMESPACE}.${tag}@inbox.testmail.app`, tag: tag });
  }

  async extractLoginConfirmationLink(emailBody) {
    const links = emailBody.match(/\bhttps?:\/\/\S+/gi);
    
    // Third link in the array is the confirmation link
    return links[2];
  }
}

module.exports = EmailHelper;
