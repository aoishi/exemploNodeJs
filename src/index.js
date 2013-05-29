var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/textupload"] = requestHandlers.textupload;
handle["/showtext"] = requestHandlers.showtext;
handle["/show"] = requestHandlers.show;
handle["/blocking"] = requestHandlers.blocking;
handle["/noblocking"] = requestHandlers.noblocking;
server.start(router.route, handle);
