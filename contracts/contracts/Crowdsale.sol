//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Crowdsale is ReentrancyGuard {
   
    IERC20 public immutable buyToken;
    uint256 public immutable amount;
    address public immutable recieveAddress;

    mapping (address => bool) public participant;

    constructor(address token, address _recieveAddress) {
        require(token != address(0), "Zero address");
        require(_recieveAddress != address(0), "Zero address");
        buyToken = IERC20(token);
        amount = 25 * (10 ** 18);
        recieveAddress = _recieveAddress;
    }

    function buy(address referral) external nonReentrant {
        if (!participant[msg.sender]) {
            participant[msg.sender] = true;
        }
        uint256 refAmount;
        if (referral != address(0)) {
            require(participant[referral], "Not valid referral address");
            refAmount = amount * 4 / 5;
            buyToken.transferFrom(msg.sender, referral, refAmount);
        }
            
        buyToken.transferFrom(msg.sender, recieveAddress, amount - refAmount);
        
    }
}
