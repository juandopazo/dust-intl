DustIntl.__addLocaleData({"locale":"gv","pluralRuleFunction":function (n) {var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;n=Math.floor(n);if(v===0&&i%10===1)return"one";if(v===0&&i%10===2)return"two";if(v===0&&(i%100===0||i%100===20||i%100===40||i%100===60||i%100===80))return"few";if((v!==0))return"many";return"other";},"fields":{"second":{"displayName":"Second","relative":{"0":"now"},"relativeTime":{"future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}},"minute":{"displayName":"Minute","relativeTime":{"future":{"other":"+{0} min"},"past":{"other":"-{0} min"}}},"hour":{"displayName":"Hour","relativeTime":{"future":{"other":"+{0} h"},"past":{"other":"-{0} h"}}},"day":{"displayName":"Day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"other":"+{0} d"},"past":{"other":"-{0} d"}}},"month":{"displayName":"Month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"other":"+{0} m"},"past":{"other":"-{0} m"}}},"year":{"displayName":"Year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"other":"+{0} y"},"past":{"other":"-{0} y"}}}}});