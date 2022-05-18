function countWord() {
    var text = document
        .getElementById("word").value;

    var count = 0;
    var split = text.split(' ');
    for (var i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }
    document.getElementById("show")
        .innerHTML = count;

    //max
    var s = document
        .getElementById("word").value;
    var split = s.split(' ');
    var a = 0;
    for (var i = 0; i < split.length; i++) {
        a = Math.max(split[i].length, a);
    }
    document.getElementById("show1")
        .innerHTML = a;

    //min
    var b = document
        .getElementById("word").value;
    var d = b.split(/\W+/)
    var l = d.map(e => e.length)
    var r = Math.min(...l)
    document.getElementById("show2")
        .innerHTML = r;

    //ave
    var str = document
        .getElementById("word").value;
    const averageWordLength = str => {
        if(!str.includes(' ')){
            return str.length;
        };
        const { length: strLen } = str;
        const { length: numWords } = str.split(' ');
        const average = (strLen - numWords + 1) / numWords;
        return average.toFixed(2);
    };
    document.getElementById("show3")
        .innerHTML = averageWordLength(str);
}
