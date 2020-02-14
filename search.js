var idxSearch = 0;

function setupSearch(id, tags) {
    document.getElementById(id).oninput = function(ev) {
        
        if(idxSearch>0)
            clearTimeout(idxSearch);

        var ctn = ev.target.value;
        if(ctn.length==0) {
            hideSearch();
        }
        else {
            var tofetch = "https://aidesimplemente.search.windows.net/indexes/aide-altazion/docs?api-version=2019-05-06&$filter=type/any(t :";
            tofetch += tags;
            tofetch += ")&query=";
            tofetch += ctn;
            
            idxSearch = setTimeout(function() {
                fetch(tofetch, { headers: {'Content-Type': 'application/json', 'api-key':'49367045F36D07C494C5589504195957'} }).then(function(response){
                    return response.json();
                }).then(function (data) {
                    showSearch(data);
                });
            }, 250);
        }
    }
    var tmp = document.createElement("div");
    tmp.id = "altazion-search";
    tmp.className = "altazion-search";
    document.body.appendChild(tmp);

    tmp = document.createElement("link");
    tmp.attributes["rel"] = "stylesheet";
    tmp.attributes["href"] = "/search.css";
    document.head.appendChild(tmp);
}

function showSearch(data) {
    console.log(data.values);
    document.getElementById("altazion-search").classList.add("visible");
}

function hideSearch(){
    document.getElementById("altazion-search").classList.remove("visible");
}

setupSearch("searchBox", "t eq 'dev'");
