Homework 3 : Application Executable
This homework will learn about programming languages and can be categorize which types are web application, mobile application or command line languages.

Section 1
ให้หา Executable file / runnable file พร้อมคำสั่งที่ใช้รัน ยกตัวอย่างเช่น ./abc หรือ nong-kai abc ตามภาษาดังนี้
rust
$ ./target/debug/hello_cargo or .\target\debug\hello_cargo.exe on Windows

$ cargo run main.rs

Using cargo run is more convenient than having to remember to run cargo build and then use the whole path to the binary, so most developers use cargo run.

nodejs (javascript)
$ node <index.js>

$ npm run

go
$ go run main.go
java
$ java -jar jarfile.jar

$ javac main.java && java main

C#
$ dotnet run

$ dotnet "main.dll"

Scalar
$ java -jar main.jar สกุล File คือ .sbt / .jar
Haskell
$ runhaskell main.hs
C
$ gcc main.c
php
$ php main.php
ruby
$ ruby main.rb
Typescript (javascript)
$ tsc main.ts
deno
$ deno run main.ts
bun
$ bun run main.js
python
$ python main.py
R
$
Carbon
$ bazel run //explorer -- ./explorer/testdata/print/format_only.carbon
Erlang
% erl -compile Module1...ModuleN && erl -make && erlc <flags> File1.erl...FileN.erl
Kotlin
$ kotlinc main.kt -d main.jar
Flutter
$ lib/main.dart
ObjectiveC
$ gcc main.m
WebAssembly
$
SQL
$ dbisql -c "DSN=SQL Anywhere 12 Demo" myscript.sql Runs the SQL script file myscript.sql against the SQL Anywhere sample database.
Shell
$ ./main.sh
Assembly
$
Switft
Use the swift run command to build and run the executable:

$ swift run main.swift
Also compile the package by running the swift build command and then run the binary from .build directory:

$ swift build && .build/x86_64-apple-macosx10.10/debug/Hello
Lua
$ ./main.lua
Section 2
ให้ทำการเลือกภาษาด้านบน ว่าภาษาไหนสามารถนำมาทำ Web Application อย่างน้อย 15 ภาษา, Mobile Applicaiton ได้อย่างน้อย 4 ภาษา, Command Line อย่างน้อย 10 ภาษา พร้อมทั้งบอกคำสั่งที่ทำให้ Appliacation ทำงาน (วิธีการรัน / วิธี execute)
Web Application Languages
Java
$ java -jar jarfile.jar

$ javac main.java && java main

PHP
$ php main.php
Python
$ python main.py
JavaScript
$ node <index.js>
Swift
Use the swift run command to build and run the executable:

$ swift run main.swift
Also compile the package by running the swift build command and then run the binary from .build directory:

$ swift build && .build/x86_64-apple-macosx10.10/debug/Hello
Kotlin
$ kotlinc main.kt -d main.jar
Ruby
$ ruby main.rb
TypeScript
$ tsc main.ts
WebAssembly
$
C#
dotnet run

dotnet "main.dll"

Deno
$ deno run main.ts
Bun
$ bun run main.js
Lua
$ ./main.lua
SQL
$ dbisql -c "DSN=SQL Anywhere 12 Demo" myscript.sql Runs the SQL script file myscript.sql against the SQL Anywhere sample database.
Flutter
$ lib/main.dart
Rust
$ ./target/debug/hello_cargo or .\target\debug\hello_cargo.exe on Windows

$ cargo run main.rs

Mobile application Languages

Flutter
Objective-C : For writing iOS apps
Swift : For writing iOS apps
Python : Android
C : Android
C ++ : Android
Java : Android
Command Line Languages
Shell
Haskell
SQL
Python
Ruby
Lua
Assembly
Scalar
Erlang
References:
https://www.tutorialspoint.com/erlang/erlang_overview.htm\
https://www.erlang.org/doc/reference_manual/typespec.html#type-information-in-record-declarations
https://github.com/carbon-language/carbon-lang
https://infocenter.sybase.com/help/index.jsp?topic=/com.sybase.help.sqlanywhere.12.0.1/dbusage/load-s-4696303.html
https://fireart.studio/blog/top-most-popular-programming-languages-for-mobile-app-development/
https://becominghuman.ai/top-10-best-web-application-development-languages-8204aad91bc4
https://docs.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=windows
https://harperdb.io/blog/is-bun-the-new-node-js/
