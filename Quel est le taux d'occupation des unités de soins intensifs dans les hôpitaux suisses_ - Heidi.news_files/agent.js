window.RorVsWild || (RorVsWild = {})

RorVsWild.start = function(options) {
  return RorVsWild.agent || (RorVsWild.agent = new RorVsWild.Agent(options))
}

// RorVsWild.start({apiKey: "API_KEY"})
RorVsWild.Agent = function(options) {
  this.options = {}

  for (var key in RorVsWild.Agent.defaultOptions)
    this.options[key] = RorVsWild.Agent.defaultOptions[key]

  for (var key in options)
    this.options[key] = options[key]

  window.addEventListener("error", this.catchError.bind(this))
}

RorVsWild.Agent.defaultOptions = {
  apiUrl: "https://www.rorvswild.com/api/v1"
}

RorVsWild.Agent.prototype.catchError = function(event) {
  if (!window.StackTrace)
    RorVsWild.loadStackTrace(function() { this.catchError(event) }.bind(this))
  else {
    this.formatError(event, function(params) {
      this.sendError(params)
    }.bind(this))
  }
}

RorVsWild.Agent.prototype.formatError = function(event, callback) {
  var data = {
    file: event.filename == document.location.href ? "Document" : (event.filename || "Unknow"), // Prevent from degrouping similar errors
    line: event.lineno,
    message: event.message,
    exception: (event.error && event.error.name) || "Unknow",
    backtrace: (event.error && event.error.stack) || "Not available",
    environment: {
      url: document.location.href,
      platform: navigator.platform,
      user_agent: navigator.userAgent,
      referer: document.referrer,
      language: navigator.language,
      cookiesEnabled: navigator.cookiesEnabled,
      timestamp: event.timeStamp,
    },
  }

  StackTrace.fromError(event.error).then(function(array) {
    data.backtrace = []
    for (var i = 0; i < array.length; i++)
      data.backtrace.push(array[i].fileName + ":" + array[i].lineNumber + " " + array[i].functionName)
    if (document.location.href != array[0].fileName) {
      // Prevent from degrouping similar errors
      data.line = array[0].lineNumber || "Unknow"
      data.file = array[0].fileName || 0
    }
    this.sendError(data)
  }.bind(this)).catch(function() { this.sendError(data) }.bind(this))
}

RorVsWild.Agent.prototype.sendError = function(params) {
  var request = new XMLHttpRequest()
  request.open("POST", this.options.apiUrl + "/errors", true)
  request.setRequestHeader("Content-Type", "application/json")
  request.setRequestHeader("Authorization", "Basic " + btoa(":" + this.options.apiKey))
  request.send(JSON.stringify({error: params}))
}

RorVsWild.loadStackTrace = function(callback) {
  this.loadScript("https://cdn.rorvswild.com/stackstrace.js", callback)
}

RorVsWild.loadScript = function(url, callback) {
   var script = document.createElement("script")
   script.type = "text/javascript"
   script.src = url
   script.onreadystatechange = callback
   script.onload = callback
   document.head.appendChild(script)
}
