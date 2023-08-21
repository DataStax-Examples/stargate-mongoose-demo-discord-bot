'use strict';

const {createAstraUri, AstraEnvironment} = require("stargate-mongoose");

module.exports = Object.freeze({
    jsonApiUrl: createAstraUri(process.env.ASTRA_DBID, process.env.ASTRA_REGION, process.env.ASTRA_KEYSPACE, process.env.ASTRA_APPLICATION_TOKEN, process.env.ASTRA_ENVIRONMENT ? process.env.ASTRA_ENVIRONMENT : AstraEnvironment.PRODUCTION),
    jsonApiConnectOptions: {
        isAstra: true
    },
});