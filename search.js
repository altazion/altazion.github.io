var idxSearch = 0;

document.getElementById("searchBox").oninput = function(ev) {
    
    if(idxSearch>0)
        clearTimeout(idxSearch);

    var ctn = ev.target.value;
    if(ctn.length==0) {

    }
    else {
        var tofetch = "https://aidesimplemente.search.windows.net/indexes/aide-altazion/docs?api-version=2019-05-06&&$count=30$filter=type/any(t : t eq 'dev')&query=";
        tofetch += ctn;
        
        idxSearch = setTimeout(function() {
            fetch(tofetch, { headers: {'Content-Type': 'application/json', 'api-key':'49367045F36D07C494C5589504195957'} }).then(function(response){
                return response.json();
            }).then(function (data) {
                console.log(data.values);
            });
        }, 250);
    }

}