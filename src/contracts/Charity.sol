// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Charity {
    uint public totalRecords = 0;
    mapping(uint => Record) records;

    struct Record {
        string charityName;
        address payable owner;
        address payable charityAddress;
        uint256 totalDonos;
        uint256 highestDono;
        address payable highestDonor;
    }

    function listCharity(
        address payable _owner,
        address payable _charityAddress,
        string memory _charityName
    ) public {
        require(isContract(_owner));
        require(isContract(_charityAddress));
        require(msg.sender != address(0));
        
        records[totalRecords] = Record(_charityName,_owner,_charityAddress,0,0,payable(address(0)));

    }

    function isContract(address _a) public view returns (bool) {
        uint size;
        assembly {
            size := extcodesize(_a)
        }
        return size > 0;
    }
}
