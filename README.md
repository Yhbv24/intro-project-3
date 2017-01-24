# PING-PONG... Sort of!
#### By Ash Laidlaw

## About the Project

This project will return all numbers from 1 to the number you enter. If the number is divisible by 3, it will return "ping". If it's divisible by 5, it will return "pong". If it's divisible by 15, it will return "ping-pong".

## Get Started

To get started, please either:

* Clone the repository to your desktop at <https://github.com/Yhbv24/intro-project-3> and open the index.html file
* Visit the GH Pages site at <https://yhbv24.github.io/intro-project-3/>

## Specifications

1. Return an error message if a user enters a number below 1.
   * Input: 0
   * Expected output: Please enter a valid number in the field.

2. Return an error message if a user doesn't enter anything.
   * Input: Nothing
   * Expected output: Please enter a valid number in the field.

3. Return all numbers from 1 to the number the user enters.
   * Input: 2
   * Expected output: 1, 2

4. Return "ping" for numbers divisible by 3.
   * Input: 6
   * Expected output: 1, 2, ping, 4, 5, ping

5. Include step 4, and also return "pong" for numbers divisible by 5.
   * Input: 14
   * Expected output: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14

6. Include steps 4 and 5, and also return "ping-pong" for numbers that are divisible by 15.
   * Input: 30
   * Expected output: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, ping-pong, 16, 17, ping, 19, pong, ping, 22, 23, ping, pong, 26, ping, 28, 29, ping-pong

7. Upon form submit, refresh unordered list so it shows only the new output
   * Input: 2
   * Expected output: Only show 1 and 2, not output from the previous search

## Known Issues

No bugs or issues that I have found

## Updates

23 January, 2017
   * Made variable names easier to understand
   * Updated README so that all expected inputs/outputs are accurate

## Licensing

This is an MIT-licensed project.

## Copyright

© Ash Laidlaw, 2017
