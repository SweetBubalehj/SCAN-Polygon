// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface IScan {
    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8);
}

contract Scan{

    // FALSE - user address, TRUE - contract address
    function isContract(address account) internal view returns (bool) {
        return account.code.length > 0;
    }

    function getTokenData(address token) external view returns(string memory symbol, uint8 decimals){
        symbol = IScan(token).symbol();
        decimals = IScan(token).decimals();
    }

    function getUsersData(address[] memory users) 
        external 
        view 
        returns(bool[] memory)
    {
        uint len = users.length;
        bool[] memory usersData = new bool[](users.length);

        for (uint i = 0; i < len; i++)
        {
            usersData[i] = isContract(users[i]);
        }
        
        return usersData;
    }
    
}