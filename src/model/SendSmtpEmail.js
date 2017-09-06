/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SendSmtpEmailAttachment', 'model/SendSmtpEmailBcc', 'model/SendSmtpEmailCc', 'model/SendSmtpEmailReplyTo', 'model/SendSmtpEmailSender', 'model/SendSmtpEmailTo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SendSmtpEmailAttachment'), require('./SendSmtpEmailBcc'), require('./SendSmtpEmailCc'), require('./SendSmtpEmailReplyTo'), require('./SendSmtpEmailSender'), require('./SendSmtpEmailTo'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.SendSmtpEmail = factory(root.SendinBlueApi.ApiClient, root.SendinBlueApi.SendSmtpEmailAttachment, root.SendinBlueApi.SendSmtpEmailBcc, root.SendinBlueApi.SendSmtpEmailCc, root.SendinBlueApi.SendSmtpEmailReplyTo, root.SendinBlueApi.SendSmtpEmailSender, root.SendinBlueApi.SendSmtpEmailTo);
  }
}(this, function(ApiClient, SendSmtpEmailAttachment, SendSmtpEmailBcc, SendSmtpEmailCc, SendSmtpEmailReplyTo, SendSmtpEmailSender, SendSmtpEmailTo) {
  'use strict';




  /**
   * The SendSmtpEmail model module.
   * @module model/SendSmtpEmail
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SendSmtpEmail</code>.
   * @alias module:model/SendSmtpEmail
   * @class
   * @param to {Array.<module:model/SendSmtpEmailTo>} Email addresses and names of the recipients
   * @param htmlContent {String} HTML body of the message
   * @param subject {String} Subject of the message
   */
  var exports = function(to, htmlContent, subject) {
    var _this = this;


    _this['to'] = to;


    _this['htmlContent'] = htmlContent;

    _this['subject'] = subject;



  };

  /**
   * Constructs a <code>SendSmtpEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendSmtpEmail} obj Optional instance to populate.
   * @return {module:model/SendSmtpEmail} The populated <code>SendSmtpEmail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sender')) {
        obj['sender'] = SendSmtpEmailSender.constructFromObject(data['sender']);
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], [SendSmtpEmailTo]);
      }
      if (data.hasOwnProperty('bcc')) {
        obj['bcc'] = ApiClient.convertToType(data['bcc'], [SendSmtpEmailBcc]);
      }
      if (data.hasOwnProperty('cc')) {
        obj['cc'] = ApiClient.convertToType(data['cc'], [SendSmtpEmailCc]);
      }
      if (data.hasOwnProperty('htmlContent')) {
        obj['htmlContent'] = ApiClient.convertToType(data['htmlContent'], 'String');
      }
      if (data.hasOwnProperty('textContent')) {
        obj['textContent'] = ApiClient.convertToType(data['textContent'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('replyTo')) {
        obj['replyTo'] = SendSmtpEmailReplyTo.constructFromObject(data['replyTo']);
      }
      if (data.hasOwnProperty('attachment')) {
        obj['attachment'] = ApiClient.convertToType(data['attachment'], [SendSmtpEmailAttachment]);
      }
      if (data.hasOwnProperty('headers')) {
        obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SendSmtpEmailSender} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * Email addresses and names of the recipients
   * @member {Array.<module:model/SendSmtpEmailTo>} to
   */
  exports.prototype['to'] = undefined;
  /**
   * Email addresses and names of the recipients in bcc
   * @member {Array.<module:model/SendSmtpEmailBcc>} bcc
   */
  exports.prototype['bcc'] = undefined;
  /**
   * Email addresses and names of the recipients in cc
   * @member {Array.<module:model/SendSmtpEmailCc>} cc
   */
  exports.prototype['cc'] = undefined;
  /**
   * HTML body of the message
   * @member {String} htmlContent
   */
  exports.prototype['htmlContent'] = undefined;
  /**
   * Plain Text body of the message
   * @member {String} textContent
   */
  exports.prototype['textContent'] = undefined;
  /**
   * Subject of the message
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {module:model/SendSmtpEmailReplyTo} replyTo
   */
  exports.prototype['replyTo'] = undefined;
  /**
   * Pass the absolute URL (no local file) or the base64 content of the attachment. Name can be used in both cases to define the attachment name. It is mandatory in case of content. Extension allowed: gif, png, bmp, cgm, jpg, jpeg, tif, tiff, rtf, txt, css, shtml, html, htm, csv, zip, pdf, xml, ods, doc, docx, docm, ics, xls, xlsx, ppt, tar, and ez
   * @member {Array.<module:model/SendSmtpEmailAttachment>} attachment
   */
  exports.prototype['attachment'] = undefined;
  /**
   * @member {Object.<String, String>} headers
   */
  exports.prototype['headers'] = undefined;



  return exports;
}));


