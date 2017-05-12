/**
 * Created by spider on 8/22/15.
 */

document.PeerXHRRequest =  function(RequestOptions){
    document.PeerXHRRequest.prototype = {
        /* -- Attributes -- */
        /*
         The readyState attribute must return the current state, which must be one of the following:
         UNSENT = 0 - Object has been constructed
         OPENED = 1 - The method open() has been properly envoked
         HEADERS_RECEIVED = 2 - All http headers and p2p fileInfo has been received
         LOADING = 3 - The response is being received
         DONE = 4 - The data transfer has been completed
         */
        //this.readyState;

        /*
         The response attribute returns a reference to the response entity body
         if responseType is "blobUrl"
         return the blobUrl of the blob response entity body
         */
        // this.response;

        /*
         Returns the response type
         Values are: empty string (default) - which responds with text,"text","arraybuffer","blob","blobUrl".
         */
        // this.responseType;

        /*
         Warning:Not implemented
         */
        // this.timeout;

        /*
         Returns the current status of the request
         If an error occured returns:
         peer5.Request.INVALID_RESPONSETYPE = 669;
         peer5.Request.SWARMID_NOT_FOUND_ERR = 650;
         peer5.Request.FILE_SIZE_ERR = 640;
         peer5.Request.FIREFOX_ONLY_SWARM_ERR = 641;
         peer5.Request.CHROME_ONLY_SWARM_ERR = 642;
         peer5.Request.BROWSER_SWARM_COMPAT_ERR = 643;
         peer5.Request.OUT_OF_SPACE_ERR = 644;
         peer5.Request.WRITE_ERR = 645;
         peer5.Request.VERIFICATION_ERR = 646;
         or HTTP status codes
         */
        // this.status;

        /* -- Methods -- */
        /*
         id - either http url for uploading/downloading to/from a server,
         or a swarmId for p2p only case
         method: “GET” / “POST”
         e.g: request.open(“GET”,”images.google.com/img1.jpg”)
         */
        open: function(method, url) {
            console.log("[PeerXHRRequest]open:", method, url);
            this.peer_url = url;
            this.peer_method = method;
        },

        /*
         Warning: only have range
         e.g: (“range”,”5-10”)
         */
        setRequestHeader:function(header, value) {
            console.log("[PeerXHRRequest]setRequestHeader:", header, value);
        },

        /*
         sends the request and activates the peer5 process
         e.g: request.send()
         */
        send: function() {
            var self = this;
            window.peercdn.request(this.peer_url,
                function(response){
                    console.log("Downloaded data:", response);
                    console.log(self);
                    self.readyState = 4;//done flag
                    self.status = 200;//fake ok
                    if(self.responseType == 'arraybuffer'){
                        self.response = response;
                        self.onreadystatechange();
                    }else{
                        var generatedBlob = new Blob(response);
                        self.response = generatedBlob;
                        self.onreadystatechange();
                    }
                }
            );
        },

        /*
         Available only when state >= 2
         content-length,content-range, content-disposition,last-modified
         see http://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Responses
         */
        getResponseHeader:function(){
            console.log("[PeerXHRRequest]getResponseHeader");
            if(this.state >= 2){

            }
        },

        /*
         Available only when state >=2
         content-length,content-range, content-disposition,last-modified
         see http://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Responses
         */
        getAllResponseHeaders:function(){
            console.log("[PeerXHRRequest]getAllResponseHeaders");
            if(this.state >= 2){

            }
        },

        /*
         Available only when state >=2
         returns: fileInfo object
         */
        getFileInfo:function(){
            console.log("[PeerXHRRequest]getFileInfo");
            if(this.state >= 2){

            }
        },

        /*
         This method cancels the download, clears all connections, memory and objects
         offline storage remains
         options =
         {
         leaveSwarm:true or false. default false;
         }
         For example:
         to pause: keeps the connections, keeps the memory/objects, keeps offline storage call abort()
         to stop: terminates connections, memory/objects call abort({leaveSwarm:true})
         to resume in either case create a new request for the same swarmId/url.
         This method triggers the events onabort(),onloadend()
         */
        abort: function() {
            console.log("[PeerXHRRequest]abort");
        },


        /* -- EVENTS --
         These events are null and the user needs to set (“listen” to) them.
         */

        /*
         Adds an event listener by the name specified in eventName with value cb.
         The event that will be triggered will be of the type listened to. e.g: 'load' event will be triggered with addEventListener:function('load',onloadevent)
         */
        addEventListener: function(eventName,cb){
            console.log("[PeerXHRRequest] addEventListener ", eventName, cb)
        },

        /*
         Dispatched when the readyState attribute is changed
         input: event
         */
        onreadystatechange: function(e) {

        },

        /*
         Dispatched once when the request starts
         input: progress event
         */
        onloadstart: function(e) {

        },

        /*
         Dispatched while sending and loading data: each time a p2p block is received and verified or bubbles up xhr’s onprogress
         input: progress event
         */
        onprogress: function(e) {

        },

        /*
         Dispatched when request was aborted, e.g: envoking abort()
         input: progress event
         */
        onabort: function(e) {

        },

        /*
         Dispatched when there was an error in the request which prevents it to continue.
         e.g: size of resource is too large, browser unsupported, CORS error, HTTP errors
         The status attribute returns the error number
         input: progress event
         */
        onerror:function(e) {

        },

        /*
         Dispatched when request was successfully completed
         input: progress event
         */
        onload:function(e) {

        },

        /*
         Warning: not implemented
         When a ‘timeout attribute’ amount of time has passed before the request could complete
         */
        ontimeout:function(e) {

        },

        /*
         Dispatched when request was completed (with or without success)
         input: progress event
         */
        onloadend:function(e) {

        },

        /*
         Dispatched when one of the parameters described in the event are changed
         input: swarm state event
         */
        onswarmstatechange:function(e){

        }
    }
}
document.PeerXHRRequest();