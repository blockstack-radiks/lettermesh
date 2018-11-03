const sanitizeHTML = require('sanitize-html');
const request = require('request-promise');

const sanitize = html => sanitizeHTML(html, {
  allowedTags: sanitizeHTML.defaults.allowedTags.concat(['img']),
});

const getGraphiteHTML = async (uri) => {
  const { content } = await request({
    uri,
    json: true,
  });
  return sanitize(content);
};

module.exports = {
  sanitize,
  getGraphiteHTML,
};
