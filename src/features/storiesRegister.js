const importAll = r => {
    const stories = {};
    r.keys().forEach((item, i) => { stories[item.replace('./', '')] = r(item); });
    return stories
};

importAll(require.context('./../Story/stories', true, /\.js/));