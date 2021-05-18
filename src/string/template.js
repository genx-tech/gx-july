import _template from 'lodash/template';

const templateSettings = {
    escape: false,
    evaluate: false,
    imports: false,
    interpolate: /{{([\s\S]+?)}}/g,
    variable: false
};

function compile(str) {
    return _template(str, templateSettings);
}

/**
 * Interpolate values 
 * @alias string.template
 * @param {string} str
 * @param {object} values
 * @returns {string}
 */
function template(str, values) {
    return compile(str)(values);
}

template.compile = compile;
export default template;