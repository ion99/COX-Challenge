function modifier(string){
  function check(input){
    let res = [];
    for (let i = 0; i < input.length; i++){
      if(!res.includes(input[i]) && input[i].match(/[a-zA-Z]+/g)){
        res.push(input[i]);
      }
    }
    return res.length;
  }
  let result = [];
  let matches = string.match(/[a-zA-Z]+/g);
  //console.log(matches);
  for (let i = 0; i < matches.length; i++){
    if(matches[i].length === 1) {
      let str = "";
      str += matches[i];
      result.push(str);
    }
    if(matches[i].length > 1){
      let str = "";
      //console.log(matches[i].substr(1, matches[i].length - 2));
    str += matches[i][0] + check(matches[i].substr(1, matches[i].length - 2)) + matches[i][matches[i].length - 1];
    result.push(str);
    }
  }
  return result.join(" ");
  
}

//modifier("Hello my name is Ion");