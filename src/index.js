/**
 * 模板引擎
 * @param  {String} str  模板字符串
 * @param  {Object} data 数据
 * @return {String}      html代码
 */
function template(str, data) {
    var reg = /<%(.*?)%>/g,
        match = null,
        result = 'var str="";',
        params = '',
        args = [],
        start = 0;

    //拼接代码
    while (match = reg.exec(str)) {
        if (start < match.index) {
            result += 'str+="' + str.slice(start, match.index).replace(/\n|\r/g, '') + '";';
        }
        if (match[1].charAt(0) == '-') { //如果是赋值语句<%-data%>
            result += 'str+=' + match[1].slice(1) + ';';
        } else { //如果是流程语句
            result += match[1];
        }
        start = match.index + match[0].length;
    }
    result += 'str+="' + str.slice(start).replace(/\n|\r/g, '') + '";';
    result += 'return str;';

    //拼接参数
    for (var key in data) {
        params += key + ',';
        args.push(data[key]);
    }
    params = params.slice(0, -1);

    //执行代码
    return new Function(params, result).apply(window, args);
}