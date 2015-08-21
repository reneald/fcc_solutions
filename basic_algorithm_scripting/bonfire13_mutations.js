function mutation(arr) {
  var targ = arr[0].toLowerCase().split('');
  var test = arr[1].toLowerCase().split('');
  var mut = false;
  for (var i = 0; i < test.length; i++){
    mut = false;
  	if(targ.indexOf(test[i]) == -1){
  		break;
  	}
  	else{
  		mut = true;
  	}
  	}
  return mut;
}

mutation(['hello', 'hey']);