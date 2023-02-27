// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract SampleContract {

    uint favouriteNumber;
    event NumberUpdated (uint num);

function readNumber () view public returns(uint){
    
return favouriteNumber;
}

function writeNumber (uint _number) public {
    favouriteNumber = _number;
    emit NumberUpdated(_number);
}


}