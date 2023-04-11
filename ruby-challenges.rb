# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'
edge_case = 'not a number'
# Expected output: 'Not sure what we are trying to do here...'
numeral_string = '13'
# Expected output: 'Not sure what we are trying to do here...'

# this was my first try at the function, but I wanted it to handle edge cases. I didn't think about the fact that I would get an error as soon as number.odd? was faced with a non number varliable. So I decided to refactor.
# def odd_or_even (number)
#     if number.odd?
#         "#{number} is odd"
#     elsif number.even?
#         "#{number} is even"
#     else
#         'Not sure what we are trying to do here...'      
#     end
# end

def odd_or_even number
    if number.is_a? Numeric
        if number.odd?
            "#{number} is odd"
        else
            "#{number} is even"
        end
    else 
        'Not sure what we are trying to do here...'  
    end
end

p "-----------This is challenge one: -----------"
p odd_or_even reposts1 # "7 is odd"
p odd_or_even reposts2 # "42 is even"
p odd_or_even reposts3 # "221 is odd"
p odd_or_even edge_case # "Not sure what we are trying to do here..."
p odd_or_even numeral_string # "Not sure what we are trying to do here..."

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowels_be_gone string
    string.delete "AEIOUaeiou"
end

p "-----------This is challenge two: -----------"
p vowels_be_gone beatles_album1 #"Rbbr Sl"
p vowels_be_gone beatles_album2 #"Sgt Pppr"
p vowels_be_gone beatles_album3 #"bby Rd" 

# I learned a lot with this problem. The syntax wasn't as obvious as I thought and ended up spending a good amount of effort with it. 


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_palindrome string
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end
end

p "-----------This is challenge three: -----------"
p is_palindrome palindrome_tester1 #"Racecar is a palindrome"
p is_palindrome palindrome_tester2 #"LEARN is not a palindrome"
p is_palindrome palindrome_tester3 #"Rotator is a palindrome"
