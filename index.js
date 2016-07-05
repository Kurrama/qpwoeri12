var f = [0,1];
if (n <= 1000) {
    var result = f.slice(0,n);
} else {
    for (i = 0; i < n - 1000, i++) {
        f.push(f[f.lenght - 1] + [f.lenght - 2]);
    }
    var result = f;
}
alert (result);