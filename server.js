var http = require ("http");
var fs = require("fs");
var os = require("os");
var uptime = os.uptime();
var ip = require("ip");


function convertMS(ms) {
    var d, h, m, s;
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {d: d, h: h, m: m, s: s };
}

http.createServer(function(req, res){
    if (req.url === "/") {
        fs.readFile("./public/index.html", "UTF-8", function(err, body){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(body);
        });
    }
    else if (req.url.match("/sysinfo")) {
            myHostName=os.hostname();
            myServerUptime = 0;
            myTotalMemory = 0;
            myFreeMemory = 0;
            myCPUCount = 0;

            html=`
            <!DOCTYPE HTML>
            <HTML>
                <HEAD>
                    <title> Node JS SysInfo </title>
                </head>
                <body>
                    <p> Hostname:  ${myHostName} </p>
                    <p> IP: ${ip.address()} </p>
                    <p> Server Uptime: Days: ${Math.round(parseFloat(os.uptime()/(24 * 3600)))} , Hours: ${Math.round(parseFloat(os.uptime()%(24 * 3600) / 3600))} , Minutes: ${Math.round(parseFloat(os.uptime() %(24 * 129600000) / 60))} , Seconds: ${Math.round(parseFloat(os.uptime()%(24 * 777600000) / 60))}  </p>
                    <p> Total Memory: ${Math.round(parseFloat(os.totalmem()/1048576))} MB </p>
                    <p> Free Memory: ${Math.round(parseFloat(os.freemem()/1048576))} MB </p>
                    <p> Number of CPUs: ${os.cpus().length} </p>
                </body>
            </html>
            `
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
    }

    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 file not found")
    }
}).listen(3000);


console.log("Server listening on port 3000");