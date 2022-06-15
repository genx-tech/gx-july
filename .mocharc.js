require('@babel/register')({
    sourceMaps: true,
});

module.exports = {
    timeout: 60000,
    require: ['should'],
};
