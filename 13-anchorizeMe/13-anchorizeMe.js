var anchorizeMe = function (str) {
  if(typeof str !=='string'){
    return undefined;
  }

  var protocols = ['http', 'https' ,'ftp' ,'ftps' ,'file smb'];
  var beg = '<a href="';
  var end = '\</a>';

  var URL = str.split(' ').pop();
  var arr = str.split(':').slice(0,-1).join('').split(' ').slice(0,-1);
  var result =arr.toString().replace(/,/g," ");


  var isSupported = protocols.some(function (el) {
    return (str.indexOf(el) > -1);
  });


  if(isSupported){return beg +  URL + '>'+result+ end;}
    return 'Unsupported protocols';


};


module.exports = anchorizeMe;

