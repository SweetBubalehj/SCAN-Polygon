// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface IRandomContract{
    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 amount) external returns (bool);
}

contract RandomContract{
    function getContractBalance(address token) public view returns(uint256){
        return IRandomContract(token).balanceOf(address(this));
    }

    function transferTo(address token, address to, uint256 amount) public{
        IRandomContract(token).transfer(to, amount);
    }
}