# Broken App Issues

1. A minor issue, but the app.listen(3000) did not have a console.log so I couls see the server was running. 
2. The middleware app.use(express.json()); was not present in the file, so the data fcould not be parsed as json. 
3. There was no get request. 
4. There was no promise in the code. 
5. Not a big issue, but the origional code was using return res.send(JSON.stringify(out)) as opposed to res.json(out)
6. It was not catching the error properly because of a syntax error. catch {next(err)  as opposed to catch(err) {next (err);}.

