module.express = function(app) {
    app.get("/survey",  function(req, res)  {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
}