function dataHandler (req, res, next) {
    var reportData = dataHandler[req.body.type](req.body);
    res.json({message: 'data received', data: reportData});
}

dataHandler.envData = function (reportData) {
    reportData.report = {
        adapter: reportData.data[0].playerAdapter,
        timeToLoad: reportData.data[0].date,
        urlProtocol: reportData.data[0].pageURL.split('/')[0].replace(':', ''),
        urlDomain: reportData.data[0].pageURL.split('/')[2],
        urlPath: reportData.data[0].pageURL.split('/')
    };



    console.log('\nENV DATA RECEIVED', reportData);
    return reportData;
};

dataHandler.adData = function (reportData) {
    console.log('\nAD DATA RECEIVED', reportData);
    return reportData;
};

dataHandler.assetData = function (reportData) {
    console.log('\nASSET DATA RECEIVED', reportData);
    return reportData;
};

dataHandler.eventLog = function (reportData) {
    console.log('\nEVENT LOG DATA RECEIVED', reportData);
    return reportData;
};

module.exports = dataHandler;