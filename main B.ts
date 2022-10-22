let message;
message = 'abc';
let endswithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c'); 
