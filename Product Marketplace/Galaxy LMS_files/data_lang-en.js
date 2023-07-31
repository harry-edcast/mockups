(function(a) {
            if(a && typeof a['wm-deepui-um-cb'] !== 'undefined'){
                ;
                var obj = {};
                ;
                obj.getData = function() { return {"executeOnFindElementFailure":true,"quotaTimeParams":{"period":20000,"deepUiTimeQuota":18000},"feRunQuotaParams":{"period":2000,"timeQuota":1000,"longDurationTime":400,"aggregateDataTimeIntervalSec":60},"checkPhrasesThreshold":0.1,"useHarvesterThreshold":0.01,"minCheckPhrasesInterval":5000,"reportResultsThreshold":1,"reportResultsInterval":2000,"reportResultsBufferThreshold":1,"reportResultsCachePeriod":0,"sendEndUserDataWithResults":true,"mapCaptureIdAndJqueryToInt":{"0 0":0,"0 1":1,"1 0":2,"1 1":1},"playerReportResultsThreshold":0.001,"feCacheResultParams":{"period":1600,"cleanCachedElementsInterval":10000},"feCacheResultEnabled":true,"blackList":[],"useDeepUiExecution":false,"ignoreIframe":false,"whiteList":[],"regexPatterns":[],"cacheCssOnS3":{"enabled":true},"earlyCapture":true,"encryptedDom":true,"expectedHash":true,"splitDataFile":true,"deepUiDisabled":true,"asyncTaskHandler":{"analyzeAutomatonResult":true},"superEnhancedStyles":true,"logPerformanceEvents":true,"feCacheResultThreshold":1,"superSilentCacheEnabled":true,"automatonPerformanceTracking":true,"feRunQuotaAggregationEnabled":false,"feRunQuotaAggregationThreshold":0.1,"elements":{},"platforms":[],"timestamp":1687861836117,"inProgress":false,"lastUpdatedAt":null,"salt":"acog","bFParams":{},"encryptedAttributes":[],"filterTemplates":[],"deployableTransitionIds":[],"transitionIdentifiers":[],"transitionedElements":[]} };
                
                ;
                a['wm-deepui-um-cb'](obj);
            }
        })(window && window._walkmeInternals);