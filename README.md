# mbta-hticket
hybrid web app for mbta ticketing

Start the mysql database server...

install mysql and start the database service
run the database creation script mbtadb.sql

Start the app server...

C:\Users\8470p\mbta-hticket\mbta_server>nodemon app.js
[nodemon] 1.12.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
Database is connected ...

Start the client...

C:\Users\8470p\mbta-hticket\mbta_client>ionic serve
Starting app-scripts server: --address 0.0.0.0 --port 8100 --livereload-port
35729 --dev-logger-port 53703 --nobrowser - Ctrl+C to cancel
[08:50:17]  watch started ...
[08:50:17]  build dev started ...
[08:50:17]  clean started ...
[08:50:17]  clean finished in 18 ms
[08:50:17]  copy started ...
[08:50:17]  deeplinks started ...
[08:50:17]  deeplinks finished in 77 ms
[08:50:17]  transpile started ...
[08:50:21]  transpile finished in 4.17 s
[08:50:21]  preprocess started ...
[08:50:21]  preprocess finished in 10 ms
[08:50:21]  webpack started ...
[08:50:23]  copy finished in 6.46 s
[08:50:34]  webpack finished in 12.51 s
[08:50:34]  sass started ...
[08:50:36]  sass finished in 2.12 s
[08:50:36]  postprocess started ...
[08:50:36]  postprocess finished in 20 ms
[08:50:36]  lint started ...
[08:50:36]  build dev finished in 19.35 s
[08:50:36]  watch ready in 19.63 s
[08:50:36]  dev server running: http://localhost:8100/

[OK] Development server running!
     Local: http://localhost:8100
     External: http://172.20.10.3:8100
     DevApp: mbta_client@8100 on 8470p-PC
	 
	 
Known Issues and Workarounds...

1. 	 The alert message for a failed login pops up again on the transition to the registration page. Quit the alert to continue with registration.


TODO list ...
1. Add ssl to login and registration pages so that passwords and personal information is not sent in the open.
2. Add password hash like MD5 to stored passwords in the database so that passwords are not stored in plain text.
3. Add format validations to forms for email and requirements on passwords.
4. Use prepared statements on server to avoid sql injections.
5. Source the sql creation script and convert the json datafile to sql directly from node instead of using the python script to eliminate the extra step outside of the primary development environment. This will speed up any changes to the the database definition and sample data inserts.
6. Change cursor style and highlight row in start/stop route lists on hover
7. Change users table to User and tickets to Ticket for convention that tables are not plural and they start with a capital letter.
8. Change username field in ticket table to an index for faster lookups. The username is guaranteed to be unique, but it's a string (an email address) so will not scale well as the table size increases.
9. Add more fields for user registration like username, to be used in other parts of the app such as the greeting
10. Refactor login and register to share common code (lots of duplication)
11. Change the name of route classes that refer to mbta routes as they may be confused with app routes
12. Add a confirmation dialog before saving ticket
13. Make all variable names camel case, event json keys (less error prone to stick to one convention)

Credits to tutorials...
http://devdactic.com/user-auth-angularjs-ionic/
and https://devdactic.com/login-ionic-2/
and http://devdactic.com/restful-api-user-authentication-1/
and many other postings
