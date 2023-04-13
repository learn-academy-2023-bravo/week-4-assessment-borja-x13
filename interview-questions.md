# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: The difference between and object oriented programming (OOP) is that functional programming relies on functions to create logic and manage data. In object oriented programming the data is organized as object, which themselves have their own "functionality" in the form of methods. In OOP object can be classes which enable to create subclasses (child classes) that can both inherit and further specialize that data block as required.

Researched answer: The principles of Object oriented programming are:  

- Encapsulation, where you contain logic inside objects.
- Abstraction, which allow only pertinent code to be shown while hiding unnecessary code.
- Inheritance, which I meantioned before in where a parent class creates a blueprint for child classes.
- Polymorphism, where child classes, while inheriting properties of the parent, can also other properties required for specialization.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: The difference between a float and an integer in Ruby is that a float requires a higher degree of precision, so a float variable requires more memory allocation than an integer.

Researched answer: in my researched answer I found the same thing in that a float provides a higher degree of preceision but an integer requires less memory from the program so it is faster to process, so it is worthwile using an integer when a high degree of accuracy is not required. 

3. Ruby has an implicit return. What does that mean?

Your answer: In Ruby an implicit return means that the last line of a block is always assumed to be the return statement by the program, so it is not needed to expressly write "return" in order to receive the last line of the block as a return. 

Researched answer: In my research I found the same in that the implicit return in Ruby will just return the last line of a block if an explicit return is not given. This is helpful but can also cause issues if one forgets about the implicit return and ends up getting an un-expected return from a block. 

4. What is a block in Ruby?

Your answer: A block in Ruby is a "named" chunk of code that is contained in curly bracers { block } and can be invoked from a function. 

Researched answer: Blocks are anonymous pieces of code that can take input from arguments and return a value. 

5. How do you extract a value in a Ruby hash?

Your answer: I honestly do not remember at all how to manipulate a hash in Ruby. But please look below for my researched answer!

Researched answer: In ruby a hash is collection of key:value pairs similar to dictionaries. You can extract both the keys and values by using a do - end statement as follows

test_hash.each do |key, value|
    puts " Here's the key #{key}, and here is the value #{value} "
end

alternatively if you only wanted the value you can use test_hash.[key] to get only that key's specific value

## Looking Ahead: Terms for Next Week

1. RSpec: RSpec is a test framework for Ruby behaviour driven development. It put emphasys on how the application behaves instead of how it works. The R stands for Ruby and Spec is for Specification. In a Specification we define detailed requirements that the code should meet. 

2. Test-driven development: Test-driven development is a process whereby you begin with the needs or specification that the code will need to meet before the code is actually written. So it is a way of working backwards sort of speak.

3. PostgreSQL: PostgreSQL is an enterprise grade, open-source object relational data base management system.

4. CRUD: CRUD stands for Create, Read, Update, Delete, and they are the essential functions for persistent storage into a database.

5. HTTP: HTTP stands for Hypertext Transfer Protocol and it is a set of rules that define how text, videos, images, sound and other data moves over the web. 
