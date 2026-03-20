const http = require("http");

const server = http.createServer((req, res) => {

    // Home API
    if (req.method === "GET" && req.url === "/") {
        res.write("Welcome to My Simple API");
        res.end();
    }

    // Students List API
    else if (req.method === "GET" && req.url === "/students") {
        res.write("Students List\n");
        res.write("1. Sharath\n");
        res.write("2. Riya\n");
        res.write("3. Amit");
        res.end();
    }

    // Create Student API
    else if (req.method === "POST" && req.url === "/students") {
        res.write("Student Created Successfully");
        res.end();
    }

    // Delete Student API
    else if (req.method === "DELETE" && req.url === "/students") {
        res.write("Student Deleted Successfully");
        res.end();
    }

    // Invalid Route
    else {
        res.write("404 - Route Not Found");
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});