
var tweet = 'Make Scotland great again! #notmyhair #russianfanboy';
var tags = 0;

for(var i = 0; i < tweet.length; i++) {
    if(tweet[i] == '#') {
        tags++;
    }
}

setTimeout(() => alert(tags), 2500)




