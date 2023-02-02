export function getAllUrlParams(url?:string){
    if(url){
    return url;
    }  
var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj:any = {};
  if (queryString) {
    queryString = queryString.split('#')[0];
    var arr = queryString.split('&');
    for (var i=0; i<arr.length; i++) {
      var a:any = arr[i].split('=');
      let paramNum:any = undefined;
      var paramName:any = a[0].replace(/\[\d*\]/, (v:any) => {
        paramNum = v.slice(1,-1);
        return '';
      });
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();
      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        if (typeof paramNum === 'undefined') {
          obj[paramName].push(paramValue);
        }
        else {
          obj[paramName][paramNum] = paramValue;
        }
      }
      else {
        obj[paramName] = paramValue;
      }
    }
  }
  //console.log('location and device', obj);
url = obj;
  return obj;
}