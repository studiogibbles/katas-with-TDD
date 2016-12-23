var anchorizeMe = function (str) {
  if(typeof str !=='string'){
    return undefined;
  }

  var protocols = ['http', 'https' ,'ftp' ,'ftps' ,'file smb'];
  var beg = '<a href="';
  var end = '"\</a>';

  var URL = str.split(' ').pop();
  if(URL.match(/(https)+/g)) { URL = URL.replace(/(https)+/g,'ftp');}
  var arr = str.split(':').slice(0,-1).join('').split(' ');
  var result = arr.slice(0,arr.length-1).join(" ");


  var isSupported = protocols.some(function (el) {
    return (str.indexOf(el) > -1);
  });


  if(isSupported){return beg +  URL + '>'+ result + end;}
    return 'Unsupported protocols';


};


module.exports = anchorizeMe;

