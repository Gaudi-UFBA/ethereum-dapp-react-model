pragma solidity ^0.4.23;

contract TestContract {
    mapping(uint8 => string) public messages;
    uint8 private count = 0;

    function add(string memory msg) public{
        messages[count++] = msg;
    }
}